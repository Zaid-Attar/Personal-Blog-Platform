import ratelimiter from "../config/upstash.js";

const rateLimiter = async (req, res, next) => {
    try {
        const { success } = await ratelimiter.limit(req.ip);
        if (!success) {
            return res.status(429).json({ error: "Toooo many requests" });
        }
        next();
    } catch (error) {
        console.error("Error occurred while checking rate limit (falling back):", error);
        next(); // Graceful fallback: don't block users if Redis is sleeping/paused
    }
};

export default rateLimiter;