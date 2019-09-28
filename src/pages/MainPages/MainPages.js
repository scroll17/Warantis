import React  from 'react';
import style from './MainPages.module.sass';

import Header from "../../components/Header/Header";
import AboutProject from "../../components/AboutProject/AboutProject";
import HowWeAreWorking from "../../components/HowWeAreWorking/HowWeAreWorking";
import ProfitCalculator from "../../components/ProfitCalculator/ProfitCalculator";

function MainPages() {
    return (
        <div className={style.main}>
            <Header />
            <AboutProject/>
            <HowWeAreWorking />
            <ProfitCalculator />
        </div>
    );
}

export default MainPages;
