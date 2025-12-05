// lib/ratelimit.ts
import Redis from 'ioredis';

const redis = new Redis({
  host: process.env.REDIS_HOST,
  port: Number(process.env.REDIS_PORT),
  password: process.env.REDIS_PASSWORD,
});

// simple sliding window rate limiter
export async function rateLimit(key: string, limit = 5, window = 10) {
  const now = Date.now();
  const windowStart = now - window * 1000;

  // store timestamps in a Redis sorted set
  await redis.zremrangebyscore(key, 0, windowStart);
  const current = await redis.zcard(key);

  if (current >= limit) {
    return false; // rate limit exceeded
  }

  await redis.zadd(key, now, now.toString());
  await redis.expire(key, window); // expire after window
  return true;
}
