import express from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';

const app = express();
const PORT = 3001;
const API_BASE_URL = 'https://presale.blockstranding.com/api';

const NEED_BASIC_AUTH = process.env.PROXY_BASIC_AUTH === 'false' ? false : true;
const BASIC_AUTH_USER = process.env.PROXY_BASIC_AUTH_USER || 'dev';
const BASIC_AUTH_PASS = process.env.PROXY_BASIC_AUTH_PASS || '123123123qweqweqwe';
const getBasicAuthHeader = () => {
  if (!NEED_BASIC_AUTH) return {};
  const token = Buffer.from(`${BASIC_AUTH_USER}:${BASIC_AUTH_PASS}`).toString('base64');
  return { Authorization: `Basic ${token}` };
};

// CORS middleware
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
  }
  
  next();
});

// Proxy middleware
app.use('/api', createProxyMiddleware({
  target: API_BASE_URL,
  changeOrigin: true,
  pathRewrite: {
    '^/api': '',
  },
  onProxyReq: (proxyReq, req) => {
    const headers = getBasicAuthHeader();
    for (const [k, v] of Object.entries(headers)) {
      proxyReq.setHeader(k, v);
    }

    console.log(`[PROXY] ${req.method} ${req.url} -> ${API_BASE_URL}${req.url.replace(/^\/api/, '')}`);
  },
  onProxyRes: (proxyRes, req) => {
    console.log(`[PROXY] ${req.method} ${req.url} <- ${proxyRes.statusCode}`);
  },
  onError: (err, req, res) => {
    console.error(`[PROXY ERROR] ${req.method} ${req.url}:`, err.message);
    res.status(500).json({ error: 'Proxy error', message: err.message });
  },
}));

// Healthcheck and fallback 404 with logging
app.get('/health', (_req, res) => res.json({ ok: true }));

app.use((req, res) => {
  console.warn(`[404] ${req.method} ${req.url}`);
  res.status(404).json({ error: 'Not found' });
});

app.listen(PORT, () => {
  console.log(`🚀 Proxy server running on http://localhost:${PORT}`);
  console.log(`📡 Proxying requests to ${API_BASE_URL}`);
});

