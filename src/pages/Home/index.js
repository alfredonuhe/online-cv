import React from 'react';
import ScrollButton from '../../components/ScrollButton';
import Presentation from '../../components/Presentation';
import SectionSet from '../../components/SectionSet';
import MainNav from '../../components/MainNav';

const Home = (props) => {
    var page = props.config.home;
    return (
        <>
            <Presentation info={page}/>
            <MainNav sections={page.sections}/>
            <SectionSet sections={page.sections}/>
            <ScrollButton />
        </>
    );
};

export default Home;