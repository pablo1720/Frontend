import { useEffect, useState } from "react";
import Header from "../Home/Header/Header";
import Body from './Body/Body';
import Footer from "../Home/Footer/Footer";

const UserOpenRecipe = ({ setSearchTerm, loginUserInfo }) => {

    const [render, setRender] = useState(false);
    const [user, setUser] = useState(false);

    useEffect(() => {
        setRender(false);
        setUser(true);
    }, []);

    return (
        <>
            <Header render={render} user={user} setSearchTerm={setSearchTerm} loginUserInfo={loginUserInfo} />
            <Body user={user} />
            <Footer user={user} />
        </>
    );
};

export default UserOpenRecipe;