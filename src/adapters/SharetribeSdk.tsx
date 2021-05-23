const sharetribeSdk = require('sharetribe-flex-sdk');

export const Sdk = sharetribeSdk.createInstance({
    clientId: process.env.REACT_APP_SHARETRIBE_CLIENT_ID
  });

export {}