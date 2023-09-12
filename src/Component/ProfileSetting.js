import React from 'react';
import { Box } from '@mui/material';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import {BsGlobe} from 'react-icons/bs';
import {AiOutlineMenu} from 'react-icons/ai';
import {FaRegUserCircle} from 'react-icons/fa';
import { flexCenter } from 'themes/commonStyle';

const ProfileSetting = () => {
  return (
    <Box sx={flexCenter}>
        <Link href="#">Become a Host</Link>
        <Stack>
            <Button> 
                <BsGlobe size = {24}/>
                </Button>
            <Button sx ={{borderRadius: 10,border: '1px solid #ddd'}}>
                <Stack>
                    <AiOutlineMenu size = {24}/>
                    <FaRegUserCircle size = {24}/>
                </Stack>
            
            </Button>
        </Stack>
    </Box>
  )
}

export default ProfileSetting
