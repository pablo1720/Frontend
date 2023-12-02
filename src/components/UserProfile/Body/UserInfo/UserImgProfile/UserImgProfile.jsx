import { useState } from 'react';
import style from './UserImgProfile.module.css';

const UserImgProfile = () => {

    const [selectedImage, setSelectedImage] = useState(null);

    return (

        <div className={`${style.container}`}>
            <div className={`${style.imgContainer}`}>
                {selectedImage ? (
                    <img className={`${style.img}`} src={selectedImage} alt='Perfil' />
                ) : (
                    <img className={`${style.img}`} src='src/assets/userDefault.png' alt='Default' />
                )}
            </div>
        </div>
    );
};

export default UserImgProfile;