module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '0bf640accf446f1435e747d3c7ae4afa'),
  },
});
