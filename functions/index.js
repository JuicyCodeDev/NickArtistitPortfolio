const functions = require("firebase-functions");

// The Firebase Admin SDK to access Firestore.
const admin = require("firebase-admin");

admin.initializeApp();

// // Create and deploy your first functions
// // https://firebase.google.com/docs/functions/get-started
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

const oldToken = process.env.INSTA_TOKEN;

// exports.updateAccessToken = functions.pubsub
//   .schedule("0 0 1 * *") // every first day of the month
//   .onRun(async (context) => {
//     const db = admin.firestore();
//     const docRef = db.collection("insta").doc("BMxnREo3O5uGgqyDx584");
//     // refresh instagram basic display api access token
//     const res = await fetch(
//       `https://graph.instagram.com/refresh_access_token?grant_type=ig_refresh_token&&access_token=${oldToken}`
//     );
//     const data = await res.json();

//     const newAccessToken = data.access_token;
//     await docRef.update({ access_token: newAccessToken });
//   });

exports.pubSubTest = functions.pubsub

  //schedule every 5 seconds

  .schedule("*/5 * * * *")

  .onRun(async (context) => {
    console.log("pubSubTest ran");
  });
