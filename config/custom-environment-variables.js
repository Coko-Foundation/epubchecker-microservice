module.exports = {
  secret: 'SECRET',
  port: 'SERVER_PORT',
  db: {
    host: 'POSTGRES_HOST',
    port: 'POSTGRES_PORT',
    database: 'POSTGRES_DB',
    user: 'POSTGRES_USER',
    password: 'POSTGRES_PASSWORD',
    allowSelfSignedCertificates: {
      __name: 'POSTGRES_ALLOW_SELF_SIGNED_CERTIFICATES',
      __format: 'json',
    },
    caCert: 'POSTGRES_CA_CERT',
  },

  clientID: 'CLIENT_ID',
  clientSecret: 'CLIENT_SECRET',
}
