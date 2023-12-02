import Title from './Title/Title';
import FormContainer from './FormContainer/FormContainer';
import style from './Body.module.css';

const Body = ({ onUserLogin, loginResponse }) => {

    return (
        <main className={`${style.main}`}>
            <Title />
            <FormContainer onUserLogin={onUserLogin} loginResponse={loginResponse} />
        </main>
    );
};

export default Body;