module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '390409a090b156a80d8e62bfa61da38c'),
  },
});
