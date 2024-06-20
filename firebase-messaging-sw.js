// public/firebase-messaging-sw.js
importScripts('https://www.gstatic.com/firebasejs/9.6.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.6.1/firebase-messaging-compat.js');

const firebaseConfig = {
  apiKey: "AIzaSyCopOMRZQOoH9R30lpbka1mPXImj1597sU",
  authDomain: "exemplo-37a59.firebaseapp.com",
  projectId: "exemplo-37a59",
  storageBucket: "exemplo-37a59.appspot.com",
  messagingSenderId: "208886733001",
  appId: "1:208886733001:web:f5b6f96a73485859c49518",
  measurementId: "G-NDSHVKE3QT"
};
firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();
// Customize background notification handling here
messaging.onBackgroundMessage((payload) => {
  console.log('Background Message:', payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };
  self.registration.showNotification(notificationTitle, notificationOptions);
});