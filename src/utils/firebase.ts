import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: 'AIzaSyCIpsF6CZldhYC_GL5ZJ_KB63QgUgYYauU',
  authDomain: 'madrocket-project.firebaseapp.com',
  projectId: 'madrocket-project',
  storageBucket: 'madrocket-project.firebasestorage.app',
  messagingSenderId: '527713643639',
  appId: '1:527713643639:web:3ebd0c495c7fc0fe62aa72',
  measurementId: 'G-B116DX85SJ',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
