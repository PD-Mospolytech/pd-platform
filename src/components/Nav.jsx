import React, { useState } from 'react';
import { AppBar, Box, Toolbar, IconButton, Typography, Button, Container, MenuItem, Drawer, Divider  } from '@mui/material'
import { NavLink } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu';

export default function Nav () {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const scrollToSection = (sectionId) => {
    const sectionElement = document.getElementById(sectionId);
    const offset = 128;
    if (sectionElement) {
      const targetScroll = sectionElement.offsetTop - offset;
      sectionElement.scrollIntoView({ behavior: 'smooth' });
      window.scrollTo({
        top: targetScroll,
        behavior: 'smooth',
      });
      setOpen(false);
    }
  };

    return (
      <div>
      	<Box sx={{ flexGrow: 1 }}>
      		<AppBar
						position="fixed"
						sx={{
							boxShadow: 0,
							bgcolor: 'transparent',
							backgroundImage: 'none',
							width: '100vw'
					}}>
						<Toolbar
							variant="regular"
							sx={(theme) => ({
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'space-between',
								flexShrink: 0,
								bgcolor: 'rgb(30, 30, 30)',
								maxHeight: 64,
							})}
						>
							<Box
								sx={{
									flexGrow: 1,
									display: 'flex',
									alignItems: 'center',
									px: 0,
								}}
							>
								<NavLink to='/'>
									<Typography variant='h5' sx={{color: 'white', textDecoration: 'none'}}>
										Проетная деятельность
									</Typography>
								</NavLink>
								</Box>
								<Box sx={{ display: { xs: 'none', md: 'flex' } }}>
									<MenuItem
										onClick={() => scrollToSection('main')}
										sx={{ py: '6px', px: '12px' }}
									>
										<NavLink to='/'>
											<Typography variant="body2" color="#fff">
												Главная
											</Typography>
										</NavLink>
									</MenuItem>
									<MenuItem
										onClick={() => scrollToSection('projects')}
										sx={{ py: '6px', px: '12px' }}
									>
										<NavLink to='/projects'>
											<Typography variant="body2" color="#fff">
												Витрина проектов
											</Typography>
										</NavLink>
									</MenuItem>
									<MenuItem
										onClick={() => scrollToSection('durties')}
										sx={{ py: '6px', px: '12px' }}
									>
										<NavLink to='/duties'>
											<Typography variant="body2"  color="#fff">
												Чем предстоит заниматься?
											</Typography>
										</NavLink>
									</MenuItem>
								</Box>
							<Box sx={{ display: { sm: '', md: 'none' } }}>
								<Button
									variant="text"
									color="primary"
									aria-label="menu"
									onClick={toggleDrawer(true)}
									sx={{ minWidth: '30px', p: '4px' }}
								>
									<MenuIcon />
								</Button>
								<Drawer anchor="left" open={open} 
								onClose={toggleDrawer(false)}
								>
									<Box
										sx={{
											minWidth: '60dvw',
											p: 2,
											backgroundColor: 'rgb(30, 30, 30)',
											flexGrow: 1,
										}}
									>
										<Box
											sx={{
												display: 'flex',
												flexDirection: 'column',
												alignItems: 'end',
												flexGrow: 1,
											}}
										>
										</Box>
										<MenuItem onClick={() => scrollToSection('main')}>
											<NavLink to='/'>
												<Typography variant="body2" color="#fff">
													Главная
												</Typography>
											</NavLink>
										</MenuItem>
										<MenuItem onClick={() => scrollToSection('projects')}>
										<NavLink to='/projects'>
											<Typography variant="body2" color="#fff">
												Витрина проектво
											</Typography>
										</NavLink>
										</MenuItem>
										<MenuItem onClick={() => scrollToSection('durties')}>
										<NavLink to='/duties'>
											<Typography variant="body2"  color="#fff">
												Чем предстоит заниматься?
											</Typography>
										</NavLink>
										</MenuItem>
									</Box>
								</Drawer>
							</Box>
						</Toolbar>
         </AppBar>
        </Box>
      </div>
    )
}
