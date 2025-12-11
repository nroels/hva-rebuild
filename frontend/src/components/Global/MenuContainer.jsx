import React, { useState } from 'react';
import SiteHeader from './SiteHeader.jsx';
import MenuOverlay from './MenuOverlay.jsx';

export default function MenuContainer({ projects, contactInfo }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            {console.log("REACT CONTAINER DATA CHECK - Projects received:", projects)}
            <SiteHeader
                menuState={isMenuOpen ? 'open' : 'closed'}
                onMenuClick={toggleMenu}
            />
            {console.log("Menu State:", isMenuOpen ? 'open' : 'closed')}
            <MenuOverlay
                isOpen={isMenuOpen}
                projects={projects}
                contactInfo={contactInfo}
                onClose={toggleMenu}
            />
        </>
    );
}