import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: "AIzaSyDgbAN3TVckqt6Qh7RvqK1bqfm_SY4mhqY",
  authDomain: "task-91f1f.firebaseapp.com",
  databaseURL: "https://task-91f1f-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "task-91f1f",
  storageBucket: "task-91f1f.appspot.com",
  messagingSenderId: "552537121176",
  appId: "1:552537121176:web:f5f5d55fa881d2c674cbed",
  measurementId: "G-MPZFLVD75J"
};
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
const auth = getAuth(app);
const database = getDatabase(app);
const analytics = getAnalytics(app);

export { auth, database, analytics };

