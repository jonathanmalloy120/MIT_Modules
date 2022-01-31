module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '19cd640d92a696501a5cf3ab8ec51930'),
  },
});
