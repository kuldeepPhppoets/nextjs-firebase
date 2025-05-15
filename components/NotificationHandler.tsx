'use client';

import { useEffect } from 'react';
import { messaging } from '../lib/firebaseClient';
import { getToken, onMessage } from 'firebase/messaging';

export default function NotificationHandler() {
    const YOUR_VAPID_KEY = "BHms1urr1AvVcmOtSgU5oqYkfdu4gTRSzqowdc8wzx_COqRBuo4v5oytngZduzRDuUqczhcbWt9MunSEDr5rVUk";
    useEffect(() => {
        if (!messaging) return;

        const requestPermission = async () => {
            try {
                const permission = await Notification.requestPermission();
                if (permission === 'granted' && messaging) {
                    
                     // Register the service worker for background handling
                    const registration = await navigator.serviceWorker.register("/firebase-messaging-sw.js");
                    const token = await getToken(messaging, { vapidKey: YOUR_VAPID_KEY, serviceWorkerRegistration: registration });
                    console.log('FCM Token:', token);
                    // Optionally, send the token to your server
                } else {
                    console.log('Notification permission denied');
                }
            } catch (error) {
                console.error('Error getting permission or token:', error);
            }
        };

        requestPermission();
    }, []);

    useEffect(() => {
        if (!messaging) return;

        const unsubscribe = onMessage(messaging, (payload) => {
            console.log('Foreground message received:', payload);
            // Example: Show a browser notification
            const notification = new Notification(payload.notification?.title || 'Notification', {
                body: payload.notification?.body,
                icon: '/favicon.ico',
            });
        });

        return () => unsubscribe();
    }, []);

    return null; // Renders nothing
}