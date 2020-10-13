import firebase from "firebase/app";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyBUVIuOIynekOvoDuXr3FskeE2WJcas1vc",
  authDomain: "the-real-you-6297e.firebaseapp.com",
  databaseURL: "https://the-real-you-6297e.firebaseio.com",
  projectId: "the-real-you-6297e",
  storageBucket: "the-real-you-6297e.appspot.com",
  messagingSenderId: "98430719004",
  appId: "1:98430719004:web:2f3532e3f812a2cbe03bd9",
  measurementId: "G-7TYR1X8S13",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export const options = {
//   rootRef: "blogs/",
  app: firebaseApp,
  logging: true,
  persistence: 'session',
};
