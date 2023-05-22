import "dotenv/config";

module.exports = {
  name: "loyalty",
  version: "1.0.0",
  ios: {
    bundleIdentifier: "com.ioetbc.loyalty",
  },
  extra: {
    iosClient: process.env.IOS_CLIENT_ID,
    androidlient: process.env.ANDROID_CLIENT_ID,
    webClient: process.env.WEB_CLIENT_ID,
    firebaseConfig: {
      apiKey: process.env.FIREBASE_API_KEY,
      authDomain: process.env.FIREBASE_AUTH_DOMAIN,
      projectId: process.env.FIREBASE_PROJECT_ID,
      storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
      messageSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
      appId: process.env.FIREBASE_APP_ID,
      measurementId: process.env.FIREBASE_MEASUREMENT_ID,
    },
  },
};
