import PropTypes from 'prop-types';
import './card.css';



export const Card = ({ data, children, isLinked = false, fontSize = '1.5rem' }) => {

    return (
        <article className={`card ${isLinked && 'card__active'}`}  >
            <img src={data.img} alt={data.name} className="card__image" />

            <div className='card__info'>
                <header className='card__header'>
                    <h3>{data.name}</h3>
                </header>
                {

                    data.description &&
                    <p style={{ fontSize: fontSize }}>
                        {data.description}
                    </p>

                }
            </div>

            {
                data.technologies &&
                <div className='card__wrapper'>
                    {
                        data.technologies &&
                        data.technologies.map(tec => (
                            <img src={`assets/stack-tech-icon/${tec.name}.svg`}
                                alt={tec.name}
                                className='card__image--tec'
                                key={tec.name}
                            />
                        ))
                    }
                </div>
            }
            {
                children
            }
        </article>
    )
}




Card.propTypes = {
    data: PropTypes.shape({
        name: PropTypes.string.isRequired,
        img: PropTypes.string.isRequired,
        description: PropTypes.string,
        technologies: PropTypes.arrayOf(
            PropTypes.shape({
                name: PropTypes.string.isRequired
            })
        ),
        repository: PropTypes.string
    }).isRequired,
    children: PropTypes.object,
    isLinked: PropTypes.bool,
    fontSize: PropTypes.string
};
