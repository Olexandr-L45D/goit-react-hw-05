// Navigation
import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import css from './Navigation.module.css';

const newLinkClass = ({ isActive }) => {
    return clsx(css.link, isActive && css.active);
};

export default function Navigation() {
    return (
        <header className={css.header}>
            <p className={css.logo}>
                <span role="img" aria-label="computer icon">
                    💻
                </span>{' '}
                GoMerch Store
            </p>

            <nav className={css.nav}>
                <NavLink to="/" className={newLinkClass}>
                    Home
                </NavLink>
                <NavLink to="/about" className={newLinkClass}>
                    About
                </NavLink>
                <NavLink to="/products" className={newLinkClass}>
                    Products
                </NavLink>
            </nav>
        </header>
    );
};