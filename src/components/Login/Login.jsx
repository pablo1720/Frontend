import { useEffect, useState } from 'react';
import Header from '../Home/Header/Header';
import Footer from '../Home/Footer/Footer';
import Body from './Body/Body';

const Login = ({ onUserLogin, loginResponse }) => {

    const [render, setRender] = useState();

    useEffect(() => {
        setRender(true);
    }, []);

    return (
        <>
            <Header render={render} />
            <Body onUserLogin={onUserLogin} loginResponse={loginResponse} />
            <Footer />
        </>
    );
};

export default Login;
