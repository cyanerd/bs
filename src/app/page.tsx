"use client";

import dynamic from "next/dynamic";

import "./styles.css";

const DynamicPage = dynamic(() => import("@/page"), {
  ssr: false,
});

export default function Home() {
  return <DynamicPage />;
}
