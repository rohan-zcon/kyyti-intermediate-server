const fetch = require("node-fetch");
var axios = require("axios");
var qs = require("qs");
const BASE_URL = "172.30.102.178";

async function ax({ port = 8080, path }, { headers, body }) {
  try {
    console.log(
      "🚀 ~ file: fetchPost.js:51 ~ ax ~ http://${BASE_URL}:${port}${path}:",
      `http://${BASE_URL}:${port}${path}`
    );
    const response = await axios.post(
      `http://${BASE_URL}:${port}${path}`,
      body,
      {
        headers,
      }
    );
    console.log("🚀 ~ file: fetchPost.js:55 ~ ax ~ response:", response);
    return response.data;
  } catch (error) {
    console.log("🚀 ~ file: fetchPost.js:58 ~ ax ~ error:", error);
  }
}
// async function ax() {
//   try {
//     const response = await axios.post(
//       `http://${BASE_URL}:8080/auth/v2/login/email`,
//       {
//         email: "zcon.rohans@gmail.com",
//       },
//       {
//         headers: {
//           "Kyyti-App-AppId": "com.kyyti.ride.vamos.dev",
//           "Accept-Language": "en",
//           "Kyyti-App-DeviceId": "ce367a5670aa8612",
//           "Kyyti-App-DeviceManufacturer": "Xiaomi",
//           "Kyyti-App-DeviceModel": "Mi A2",
//           "Kyyti-App-Platform": "android",
//           "Kyyti-App-Version": "2.25.0.1",
//           "Content-Type": "application/json",
//           Authorization: "Bearer q1ijQdrp2I2O53CCdg4VUUR69Ia7cJ-A",
//           Cookie:
//             "tuupSessionID=s%3AXtFSXQyA4v2XU9qbmR4rr_2FZDrmMmY7.jfjTm9hBtlcZGRS7mIRBVGtPFyguoErSUbv1vmprHlg",
//         },
//       }
//     );
//     console.log("🚀 ~ file: fetchPost.js:67 ~ ax ~ response:", response);
//     return response.data;
//   } catch (error) {
//     console.log("🚀 ~ file: fetchPost.js:71 ~ name ~ error:", error);
//   }
// }

module.exports = ax;
