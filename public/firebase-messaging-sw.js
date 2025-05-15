importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging.js');

const firebaseConfig = {
    apiKey: "AIzaSyB6MmjEED0p1qNWhpbhiciRQ-6FUd4Gjew",
    authDomain: "sanaa-4286a.firebaseapp.com",
    projectId: "sanaa-4286a",
    storageBucket: "sanaa-4286a.firebasestorage.app",
    messagingSenderId: "910968808052",
    appId: "1:910968808052:web:9b6d86804b69944fcce721",
    measurementId: "G-PMEQPN5ZTG"
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
    console.log('Received background message:', payload);
    const notificationTitle = payload.notification?.title || 'Background Message';
    const notificationOptions = {
        body: payload.notification?.body || 'You have a new message!',
        icon: '/favicon.ico',
    };

    self.registration.showNotification(notificationTitle, notificationOptions);
});