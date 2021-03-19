import firebase from 'firebase/app';
import 'firebase/auth';
import { firebaseConfig } from './firebase.config';

export const firebaseInitializeApp = () => {
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    } else {
        firebase.app();
    }
};

export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const facebookProvider = new firebase.auth.FacebookAuthProvider();
export const githubProvider = new firebase.auth.GithubAuthProvider();

export const signInWithPopup = (provider) => {
    return firebase
        .auth()
        .signInWithPopup(provider)
        .then((res) => {
            const user = res.user;
            user.error = '';
            return user;
        })
        .catch((err) => {
            const user = {};
            user.error = err.message;
            return user;
        });
};

export const createUserWithEmail = (name, email, password) => {
    return firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then((res) => {
            const user = res.user;
            user.error = '';
            updateName(name);
            return user;
        })
        .catch((err) => {
            const user = {};
            user.error = err.message;
            return user;
        });
};

const updateName = (name) => {
    const user = firebase.auth().currentUser;

    user.updateProfile({
        displayName: name,
    });
};

export const signInUserWithEmail = (email, password) => {
    return firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then((res) => {
            const user = res.user;
            user.error = '';
            return user;
        })
        .catch((err) => {
            const user = {};
            user.error = err.message;
            return user;
        });
};
