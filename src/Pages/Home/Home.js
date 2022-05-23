import React from 'react';
import Banner from './Banner';
import BusinessSummery from './BusinessSummery';
import Footer from './Footer';
import NewProductYouWant from './NewProductYouWant';
import Reviews from './Reviews';
import TopSells from './TopSells';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <TopSells></TopSells>
            <BusinessSummery></BusinessSummery>
            <Reviews></Reviews>
            <NewProductYouWant></NewProductYouWant>
            <Footer></Footer>
        </div>
    );
};

export default Home;