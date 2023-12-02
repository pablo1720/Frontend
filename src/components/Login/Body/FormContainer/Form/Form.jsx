import { Formik, Form as FormikForm, Field, ErrorMessage } from 'formik';
import style from './Form.module.css';
import { useNavigate } from 'react-router-dom';

const Form = ({ onUserLogin, loginResponse }) => {

    const navigate = useNavigate();


    const initialValues = {
        email: '',
        password: '',
    };

    const onSubmit = async (values, { resetForm }) => {

        try {
            await onUserLogin(values);

            if (loginResponse !== null && loginResponse !== undefined) {
                if (loginResponse !== 200) {
                    if (loginResponse === 204) {
                        alert('Inicio de sesion extitoso.');
                        navigate('/user-home');
                    }
                    alert('Credenciales incorrectas.');
                } else {
                    navigate('/user-home');
                }
            }
        } catch (error) {
            console.error('Error durante el inicio de sesión:', error);
        } finally {
            resetForm();
        }
    };

    const validate = (values) => {
        const errors = {};

        if (!values.email) {
            errors.email = 'Campo obligatorio';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = 'Formato de correo electrónico inválido';
        }

        if (!values.password) {
            errors.password = 'Campo obligatorio';
        } else if (values.password.length < 8) {
            errors.password = 'La contraseña debe tener al menos 8 caracteres';
        }

        return errors;
    };

    return (
        <>
            <Formik
                initialValues={{
                    email: initialValues.email,
                    password: initialValues.password,
                }}

                onSubmit={onSubmit}

                validate={validate}

            >

                <FormikForm className={`${style.form}`}>
                    <div className={`${style.wrapper}`}>
                        <label htmlFor='emailLogin' className={`${style.label}`}>Correo:</label>
                        <Field type='email' name='email' id='emailLogin' placeholder='name@example.com' className={`${style.input}`} />
                        <ErrorMessage name='email' component='div' className={`${style.error}`} />
                    </div>

                    <div className={`${style.wrapper}`}>
                        <label htmlFor='passLogin' className={`${style.label}`}>Contraseña:</label>
                        <Field type='password' name='password' id='passLogin' placeholder='*********' className={`${style.input}`} />
                        <ErrorMessage name='password' component='div' className={`${style.error}`} />
                    </div>
                    <div className={`${style.wrapper}`}>
                        <button type='submit' className={`${style.btnSubmit}`}>Ingresar</button>
                    </div>
                </FormikForm>

            </Formik>
        </>
    );
};

export default Form;