import React from 'react';

// This is now a standard React functional component that receives props
export default function SiteHeader({ menuState, onMenuClick }) {

    // 1. Logic moved inside the JS function scope
    const isMenuOpen = menuState === 'open';

    // 2. The critical class logic: applies 'change' when menu is open
    const hamburgerContainerClass = isMenuOpen ?
        'hamburger-icon-container change' :
        'hamburger-icon-container';

    return (
        // Note: 'class' becomes 'className' in React (JSX)
        <header className="fixed top-0 left-0 w-full z-50 p-6 mix-blend-difference text-white">
            <div className="flex justify-between items-center w-full">

                <a
                    href="/"
                    className="font-bold text-lg uppercase tracking-widest"
                >
                    Hans Verstuyft Architecten
                </a>

                <button
                    type="button"
                    // 3. The React handler passes the toggle function up to the parent
                    onClick={onMenuClick}
                    className="p-1 cursor-pointer z-50"
                >
                    {/* CRITICAL: Apply the dynamic class name */}
                    <div className={hamburgerContainerClass}>
                        <div className="bar1"></div>
                        <div className="bar2"></div>
                        <div className="bar3"></div>
                    </div>
                </button>
            </div>
        </header>
    );
}