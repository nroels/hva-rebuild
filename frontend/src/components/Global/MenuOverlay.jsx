import React from 'react';
import ProjectMenuItem from './ProjectMenuItem.jsx';

export default function MenuOverlay({ isOpen, projects, contactInfo }) {
    const overlayClasses = `
        fixed inset-0 bg-white z-40 transition-opacity duration-500 ease-in-out p-6 
        ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
        flex flex-col
    `;

    return (
        <div className={overlayClasses}>

            <div className="h-16 w-full"></div>

            <div
                className="flex w-full overflow-hidden"
                style={{ height: 'calc(100vh - 4rem)' }}
            >
                <div className="flex justify-end w-full h-full">
                    <div className="w-full max-w-[400px] h-full overflow-y-auto no-scrollbar">
                        <div className="space-y-8">
                            {projects?.map((project) => (
                                <ProjectMenuItem
                                    key={project.id}
                                    project={project}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            {/* Bottom Left: Contact Info (Positioned Absolutely) */}
            <div className="absolute bottom-6 left-6 text-xs text-black leading-relaxed uppercase">
                <p>{contactInfo?.address}</p>
                <p>{contactInfo?.email}</p>
                <p>{contactInfo?.phone}</p>
            </div>
        </div>
    );
}