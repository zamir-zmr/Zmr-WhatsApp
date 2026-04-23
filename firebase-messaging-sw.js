importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js');

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

// Jab app BAND ho tab bhi notification aaye
messaging.onBackgroundMessage((payload) => {
    console.log('Background notification:', payload);
    self.registration.showNotification(payload.notification.title, {
        body: payload.notification.body,
        icon: '/icon.png'
    });
});
