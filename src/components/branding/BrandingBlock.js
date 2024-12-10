import React from 'react';
import IconLink from "../portfolio/IconLink";
import {Box} from "@mui/material";

function BrandingBlock(props) {
   const {image,  title} = props;
   return (
      <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
         <Box component={'img'} src={image} alt={'mockup'}/>
         <h3 style={{fontSize: '1.2rem'}}>{title}</h3>
         <Box className={'branding'} display={'flex'} flexDirection={'column'} gap={'0.5rem'}
              alignItems={'center'} fontSize={'1.2rem'} py={'2rem'}>
           
         
         </Box>
      </Box>
   );
}

export default BrandingBlock;