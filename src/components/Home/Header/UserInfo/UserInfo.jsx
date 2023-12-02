import { NavLink } from 'react-router-dom';
import style from './UserInfo.module.css';
import { useState } from 'react';

const UserInfo = ({ loginUserInfo }) => {

    const [selectedImage, setSelectedImage] = useState(null);

    return (
        <NavLink to='/user-profile' className={`${style.infoContainer}`}>
            <div className={`${style.userImg}`}>
                {selectedImage ? (
                    <img className={`${style.img}`} src={`${loginUserInfo.imagen}`} alt='Perfil' />
                ) : (
                    <img className={`${style.img}`} src='src/assets/userDefault.png' alt='Default' />
                )}
            </div>
            <p className={`${style.userName}`}>{loginUserInfo.nombre}</p>
        </NavLink>
    );
};

export default UserInfo;