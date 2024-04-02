import { Link, NavLink } from 'react-router-dom';
import { footer, header } from '../../../data/layout';
import './footer.css';
import { Networks } from '../../components/Networks';
import Linkedin from '../../../assets/icons/Linkedin';
import Github from '../../../assets/icons/Github';





export const Footer = () => {
    return (
        <footer className='footer'>
            <Link
                className='footer__link'
                to={`#${footer.link}`}
            >
                <img src="src\assets\logo.png" alt="logo" />
            </Link>
            <nav className='footer__nav'>
                {
                    header.navLink.map((navlink) => (
                        <NavLink
                            key={navlink.name}
                            to={`/${navlink.to}`}
                            className={() => `navlink`}
                        >
                            {navlink.name}
                        </NavLink>
                    ))
                }
            </nav>
            <div className='footer__social'>
                <ul className='footer__ul'>
                    <Networks alt='linkedin' path='https://www.linkedin.com/in/alejandrothon/' >
                        <Linkedin />
                    </Networks>
                    <Networks alt='github' path='https://github.com/eternum-dev'>
                        <Github className='link-hover' />
                    </Networks>
                </ul>
            </div>
        </footer>
    )
}