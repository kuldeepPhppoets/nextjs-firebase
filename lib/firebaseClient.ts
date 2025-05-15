'use client';

import { initializeApp } from 'firebase/app';
import { getMessaging, isSupported } from 'firebase/messaging';

const firebaseConfig = {
    apiKey: "AIzaSyB6MmjEED0p1qNWhpbhiciRQ-6FUd4Gjew",
    authDomain: "sanaa-4286a.firebaseapp.com",
    projectId: "sanaa-4286a",
    storageBucket: "sanaa-4286a.firebasestorage.app",
    messagingSenderId: "910968808052",
    appId: "1:910968808052:web:9b6d86804b69944fcce721",
    measurementId: "G-PMEQPN5ZTG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Messaging only if supported in the browser
const messaging = typeof window !== 'undefined' && (await isSupported()) ? getMessaging(app) : null;

export { messaging };