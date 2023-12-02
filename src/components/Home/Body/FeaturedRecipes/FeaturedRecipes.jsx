import style from './FeaturedRecipes.module.css';
import Title from './Title/Title';
import Card from './Card/Card';
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";
import { useState } from 'react';

const FeaturedRecipes = ({ user, recipes }) => {

    const [currentIndex, setCurrentIndex] = useState(0);
    const totalCards = 16;
    const cardsPerPage = 4;

    const handlePrevClick = () => {
        setCurrentIndex((prevIndex) => Math.max(prevIndex - cardsPerPage, 0));
    };

    const handleNextClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex + cardsPerPage) % totalCards);
    };

    return (
        <section className={`${style.section}`}>
            <Title />
            <div className={`${style.sliderContanier}`}>
                {/* <MdNavigateBefore className={`${style.icon}`} onClick={handlePrevClick} /> */}
                <div className={`${style.cardsContainer}`} style={{ transform: `translateX(-${currentIndex * (100 / totalCards)}%)` }}>
                    {
                        recipes.map(recipe => (
                            <Card key={recipe._id} user={user} id={recipe._id} name={recipe.nombre} description={recipe.descripcion} time={recipe.tiempo_preparación} />
                        ))
                    }
                </div>
                {/* <MdNavigateNext className={`${style.icon}`} onClick={handleNextClick} /> */}
            </div>
        </section>
    );
};

export default FeaturedRecipes;