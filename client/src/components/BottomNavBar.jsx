import React from 'react';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';

// To be replaced
import HomeIcon from '@mui/icons-material/Home';
import ExploreIcon from '@mui/icons-material/Explore';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function BottomNavBar() {
    const [value, setValue] = React.useState(0);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
    return (
      <BottomNavigation showlabels value={value} onChange={handleChange} showLabels>
        <BottomNavigationAction label="Create" icon={<HomeIcon />} />
        <BottomNavigationAction label="Search" icon={<ExploreIcon />} />
        <BottomNavigationAction label="Profile" icon={<AccountCircleIcon />} />
      </BottomNavigation>
    );
  }

  export default BottomNavBar;