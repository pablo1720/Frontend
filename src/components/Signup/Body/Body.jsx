import Title from './Title/Title';
import FormContainer from './FormContainer/FormContainer';
import style from './Body.module.css';

const Body = ({ setUserInfo, onUserRegister, loginResponse }) => {

    return (
        <main className={`${style.main}`}>
            <Title />
            <FormContainer setUserInfo={setUserInfo} onUserRegister={onUserRegister} loginResponse={loginResponse} />
        </main>
    );
};

export default Body;