import axios from "axios";

const urlApi = import.meta.env.VITE_API_URL;

export const createRecipe = async (recipeData) => {
    try {
        const response = await axios.post(`${urlApi}recipes`, recipeData);

        const statusCode = response.status;

        if (statusCode === 500) {
            throw new Error('Receta no se ha creado');
        }

        return response;
    } catch (error) {
        throw error.response ? error.response.data : error.message;
    }
};

export const getRecipes = async (page = 1) => { //ready
    try {
        const response = await axios.get(`${urlApi}recipes?page=${page}`);

        const statusCode = response.status;

        if (statusCode === 404) {
            throw new Error('No hay mas recetas');
        }

        return response.data;
    } catch (error) {
        throw error.response ? error.response.data : error.message;
    }
};

export const getOneRecipe = async (recipeId) => {
    try {
        const response = await axios.get(`${urlApi}recipe/${recipeId}`);

        return response.data;
    } catch (error) {
        throw error.response ? error.response.data : error.message;
    }
};

export const updateRecipe = async (recipeId, recipeData) => {
    try {
        const response = await axios.patch(`${urlApi}recipe/${recipeId}`, recipeData);

        const statusCode = response.status;

        if (statusCode === 404) {
            throw new Error('Receta no encontrada');
        }

        return response.data;
    } catch (error) {
        throw error.response ? error.response.data : error.message;
    }
};

export const toggleFavoriteRecipe = async (recipeId, userId) => {
    try {
        const response = await axios.patch(`${urlApi}recipes/${recipeId}/toggle-favorite/${userId}`);

        const statusCode = response.status;

        if (statusCode === 404) {
            throw new Error('Receta no encontrada');
        }

        return response.data;
    } catch (error) {
        throw error.response ? error.response.data : error.message;
    }
};

export const deleteRecipe = async (recipeId) => {
    try {
        const response = await axios.delete(`${urlApi}recipe/${recipeId}`);

        const statusCode = response.status;

        if (statusCode === 500) {
            throw new Error('Receta no se ha eliminada');
        }

        if (statusCode === 404) {
            throw new Error('Receta no encontrada');
        }

        return response.data;
    } catch (error) {
        throw error.response ? error.response.data : error.message;
    }
};

export const searchRecipesByName = async (nombre) => {
    try {
        const response = await axios.get(`${urlApi}recipes/search?nombre=${nombre}`);

        const statusCode = response.status;

        if (statusCode === 400) {
            throw new Error('Falta el nombre');
        }

        if (statusCode === 404) {
            throw new Error('Receta no encontrada');
        }

        return response.data;
    } catch (error) {
        throw error.response ? error.response.data : error.message;
    }
};

export const addCommentAndRating = async (recetaId, comments, ratings) => {
    try {
        const response = await axios.post(`${urlApi}recipes/${recetaId}/comments-ratings`, {
            comments,
            ratings,
        });

        const statusCode = response.status;

        if (statusCode === 500) {
            throw new Error('Error del servidor');
        }

        return response.data;
    } catch (error) {
        throw error.response ? error.response.data : error.message;
    }
};

export const getCommentsAndRatings = async (recetaId) => {
    try {
        const response = await axios.get(`${urlApi}recipes/${recetaId}/comments-ratings`);

        const statusCode = response.status;

        if (statusCode === 400) {
            throw new Error('Falta id');
        }

        if (statusCode === 404) {
            throw new Error('No hay comentarios');
        }

        return response.data;
    } catch (error) {
        throw error.response ? error.response.data : error.message;
    }
};

export const addToAlacena = async (idUsuario, nombreIngrediente, cantidadIngrediente) => {
    try {
        const response = await axios.post(`${urlApi}users/alacena`, {
            id_usuario: idUsuario,
            nombre_ingrediente: nombreIngrediente,
            cantidad_ingrediente: cantidadIngrediente,
        });

        const statusCode = response.status;

        if (statusCode === 500) {
            throw new Error('Error del servidor');
        }

        return response.data;
    } catch (error) {
        throw error.response ? error.response.data : error.message;
    }
};

export const getAlacena = async (userId) => {
    try {
        const response = await axios.get(`${urlApi}users/${userId}/alacena`);

        const statusCode = response.status;

        if (statusCode === 400) {
            throw new Error('Falta id');
        }

        if (statusCode === 404) {
            throw new Error('El usuario no ha creado su alacena aun');
        }

        return response.data;
    } catch (error) {
        throw error.response ? error.response.data : error.message;
    }
};

export const removeFromAlacena = async (idUsuario, nombreIngrediente) => {
    try {
        const response = await axios.delete(`${urlApi}users/alacena`, {
            data: {
                id_usuario: idUsuario,
                nombre_ingrediente: nombreIngrediente,
            },
        });

        const statusCode = response.status;

        if (statusCode === 404) {
            throw new Error('No hay alacena aunyarn dev');
        }

        return response.data;
    } catch (error) {
        throw error.response ? error.response.data : error.message;
    }
};
