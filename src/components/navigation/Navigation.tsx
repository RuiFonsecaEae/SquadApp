import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.scss';

export const Navigation: React.FC = () => {
    return (
        <div className="nav-container">
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/gallery">Gallery</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};
