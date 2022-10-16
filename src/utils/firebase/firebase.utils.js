import { initializeApp } from 'firebase/app';
import {
	getAuth,
	signInWithRedirect,
	signInWithPopup,
	GoogleAuthProvider,
} from 'firebase/auth';

const firebaseConfig = {
	apiKey: 'AIzaSyBXNQYZvsGeHY1rTxl5Gbsqd0hBjuESVSY',
	authDomain: 'crwn-clothing-db-4a9ca.firebaseapp.com',
	projectId: 'crwn-clothing-db-4a9ca',
	storageBucket: 'crwn-clothing-db-4a9ca.appspot.com',
	messagingSenderId: '846765989035',
	appId: '1:846765989035:web:a87dc50186c630ed506bee',
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
	prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
