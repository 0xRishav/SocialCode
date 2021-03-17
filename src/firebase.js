import firebase from 'firebase';

const firebaseConfig = {
	apiKey: 'AIzaSyDGe2Ipamd9fWMUZhm427OydcIbtZBDdkw',
	authDomain: 'rsocial-by-rishav.firebaseapp.com',
	projectId: 'rsocial-by-rishav',
	storageBucket: 'rsocial-by-rishav.appspot.com',
	messagingSenderId: '1782258806',
	appId: '1:1782258806:web:eac1d59f1ccbaccad85357',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const provider = new firebase.auth.GoogleAuthProvider();

// const isUserSignedIn = () => {
// 	firebase.auth().onAuthStateChanged(function (user) {
// 		if (user) {
// 			return true;
// 		} else {
// 			return false;
// 		}
// 	});
// };

export { db, auth, provider, storage };
