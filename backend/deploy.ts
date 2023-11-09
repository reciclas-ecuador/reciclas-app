import * as fs from 'fs'

((): void => {
  // create a json file using the firebase-admin credentials
  const config = {
    type: process.env.FIREBASE_TYPE ?? '',
    project_id: process.env.FIREBASE_PROJECT_ID ?? '',
    private_key_id: process.env.FIREBASE_PRIVATE_KEY_ID ?? '',
    private_key: process.env.FIREBASE_PRIVATE_KEY ?? '',
    client_email: process.env.FIREBASE_CLIENT_EMAIL ?? '',
    client_id: process.env.FIREBASE_CLIENT_ID ?? '',
    auth_uri: process.env.FIREBASE_AUTH_URI ?? '',
    token_uri: process.env.FIREBASE_TOKEN_URI ?? '',
    auth_provider_x509_cert_url: process.env.FIREBASE_AUTH_PROVIDER_X509_CERT_URL ?? '',
    client_x509_cert_url: process.env.FIREBASE_CLIENT_X509_CERT_URL ?? '',
    universe_domain: process.env.FIREBASE_UNIVERSE_DOMAIN ?? ''
  }

  fs.writeFileSync('./dist/reciclasapp-firebase-adminsdk.json', JSON.stringify(config).replace(/\\n/g, '').split('\\').join('\\n'))
})()
