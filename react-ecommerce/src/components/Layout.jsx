import React, { Fragment } from 'react'
import Footer from './Footer';
import Navbar from './Navbar';
import { Box } from '@mui/material';

const Layout = (props) => {
    return (
        <Fragment>
            {/* Navbar */}
            <Navbar />
            <Box sx={{mt:10}}>
                {
                    props.children
                }
            </Box>
            {/* Footer */}
            <Footer />
        </Fragment>
    )
}

export default Layout
