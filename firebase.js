// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDKNJQnqj_eMEAXLx2Mt3RcOUW8nxGSWOk',
  authDomain: 'webelec-693a7.firebaseapp.com',
  projectId: 'webelec-693a7',
  storageBucket: 'webelec-693a7.appspot.com',
  messagingSenderId: '913873476552',
  appId: '1:913873476552:web:d5c53fbf4d102048f13efd',
  measurementId: 'G-0JYYYPBLS2',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
