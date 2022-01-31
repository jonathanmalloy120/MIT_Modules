module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '56aac8d59ff6fd533ac808db1d64a8ae'),
  },
});
