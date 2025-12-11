import React, { useState, useEffect, useMemo } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import required CSS

export default function HeroLoop({ images }) {
    const [isLoaded, setIsLoaded] = useState(false);

    const shuffledImages = useMemo(() => {
        if (!images) return [];
        return [...images].sort(() => Math.random() - 0.5);
    }, [images]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoaded(true);
        }, 100);
        return () => clearTimeout(timer);
    }, []);

    if (!shuffledImages || shuffledImages.length === 0) return null;

    return (
        <div
            className={`transition-opacity duration-1500 ease-in-out ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        >
            <Carousel
                autoPlay={true}
                interval={7000}
                infiniteLoop={true}
                transitionTime={2000}
                animationHandler="fade"
                swipeable={false}
                showArrows={false}
                showStatus={false}
                showIndicators={false}
                showThumbs={false}
                stopOnHover={false}
            >
                {shuffledImages.map((image) => (
                    <div key={image.id} className="w-full h-screen">
                        <img
                            src={image.url}
                            alt={image.alt || "Hero Image"}
                            className="object-cover w-full h-full"
                            style={{ height: '100vh', objectFit: 'cover' }}
                        />
                    </div>
                ))}
            </Carousel>
        </div>
    );
}