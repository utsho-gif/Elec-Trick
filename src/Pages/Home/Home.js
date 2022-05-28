import React from 'react';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import Products from './Products';
import ReviewSec from './ReviewSec';
import Special from './Special';

const Home = () => {
    return (
        <div className='overflow-hidden'>
            <Banner></Banner>
            <Special></Special>
            <Products></Products>
            <ReviewSec></ReviewSec>
            <BusinessSummary></BusinessSummary>
        </div>
    );
};

export default Home;