import { createApp, log } from "./app";

(async () => {
  const { app, httpServer } = await createApp();

  if (process.env.VERCEL) {
    // Served by Vercel serverless via api/index.ts; do not listen here.
    return;
  }

  const port = parseInt(process.env.PORT || "5000", 10);
  httpServer.listen(
    {
      port,
      host: "0.0.0.0",
      reusePort: true,
    },
    () => {
      log(`serving on port ${port}`);
    },
  );
})();
