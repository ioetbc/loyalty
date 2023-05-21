import "dotenv/config";

module.exports = {
  name: "loyalty",
  version: "1.0.0",
  extra: {
    iosClient: process.env.IOS_CLIENT_ID,
    androidlient: process.env.ANDROID_CLIENT_ID,
    webClient: process.env.WEB_CLIENT_ID,
  },
};
