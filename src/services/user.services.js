import axios from "axios";

const urlApi = import.meta.env.VITE_API_URL;

export const registerUser = async (userData) => {
    try {
        const response = await axios.post(`${urlApi}users/register`, userData);

        const statusCode = response.status;

        if (statusCode === 400) {
            throw new Error('Correo Electronico ya registrado!!');
        }

        return response.data;
    } catch (error) {
        throw error.response ? error.response.data : error.message;
    }
};

export const loginUser = async (credentials) => {
    try {

        const response = await axios.post(`${urlApi}users/login`, credentials);

        const statusCode = response.status;

        if (statusCode === 401) {
            throw new Error('Credenciales incorrectas');
        }

        // Enviar una respuesta con código de estado 204 y un mensaje en el cuerpo
res.status(204).send({ message: "Inicio de sesión exitoso" });


        return response;
    } catch (error) {
        throw error.response ? error.response.data : error.message;
    }
};

export const editUserProfile = async (userId, userData) => {
    try {
        const response = await axios.patch(`${urlApi}users/${userId}/edit-profile`, userData);

        const statusCode = response.status;

        if (statusCode === 404) {
            throw new Error('Usuario no encontrado');
        }

        return response.data;
    } catch (error) {
        throw error.response ? error.response.data : error.message;
    }
};

export const getUserRecipes = async (userId) => {
    try {
        const response = await axios.get(`${urlApi}users/${userId}/recipes`);

        const statusCode = response.status;

        if (statusCode === 400) {
            throw new Error('Error de parametros.');
        }

        if (statusCode === 404) {
            throw new Error('El usuario aun no tiene recetas');
        }

        return response.data;
    } catch (error) {
        throw error.response ? error.response.data : error.message;
    }
};

export const getUserSavedRecipes = async (userId) => {
    try {
        const response = await axios.get(`${urlApi}users/${userId}/saved-recipes`);

        const statusCode = response.status;

        if (statusCode === 400) {
            throw new Error('Error de parametros.');
        }

        if (statusCode === 404) {
            throw new Error('El usuario aun no tiene recetas');
        }

        return response.data;
    } catch (error) {
        throw error.response ? error.response.data : error.message;
    }
};

