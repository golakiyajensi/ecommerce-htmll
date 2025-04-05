import React from 'react';
import './style.css';

const Home = () => {
    return (
        <div>
            {/* Content from index1.html goes here */}
            <header>
                <h1>Welcome to Our Store</h1>
            </header>
            <main>
                <section className="featured-products">
                    <h2>Featured Products</h2>
                    {/* Add product items here */}
                </section>
                <section className="about-us">
                    <h2>About Us</h2>
                    <p>We are dedicated to providing the best products.</p>
                </section>
            </main>
            <footer>
                <p>&copy; 2023 Our Store. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Home;
