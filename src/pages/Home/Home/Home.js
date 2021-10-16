import React from 'react';
import Banner from '../Banner/Banner';
import Header from '../Header/Header';
import AllFoodItems from '../AllFoodItems/AllFoodItems';


const Home = () => {
    return (
        <div>
            <Header/>
            <Banner/>
            <AllFoodItems/>
        </div>
    );
};

export default Home;