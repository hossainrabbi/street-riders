import React, { useContext, useState } from 'react';
import { Container } from 'react-bootstrap';
import { UserContext } from '../../App';
import CustomForm from '../CustomForm/CustomForm';
import {
    createUserWithEmail,
    facebookProvider,
    firebaseInitializeApp,
    githubProvider,
    googleProvider,
    signInUserWithEmail,
    signInWithPopup,
} from '../FireBase/firebase';
import {
    faFacebookF,
    faGithub,
    faGoogle,
} from '@fortawesome/free-brands-svg-icons';
import './Login.css';
import { useHistory, useLocation } from 'react-router';
import SocialBtn from './SocialBtn';

firebaseInitializeApp();

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [newUser, setNewUser] = useState(false);
    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: '/' } };

    const onSubmit = (data) => {
        const { name, email, password } = data;

        if (newUser && name && email && password) {
            createUserWithEmail(name, email, password)
                .then((res) => handleResponse(res))
                .catch((err) => setLoggedInUser(err));
        }

        if (!newUser && email && password) {
            signInUserWithEmail(email, password)
                .then((res) => handleResponse(res))
                .catch((err) => setLoggedInUser(err));
        }
    };

    const handleGoogleLogin = () => {
        signInWithPopup(googleProvider)
            .then((res) => handleResponse(res))
            .catch((err) => setLoggedInUser(err));
    };

    const handleFacebookLogin = () => {
        signInWithPopup(facebookProvider)
            .then((res) => handleResponse(res))
            .catch((err) => setLoggedInUser(err));
    };

    const handleGithubLogin = () => {
        signInWithPopup(githubProvider)
            .then((res) => handleResponse(res))
            .catch((err) => setLoggedInUser(err));
    };

    const handleResponse = (res) => {
        setLoggedInUser(res);
        history.replace(from);
    };

    return (
        <Container>
            <div className="Login">
                {loggedInUser.error && (
                    <p className="text-center text-danger">
                        {loggedInUser.error}
                    </p>
                )}
                <CustomForm
                    onSubmit={onSubmit}
                    newUser={newUser}
                    setNewUser={setNewUser}
                />
                <p className="or text-center my-3">or</p>
                <div className="login-social-media">
                    <SocialBtn
                        login={handleGoogleLogin}
                        socialIcon={faGoogle}
                        bgColor={'#E04831'}
                        loginName={'Google'}
                    />
                    <SocialBtn
                        login={handleFacebookLogin}
                        socialIcon={faFacebookF}
                        bgColor={'#1299F6'}
                        loginName={'Facebook'}
                    />
                    <SocialBtn
                        login={handleGithubLogin}
                        socialIcon={faGithub}
                        bgColor={'#161B22'}
                        loginName={'GitHub'}
                    />
                </div>
            </div>
        </Container>
    );
};

export default Login;
