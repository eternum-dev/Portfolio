import { useState } from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import { alterProjects, workProyect } from '../../../../data/projects';
import { Card } from '../../../components/Card';
import './gridProyect.css';

let i = 0;

export const GridProyect = () => {

    const [isVisible, setIsVisible] = useState(false);


    return (
        <>
            <h2>work</h2>
            <section className="proyect__grid">
                {
                    workProyect.arrProjects.map(proyect => (
                        <Card
                            key={i++}
                            data={proyect}
                            isLinked={true} />
                    ))
                }
            </section>

            <h2>Practicas, ejercicios, otros</h2>
            <div className='proyect__option'>
                <button
                    className='proyect__btn'
                    onClick={() => setIsVisible(prev => !prev)}
                >
                    {!isVisible ? 'abrir' : 'cerrar'}
                </button>
                <div className="proyect__grid"
                    style={{ display: !isVisible && 'none' }}
                >
                    {
                        isVisible && (
                            alterProjects.arrProjects.map(proyect => (
                                <Link key={proyect.repository} >
                                    <Card
                                        data={proyect}
                                        isLinked={true} />
                                </Link>

                            ))
                        )
                    }
                </div>
            </div>
        </>

    )
}

GridProyect.propTypes = {
    allProyect: PropTypes.any
};

