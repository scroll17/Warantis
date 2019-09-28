import React  from 'react';
import style from './MainPages.module.sass';

import Header from "../../components/Header/Header";
import AboutProject from "../../components/AboutProject/AboutProject";
import HowWeAreWorking from "../../components/HowWeAreWorking/HowWeAreWorking";
import ProfitCalculator from "../../components/ProfitCalculator/ProfitCalculator";
import SaveFond from "../../components/SaveFond/SaveFond";
import SignUp from "../../components/SignUp/SignUp";
import Footer from "../../components/Footer/Footer";


function MainPages() {
    return (
        <div className={style.main}>
            <Header />
            <AboutProject/>
            <HowWeAreWorking />
            <ProfitCalculator />
            <SaveFond />
            <SignUp />
            <Footer />
        </div>
    );
}

export default MainPages;
