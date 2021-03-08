import React from 'react';
import HeroSection from '../../HeroContainer/HeroContainer';
import { homeObject3 } from './Data';

function Products() {
    return (
        <>
            <HeroSection {...homeObject3} />
        </>
    );
}

export default Products;
