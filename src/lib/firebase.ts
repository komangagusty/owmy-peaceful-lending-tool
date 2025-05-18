import { initializeApp } from "firebase/app";
import { getAnalytics, logEvent } from "firebase/analytics";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA7dk73mdUVyVsnXO80_uKvSFAJcCXBTrQ",
    authDomain: "owwyapp.firebaseapp.com",
    projectId: "owwyapp",
    storageBucket: "owwyapp.firebasestorage.app",
    messagingSenderId: "71666057364",
    appId: "1:71666057364:web:74dc3dbfe2b84eae75b481",
    measurementId: "G-F3P1ZF3CVT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Export a function to log events
export const trackEvent = (eventName: string, eventParams?: Record<string, any>) => {
  logEvent(analytics, eventName, eventParams);
};

export { app, analytics };