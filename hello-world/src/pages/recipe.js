import React from 'react'

const Recipe = () => {
    const data = {
        section: 'Выпечка и десерты',
        title: 'Пирожное миндальное',
        ingredients: [
            {
                name: 'Чернослив без косточек',
                quantity: '100 г'
            },
            {
                name: 'Финики без косточек',
                quantity: '100 г'
            }
        ],
        portions: 12,
        minutes: 20
    }

    return (
        <section className="recipe">
            <img className="recipe__img" src="https://eda.ru/img/eda/c285x285i/s2.eda.ru/StaticContent/Photos/120131082327/120213183156/p_O.jpg" />
            <div className="recipe-description">
                <a className="recipe-section__link" href="#">{data.section}</a>
                <h2>{data.title}</h2>
                <div className="recipe-details__container">
                    <ul>
                        <li className="recipe-details--ingredients">Ингредиентов: {data.ingredients.length}</li>
                        <li className="recipe-details--portions">Порций: {data.portions}</li>
                        <li className="recipe-details--minutes">Минут: {data.minutes}</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Recipe