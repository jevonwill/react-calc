import React from 'react';
import Banner from '../comps/Banner';
import Calc from '../comps/Calc';
import Footer from '../comps/Footer';
import Nav from '../comps/Nav';

function Home() {
    return (
        <React.StrictMode>
            <Nav />
            <Banner />
            <Calc />
            <Footer />

        </React.StrictMode>
    );
}

export default Home;
