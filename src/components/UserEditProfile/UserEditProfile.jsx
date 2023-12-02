import Header from '../Home/Header/Header';
import Body from './Body/Body';
import Footer from '../Home/Footer/Footer';
import { useEffect, useState } from 'react';

const UserEditProfile = ({ userInfo, loginUserInfo }) => {

    const [render, setRender] = useState(false);
    const [user, setUser] = useState(false);

    useEffect(() => {
        setRender(true);
        setUser(true);
    }, []);

    return (
        <>
            <Header render={render} user={user} loginUserInfo={loginUserInfo} />
            <Body userInfo={userInfo} />
            <Footer user={user} />
        </>
    );
};

export default UserEditProfile;