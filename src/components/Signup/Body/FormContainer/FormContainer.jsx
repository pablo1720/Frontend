import Form from './Form/Form';
import LogButton from './LogButton/LogButton';
import SocialSignup from './SocialSignup/SocialSignup';
import style from './FormContainer.module.css';

const FormContainer = ({ setUserInfo, onUserRegister, loginResponse }) => {

    return (
        <section className={`${style.formContainer}`}>
            <Form setUserInfo={setUserInfo} onUserRegister={onUserRegister} loginResponse={loginResponse} />
            <LogButton />
            <SocialSignup />
        </section>
    );
};

export default FormContainer;