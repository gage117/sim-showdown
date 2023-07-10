const { RateLimiterMemory } = require('rate-limiter-flexible');

const opts = {
  points: 4, // 4 points
  duration: 1, // Per second
};

const rateLimiter = new RateLimiterMemory(opts);

const rateLimiterMiddleware = (req, res, next) => {
  rateLimiter.consume(req.ip, 1)
    .then(() => {
      next();
    })
    .catch(() => {
      res.status(429).send('Too Many Requests');
    });
};

module.exports = rateLimiterMiddleware;