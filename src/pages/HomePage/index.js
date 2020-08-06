import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import store from '../../rematch';
import styled from 'styled-components';

import NavbarScroll from '../../components/Navbars/NavbarScroll';
import Section1 from './components/Section1';
import SectionX from './components/SectionX';
import Footer from '../../components/Footer';

const HomePageDiv = styled.div`

`

export default function HomePage() {
  const [classNavbar, setClassNavbar] = useState('none');



    useEffect(() => {
        window.onscroll = () => handleScroll()
    })

    const handleScroll = () => { 
        if (document.documentElement.scrollTop > 0) {
          setClassNavbar('navBarBlack')
         } else {
          setClassNavbar('none')      
         }
       }

    return (
        <HomePageDiv>
            <NavbarScroll classNavbar={classNavbar}/>
            <Section1 />
            <SectionX />
            <Footer/>
        </HomePageDiv>
    )
}
