import type { IncomingMessage, ServerResponse } from "http";
import { createApp } from "../server/app";

let appPromise: ReturnType<typeof createApp> | null = null;

function getApp() {
  if (!appPromise) appPromise = createApp();
  return appPromise;
}

/**
 * Vercel serverless handler: all requests are sent here via vercel.json rewrites.
 * The Express app serves the API, static client assets, and SPA fallback.
 */
export default async function handler(
  req: IncomingMessage,
  res: ServerResponse,
): Promise<void> {
  const { app } = await getApp();
  app(req, res);
}
