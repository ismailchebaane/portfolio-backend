// server.ts (Deno version)
import { Application, Router } from "https://deno.land/x/oak/mod.ts";
import { oakCors } from "https://deno.land/x/cors/mod.ts";
import { config } from "https://deno.land/x/dotenv/mod.ts";
import { MongoClient } from "https://deno.land/x/mongo@v0.31.1/mod.ts";

// Load environment variables
const env = config();

// MongoDB connection
const client = new MongoClient();
await client.connect(env.MONGODB_URI || "");
const db = client.database("portfolio");

// Create Oak app and router
const app = new Application();
const router = new Router();

// Middleware
app.use(oakCors({
  origin: ["http://localhost:3000", "http://localhost:5173"],
  credentials: true,
}));
app.use(async (ctx, next) => {
  try {
    await next();
  } catch (err) {
    ctx.response.status = 500;
    ctx.response.body = { error: err.message };
  }
});
app.use(router.routes());
app.use(router.allowedMethods());

// Health check route
router.get("/api/health", (ctx) => {
  ctx.response.body = {
    status: "OK",
    message: "Portfolio API is running",
    timestamp: new Date().toISOString(),
  };
});

// Example of one route (profile) using Deno Mongo driver
router.get("/api/profile", async (ctx) => {
  const profiles = await db.collection("profiles").find().toArray();
  ctx.response.body = profiles;
});

// You need to convert your other routes similarly
// For example: projects, experience, skills, education, languages, contact

// Start server
const PORT = Number(env.PORT) || 5000;
console.log(`🚀 Server running on http://localhost:${PORT}`);
await app.listen({ port: PORT });
