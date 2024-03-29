import {FIREBASE_AUTH} from './firebaseConfig'
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth'

const auth = FIREBASE_AUTH;

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account"
})

export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
