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
    const [screenWidth, setScreenWidth] = useState(768)

    const handleScroll = () => {
        setScrollPos(window.scrollY)
    };

    const handleResize = () => {
        setScreenWidth(document.documentElement.clientWidth);
    };

    const getHeight = () => {
        if (screenWidth>537) return '50px';
        else if (screenWidth>387) return '80px';
        else return '95px';
    }


    useEffect(() => {
        setScreenWidth(document.documentElement.clientWidth);
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    return (
        <React.Fragment >
            <CssBaseline />
            <HideOnScroll {...other}>
                <AppBar sx={{backgroundColor: 'white', color:'black', boxShadow:'rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px', top:`${scrollPos===0? getHeight(): '0px'}`}}>
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
