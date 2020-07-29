import React from 'react';
import { Grid } from '@material-ui/core';
// import { Link } from 'react-router-dom';
// import store from '../../rematch';
import styled from 'styled-components';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const HomeScreenContainer = styled(Grid)`
    min-height: 100vh;
    min-width: 100vw;
    background: white;
`

const index = () => {
    return (
        <Grid container>
            <Navbar />
            <HomeScreenContainer container></HomeScreenContainer>
            <Footer/>
        </Grid>
    )
}

export default index;