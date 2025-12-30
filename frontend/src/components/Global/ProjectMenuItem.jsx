import React from 'react';

export default function ProjectMenuItem({ project }) {
    const { title, slug, location, date, url, order } = project;
    return (
        <a href={`/projects/${slug}`}>
            <div className="pb-8">
                <img src={url} alt={title} />
                <p>{location}</p>
                <h3>{title}</h3>
                <p>{date}</p>
            </div>
        </a>
    );
}