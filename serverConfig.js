 const config = {
  port: process.env.APP_PORT || 5000,
  url: process.env.APP_URL || 'http://127.0.0.1',
  enviroment: process.env.APP_ENV || 'env',
};

module.exports = config;
