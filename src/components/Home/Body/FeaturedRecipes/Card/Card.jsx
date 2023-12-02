import { useEffect, useState } from 'react';
import style from './Card.module.css';
import { FaBookmark, FaRegBookmark, FaPlay } from "react-icons/fa";
import { LuChefHat } from "react-icons/lu";
import { NavLink } from 'react-router-dom';

const Card = ({ user, id, name, description, time, idRecipe }) => {

    const [save, setSave] = useState(false);
    const [link, setLink] = useState('/open-recipe');

    const saveRecipe = () => {
        if (save === false) setSave(true);
        else setSave(false);
    };

    useEffect(() => {
        if (user) setLink('/user-open-recipe');
    }, [user]);

    const getIdRecipe = () => {
        idRecipe();
    };

    return (
        <article className={`${style.card}`}>
            <div className={`${style.recipeImg}`}>
                <img className={`${style.img}`} src='src/assets/Comida7.jpeg' />
            </div>
            <section className={`${style.recipeInfo}`}>
                <h3 className={`${style.nameContainer}`}>
                    <NavLink key={id} to={link} className={`${style.recipeName} ${style.link}`} title='Ver receta' onClick={getIdRecipe}>{name}</NavLink>
                </h3>
                <div className={`${style.wrapper}`}>
                    <div className={`${style.recipeDifficullty}`}>Facil</div>
                    <div className={`${style.recipeTime}`}>{time}</div>
                </div>
            </section>
            <section className={`${style.recipeDescription}`}>
                <p className={`${style.text}`}>{description}</p>
            </section>
            <section className={`${style.actionsContainer}`}>
                <div className={`${style.saveStart}`}>
                    {
                        save ?
                            <FaBookmark className={`${style.icon} ${style.save}`} onClick={saveRecipe} title='Eliminar receta de Guardados' />
                            :
                            <FaRegBookmark className={`${style.icon} ${style.save}`} onClick={saveRecipe} title='Guardar receta' />
                    }
                    <NavLink to={link}>
                        <FaPlay className={`${style.icon} ${style.start}`} title='Ver receta' />
                    </NavLink>
                </div>
                <div className={`${style.hats}`}>
                    <p className={`${style.number}`}>5</p>
                    <LuChefHat className={`${style.icon}`} />
                </div>
            </section>
        </article>
    );
};

export default Card;