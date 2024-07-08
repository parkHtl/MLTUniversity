'use client';
import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Slide from '@mui/material/Slide';
import {NavBarV2} from "@/components/component/nav-bar-v2";
import {useEffect, useState} from "react";
import Header from "@/components/inhouse/header";

function HideOnScroll(props) {
    const { children, window } = props;
    const trigger = useScrollTrigger({
        target: window ? window() : undefined,
    });

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
}

HideOnScroll.propTypes = {
    children: PropTypes.element.isRequired,
    window: PropTypes.func,
};

export default function NavBarV3(props) {
    const {children, other} = props;
    const [scrollPos, setScrollPos] = useState(0);

    const handleScroll = () => {
        setScrollPos(window.scrollY)
    };




    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <React.Fragment >
            <CssBaseline />
            <HideOnScroll {...other}>
                <AppBar className={'transition-all'} sx={{backgroundColor: 'white', color:'black', boxShadow:'rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px'}}>
                    <div className={`${scrollPos !== 0 ? 'hidden' : ''}`}><Header /></div>
                    <NavBarV2/>
                </AppBar>
            </HideOnScroll>
            <Toolbar />
            <Container>
                <Box sx={{ my: 2 }}>
                    {children}
                </Box>
            </Container>
        </React.Fragment>
    );
}
