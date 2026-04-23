importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js');

firebase.initializeApp({
    apiKey: "AIzaSyA3bsKfP7CxS0Sb0CY6xu_vFogVcxbJCII",
    authDomain: "ashcostingapp.firebaseapp.com",
    databaseURL: "https://ashcostingapp-default-rtdb.firebaseio.com",
    projectId: "ashcostingapp",
    storageBucket: "ashcostingapp.firebasestorage.app",
    messagingSenderId: "576053214259",
    appId: "1:576053214259:web:e47a6c38721d62580fb746"
});

const messaging = firebase.messaging();

// Background notification handler
messaging.onBackgroundMessage((payload) => {
    console.log('Background Message:', payload);
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: '/icon.png' // Apne icon ka path check karein
    };

    self.registration.showNotification(notificationTitle, notificationOptions);
});
