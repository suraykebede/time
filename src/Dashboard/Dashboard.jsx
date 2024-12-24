import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  CssBaseline,
  IconButton,
  Avatar,
  Menu,
  MenuItem,
  Divider,
  Tabs,
  Tab,
  useMediaQuery,
} from '@mui/material';
import {
  Home,
  CalendarToday,
  Assignment,
  People,
  BarChart,
  Receipt,
  Menu as MenuIcon,
  Settings,
  Logout,
  Notifications,
} from '@mui/icons-material';
import Projects from '../Projects/Projects';

const Dashboard = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [drawerOpen, setDrawerOpen] = useState(true);
  const [profileMenuAnchor, setProfileMenuAnchor] = useState(null);
  const isMobile = useMediaQuery('(max-width:600px)');

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleProfileMenuOpen = (event) => {
    setProfileMenuAnchor(event.currentTarget);
  };

  const handleProfileMenuClose = () => {
    setProfileMenuAnchor(null);
  };

  const renderContent = () => {
    switch (selectedTab) {
      case 0:
        return <Typography variant="h6">Home Content</Typography>;
      case 1:
        return <Typography variant="h6">Calendar Content</Typography>;
      case 2:
        return (
          <Box sx={{ width: '100%', maxWidth: '800px', margin: 'auto' }}> 
            <Projects /> 
          </Box> 
        );
      case 3:
        return <Typography variant="h6">Clients Content</Typography>;
      case 4:
        return <Typography variant="h6">Reporting Content</Typography>;
      case 5:
        return <Typography variant="h6">Invoices Content</Typography>;
      default:
        return <Typography variant="h6">Welcome to the Dashboard</Typography>;
    }
  };

  const menuItems = [
    { label: 'Dashboard', icon: <Home />, index: 0 },
    { label: 'Calendar', icon: <CalendarToday />, index: 1 },
    { label: 'Projects', icon: <Assignment />, index: 2 },
    { label: 'Clients', icon: <People />, index: 3 },
    { label: 'Reporting', icon: <BarChart />, index: 4 },
    { label: 'Invoices', icon: <Receipt />, index: 5 },
  ];

  const drawerContent = (
    <Box
      sx={{
        backgroundColor: '#F8F8F8',
        padding: '16px',
        borderRadius: '8px',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}> {/* Center Logo */}
        <img src={"https://picsum.photos/100"} alt="Logo" style={{ width: '100px', padding: '10px' }} /> {/* Added Padding */}
      </Box>
      <Typography
        variant="h6"
        sx={{ textAlign: 'center', fontWeight: 'bold', color: '#333' }}
      >
        Time Tracker
      </Typography>
      <List>
        {menuItems.map((item) => (
          <ListItem
            button
            key={item.index}
            selected={selectedTab === item.index}
            onClick={() => setSelectedTab(item.index)}
            sx={{
              color: 'black',
              textTransform: 'none',
              '&.Mui-selected': {
                backgroundColor: '#f0f0f0',
              },
            }}
          >
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.label} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
          backgroundColor: 'white',
          boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.2)',
          color: 'black',
        }}
      >
        <Toolbar>
          <Box sx={{ flexGrow: 1 }} /> {/* Push content to the right */}
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <IconButton color="inherit">
              <Notifications />
            </IconButton>
            <Typography variant="body1" sx={{ fontWeight: 500 }}>
              Mafalda Matias
            </Typography>
            <IconButton onClick={handleProfileMenuOpen}>
              <Avatar alt="User Profile">M</Avatar>
            </IconButton>
            <Menu
              anchorEl={profileMenuAnchor}
              open={Boolean(profileMenuAnchor)}
              onClose={handleProfileMenuClose}
            >
              <MenuItem>
                <Settings fontSize="small" sx={{ mr: 1 }} />
                View Profile
              </MenuItem>
              <MenuItem>
                <Logout fontSize="small" sx={{ mr: 1 }} />
                Logout
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>
      {!isMobile ? (
        <Drawer
          variant="persistent"
          open={drawerOpen}
          sx={{ width: 240, flexShrink: 0 }}
        >
          {drawerContent}
        </Drawer>
      ) : (
        <Drawer
          anchor="left"
          open={drawerOpen}
          onClose={handleDrawerToggle}
          sx={{ '& .MuiDrawer-paper': { width: 240 } }}
        >
          {drawerContent}
        </Drawer>
      )}
      <Box component="main" sx={{ flexGrow: 1, p: 3, mt: 8 }}>
        <Box sx={{ width: '100%', maxWidth: '800px', margin: 'auto' }}>
          <Tabs
            value={selectedTab}
            onChange={handleTabChange}
            variant="scrollable"
            scrollButtons="auto"
            textColor="primary"
            indicatorColor="primary"
            sx={{ justifyContent: 'center' }} // Center Tabs
          >
            {menuItems.map((item) => (
              <Tab
                key={item.index}
                icon={item.icon}
                iconPosition="start"
                label={item.label}
                sx={{
                  textTransform: 'none',
                  fontWeight: selectedTab === item.index ? 'bold' : 'normal',
                }}
              />
            ))}
          </Tabs>
          <Box sx={{ mt: 2 }}>{renderContent()}</Box> 
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;