import { useEffect, useState } from "react";
import Header from "../Home/Header/Header";
import Footer from "../Home/Footer/Footer";
import Body from "./Body/Body";


const Singup = ({ setUserInfo, onUserRegister, loginResponse }) => {

    const [render, setRender] = useState();

    useEffect(() => {
        setRender(true);
    }, []);

    return (
        <>
            <Header render={render} />
            <Body setUserInfo={setUserInfo} onUserRegister={onUserRegister} loginResponse={loginResponse} />
            <Footer />
        </>
    );
};

export default Singup;