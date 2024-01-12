import * as React from 'react';
import {styled, Box} from '@mui/material';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import exit from '../../assets/icon/SignOut.svg'




const drawerWidth = 202;

export default function PermanentDrawerLeft() {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >

      </AppBar>
      <Drawer 
        sx={{
            backgroundColor:'red',
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
     <DrawerStyle>
        <div>
            <Toolbar>
                <LogotipeAroma>Aroma<LogotipeCafe>cafe</LogotipeCafe></LogotipeAroma>
                
            </Toolbar>
            <List>
            {['Меню', 'Склад', 'Филиалы', 'Сотрудники'].map((text) => (
                <ListItemStyled key={text} disablePadding>
                <ListItemButtonStyle>
                    <ListItemTextStyle primary={text} />
                </ListItemButtonStyle>
                </ListItemStyled>
            ))}
            </List>
        </div>
        <SignOutDiv>
            <span>Выход</span>
            <img src={exit} alt="" />
        </SignOutDiv>
     </DrawerStyle>
      </Drawer>
    </Box>
  );
}

const SignOutDiv = styled('div')`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 93px;
    height: 28px;
    margin-left: 30px;
    cursor: pointer;
`


const ListItemStyled = styled(ListItem)(() => ({
    paddingLeft:'10px',

}))
const ListItemButtonStyle = styled('button')(() => ({
  flexGrow: '0',
  background:'none',
  backgroundColor:'white',
  border:'none',
  padding:'8px 16px',



}))

const ListItemTextStyle = styled(ListItemText)(() => ({
  borderBottom:'2px solid  #ffffff0',
  
  ':hover':{
    transition: '0.1s',
    borderBottom:'2px solid #00315D',
    color:'#00315D',
    cursor:'pointer',
  }
}))
const DrawerStyle = styled('div')(() => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%',
    paddingBottom: '32px'
}))

const LogotipeAroma = styled('span')`
    color: #000;
    text-align: center;
    font-family: Bai Jamjuree;
    font-size: 27.936px;
    font-style: normal;
    font-weight: 600;
    line-height: 120%; /* 33.523px */
    letter-spacing: -0.279px;
`
const LogotipeCafe = styled('span')`
    color: #8876C5;
    font-family: Bai Jamjuree;
    font-size: 27.936px;
    font-style: normal;
    font-weight: 600;
    line-height: 120%;
    letter-spacing: -0.279px;
`
