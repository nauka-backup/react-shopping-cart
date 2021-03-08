import React from 'react';
import HeroSection from '../../HeroContainer/HeroContainer';
import { homeObject2 } from './Data';

function Services() {
    return (
        <>
            <HeroSection {...homeObject2} />
        </>
    );
}

export default Services;
