import React from 'react';
import BrandingBlock from "./BrandingBlock";
import {Box, Grid} from "@mui/material";
import {info} from "../../info/Info";

export default function Branding({innerRef}) {
    return (
        <Box id={'branding'} ref={innerRef}>
            <Grid container display={'flex'} justifyContent={'center'}>
                {info.branding.map((project, index) => (
                   <Grid item xs={12} md={4} key={index}>
                       <BrandingBlock image={project.image} title={project.title} />
                   </Grid>
                ))}
            </Grid>
        </Box>
    );
};