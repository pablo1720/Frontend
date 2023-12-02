import Form from './Form/Form';
import SignupButton from './SignupButton/SignupButton';
import SocialLogin from './SocialLogin/SocialLogin';
import style from './FormContainer.module.css';

const FormContainer = ({ onUserLogin, loginResponse }) => {

    return (
        <section className={`${style.formContainer}`}>
            <Form onUserLogin={onUserLogin} loginResponse={loginResponse} />
            <SignupButton />
            <SocialLogin />
        </section>
    );
};

export default FormContainer;