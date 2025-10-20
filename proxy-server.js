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

// Proxy middleware
app.use('/api', (req, res, next) => {
  // Set CORS headers before proxy
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173');
  res.setHeader('Access-Control-Allow-Credentials', 'true');

  // Handle OPTIONS preflight
  if (req.method === 'OPTIONS') {
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization, Cookie');
    return res.sendStatus(200);
  }

  next();
}, createProxyMiddleware({
  target: API_BASE_URL,
  changeOrigin: true,
  cookieDomainRewrite: {
    '*': '', // Remove domain from cookies to make them work on localhost
  },
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
}));


// Healthcheck and fallback 404 with logging
app.get('/health', (_req, res) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.json({ ok: true });
});

app.use((req, res) => {
  console.warn(`[404] ${req.method} ${req.url}`);
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.status(404).json({ error: 'Not found' });
});

app.listen(PORT, () => {
  console.log(`🚀 Proxy server running on http://localhost:${PORT}`);
  console.log(`📡 Proxying requests to ${API_BASE_URL}`);
});

