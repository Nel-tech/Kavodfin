import { Redis } from '@upstash/redis'

const redis = new Redis(process.env.UPSTASH_REDIS_REST_UR);

redis.ping().then((res) => {
  console.log("Redis is working:", res);
  process.exit();
});
