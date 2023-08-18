import { initializeApp, getApp, getApps } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAx4uefl9cNf1OUJC3oddfPEWOm0M0N2vo',
  authDomain: 'hotel-management-60a97.firebaseapp.com',
  projectId: 'hotel-management-60a97',
  storageBucket: 'hotel-management-60a97.appspot.com',
  messagingSenderId: '17931860398',
  appId: '1:17931860398:web:1cd081c034dfb2963eb03f',
};
// Initialize Firebase if our app is not Initialised
const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

//Export all the app, storage and firestore

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
