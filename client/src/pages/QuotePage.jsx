import React from 'react';
import QuoteHeader from '../comps/QuoteHeader';
import Calc from '../comps/Calc';
import Footer from '../comps/Footer';

function QuotePage() {
    return (
        <React.StrictMode>
            <QuoteHeader />
            <Calc />
            <Footer />

        </React.StrictMode>
    );
}

export default QuotePage;