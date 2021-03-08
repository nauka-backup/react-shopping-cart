// feature 1
import React from 'react';
import './ProductsList.css';

function ProductsList() {
    return (
        <div className="grid-container">
            <header className="grid-title">
                <h1>browse the products</h1>
            </header>
            <aside className="filter-container">
                <h2>filter things</h2>
                <div>produkt 1</div>
                <div>produkt 2</div>
            </aside>
            <main>produkty</main>
        </div>
    );
}

export default ProductsList;
