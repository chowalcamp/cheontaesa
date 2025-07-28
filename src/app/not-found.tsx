"use client";

import React from "react";
import Head from "next/head";

export default function NotFoundPage() {
  return (
    <>
      <Head>
        <title>404 - Page Not Found</title>
        <meta name="description" content="The requested page was not found." />
      </Head>
      <div className="not-found-container">
        <h1 className="not-found-title">404</h1>
        <p className="not-found-message">The page you are looking for does not exist.</p>
      </div>
    </>
  );
}