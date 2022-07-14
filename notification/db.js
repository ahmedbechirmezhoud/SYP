import { initializeApp } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

const app = initializeApp();

export const db = getFirestore();

export async function getTokens(Segment = "ALL", notification) {
  console.log(app.name);

  let PushTokens = [];

  let querySnapshot;

  if (Segment === "ALL") {
    querySnapshot = db.collection("users");
  } else if (Segment === "STAFF") {
    querySnapshot = db.collection("users").where("staff", "==", true);
  } else {
    console.error("INVALID SEGMENT");
    return;
  }

  const docs = await querySnapshot.get();
  var batch = db.batch();
  docs.forEach((doc) => {
    if (doc.data()?.NotificationToken) {
      PushTokens.push(doc.data()?.NotificationToken);
      console.log("sending to " + doc.data()?.FirstName);
    }
    batch.update(db.collection("users").doc(doc.id), {
      Notifications: doc.data()?.Notifications
        ? [
            { title: notification.title, message: notification.body },
            ...doc.data()?.Notifications,
          ]
        : [{ title: notification.title, message: notification.body }],
    });
  });
  await batch.commit();

  return PushTokens;
}
