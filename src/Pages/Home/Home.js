import React from 'react';
import Banner from './Banner';
import Products from './Products';
import ReviewSec from './ReviewSec';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <ReviewSec></ReviewSec>
        </div>
    );
};

export default Home;