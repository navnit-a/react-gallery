import {initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";
import {getAuth} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyBFvanGJ9ZkYe3D4W74zQ7jumNVUXsESHA",
	authDomain: "firestock-4d82e.firebaseapp.com",
	projectId: "firestock-4d82e",
	storageBucket: "firestock-4d82e.appspot.com",
	messagingSenderId: "290741375522",
	appId: "1:290741375522:web:28960609e87ab6c76b307b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);
export default app;
