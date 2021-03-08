import firebase from 'firebase';

var firebaseConfig = {
    apiKey: 'AIzaSyCpXbCPbP5CsI8N8OId1tAKq-w8Bxb2FkQ',
    authDomain: 'login-ee980.firebaseapp.com',
    projectId: 'login-ee980',
    storageBucket: 'login-ee980.appspot.com',
    messagingSenderId: '138899779676',
    appId: '1:138899779676:web:6fe0da5cfa24b7c7f13699',
};

// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);
export default fire;
