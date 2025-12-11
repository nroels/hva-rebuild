import React from 'react';

export default function MenuOverlay({ isOpen, projects, contactInfo, onClose }) {
    const overlayClasses = `
    fixed inset-0 bg-white z-40 transition-opacity duration-500 ease-in-out p-6 
    ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
  `;

    return (
        <div className={overlayClasses}>

            {/* --- MENU CONTENT GRID START --- */}
            <div className="flex flex-grow w-full h-full pt-10">

                {/* 2. MENU CONTENT GRID */}
                <div className="flex w-full h-full pt-10">

                    {/* Left Spacer (Optional for wide screens) */}
                    <div className="hidden md:block w-1/2"></div>

                    {/* Right Side: Project List - CRITICAL AREA */}
                    <div className="w-full md:w-1/2 flex flex-col justify-center items-start overflow-y-auto">
                        <h2 className="text-xl mb-6 font-bold uppercase">Projects</h2>
                        <ul className="space-y-4">
                            {/* CRITICAL: Safely map over the projects array */}
                            {projects?.map((project) => (
                                <li key={project.id}>
                                    <a
                                        // Construct the dynamic link using the project slug
                                        href={`/projects/${project.slug}`}
                                        className="text-2xl hover:text-gray-500 transition-colors uppercase font-light"
                                        onClick={onClose}
                                    >
                                        {project.title}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom Left: Contact Info (Positioned Absolutely) */}
                <div className="absolute bottom-6 left-6 text-xs text-black leading-relaxed uppercase">
                    <p>{contactInfo?.address}</p>
                    <p>{contactInfo?.email}</p>
                    <p>{contactInfo?.phone}</p>
                </div>
            </div>


        </div>
    );
}