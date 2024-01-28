import React from 'react';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';

// To be replaced
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import CreateIcon from "@mui/icons-material/AddLocationAlt";
import ExploreIcon from '@mui/icons-material/Explore';
import ProfileIcon from '@mui/icons-material/AccountCircle';

function BottomNavBar() {
    const [value, setValue] = React.useState(0);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
    return (
      <BottomNavigation showlabels value={value} onChange={handleChange} showLabels className='w-full flex items-center py-5 fixed bottom-0 z-20 bg-opacity-50'>
        <BottomNavigationAction label="Create" icon={<CreateIcon />} />
        <BottomNavigationAction label="Search" icon={<ExploreIcon />} />
        <BottomNavigationAction label="Profile" icon={<ProfileIcon />} />
      </BottomNavigation>
    );
  }

  export default BottomNavBar;