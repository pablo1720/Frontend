import style from './App.module.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import OpenRecipe from './components/OpenRecipe/OpenRecipe';
import SearchRecipe from './components/SearchRecipe/SearchRecpe';
import UserEditProfile from './components/UserEditProfile/UserEditProfile';
import UserCreateRecipe from './components/UserCreateRecipe/UserCreateRecipe';
import UserEditRecipe from './components/UserEditRecipe/UserEditRecipe';
import UserHome from './components/UserHome/UserHome';
import UserSearchRecipe from './components/UserSearchRecipe/UserSearchRecipe';
import UserOpenRecipe from './components/UserOpenRecipe/UserOpenRecipe';
import UserProfile from './components/UserProfile/UserProfile';
import UserPublishedRecipes from './components/UserPublishedRecipes/UserPublishedRecipes';
import UserSavedRecipes from './components/UserSavedRecipes/UserSavedRecipes';
import NotFoundPage from './components/PageNotFound/PageNotFound';
import { useEffect, useState } from 'react';
import { registerUser, loginUser } from './services/user.services';
import { getOneRecipe } from './services/recipes.services'

function App() {

  const [searchTerm, setSearchTerm] = useState('');
  const [userInfo, setUserInfo] = useState([]);
  const [loginResponse, setLoginResponse] = useState(null);
  const [loginUserInfo, setLoginUserInfo] = useState({});
  const [recipe, setRecipe] = useState(null);
  const [idRecipe, setIdRecipe] = useState('');

  const handleUserLogin = async (credentials) => {
    try {
      const userCredentials = {
        correo_electronico: credentials.email,
        contraseña: credentials.password
      };
      const loggedInUser = await loginUser(userCredentials);

      setLoginResponse(loggedInUser.status);

      setLoginUserInfo(
        {
          id: loggedInUser.data.usuario.id,
          nombre: loggedInUser.data.usuario.nombre,
          imagen: loggedInUser.data.usuario.imagen,
          correo: loggedInUser.data.usuario.correo,
        }
      );

    } catch (error) {
      alert('Error durante el inicio de sesión:', error);
    }
  };

  const handleUserRegister = async (userCredenials) => {
    try {
      const newUserCredentials = {
        nombre: userCredenials.name,
        correo_electronico: userCredenials.email,
        contraseña: userCredenials.password,
      };
      const registerNewUser = await registerUser(newUserCredentials);

      setLoginResponse(registerNewUser.status);

      setLoginUserInfo(
        {
          id: registerNewUser.data.usuario.id,
          nombre: userCredenials.name,
          correo: userCredenials.name
        }
      );

    } catch (error) {
      alert('Error durante el Registro:', error);
    }
  };

  const fetchRecipe = async (recipeId) => {
    try {
      const recipeData = await getOneRecipe(recipeId);
      setRecipe(recipeData);
    } catch (error) {
      console.error('Error al obtener la receta:', error);
    }
  };

  useEffect(() => {

    fetchRecipe(idRecipe);

  }, [idRecipe]);

  return (
    <>
      <Routes>
        <Route path='/' element={<Home setSearchTerm={setSearchTerm} idRecipe={setIdRecipe} />} />
        <Route path='/login' element={<Login onUserLogin={handleUserLogin} loginResponse={loginResponse === null ? '' : loginResponse} />} />
        <Route path='/signup' element={<Signup onUserRegister={handleUserRegister} loginResponse={loginResponse === null ? '' : loginResponse} />} />
        <Route path='/open-recipe' element={<OpenRecipe setSearchTerm={setSearchTerm} recipe={recipe} />} />
        <Route path='/search-recipe' element={<SearchRecipe searchTerm={searchTerm} />} setSearchTerm={setSearchTerm} />
        <Route path='/user-edit-profile' element={<UserEditProfile userInfo={userInfo} loginUserInfo={loginUserInfo} />} />
        <Route path='/user-create-recipe' element={<UserCreateRecipe setSearchTerm={setSearchTerm} loginUserInfo={loginUserInfo} />} />
        <Route path='/user-edit-recipe' element={<UserEditRecipe setSearchTerm={setSearchTerm} loginUserInfo={loginUserInfo} />} />
        <Route path='/user-home' element={<UserHome setSearchTerm={setSearchTerm} loginUserInfo={loginUserInfo} />} />
        <Route path='/user-search-recipe' element={<UserSearchRecipe searchTerm={searchTerm} setSearchTerm={setSearchTerm} loginUserInfo={loginUserInfo} />} />
        <Route path='/user-open-recipe' element={<UserOpenRecipe setSearchTerm={setSearchTerm} loginUserInfo={loginUserInfo} />} />
        <Route path='/user-profile' element={<UserProfile setUserInfo={setUserInfo} setSearchTerm={setSearchTerm} loginUserInfo={loginUserInfo} />} />
        <Route path='/user-published-recipes' element={<UserPublishedRecipes setSearchTerm={setSearchTerm} loginUserInfo={loginUserInfo} />} />
        <Route path='/user-saved-recipes' element={<UserSavedRecipes setSearchTerm={setSearchTerm} loginUserInfo={loginUserInfo} />} />
        <Route path='/*' element={<NotFoundPage setSearchTerm={setSearchTerm} />} />
      </Routes>
    </>
  );
};

export default App;
