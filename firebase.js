import firebase from 'firebase';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyAWn61eZayF0jBIKDoIJhBiXPI3cQkbO48',
  authDomain: 'facebook-yt-build.firebaseapp.com',
  projectId: 'facebook-yt-build',
  storageBucket: 'facebook-yt-build.appspot.com',
  messagingSenderId: '1081404773295',
  appId: '1:1081404773295:web:1fca4b326c0ba123cc555a',
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const storage = firebase.storage();

export { db, storage };
