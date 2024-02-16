import * as React from 'react'
import { styled, Box } from '@mui/material'
import Drawer from '@mui/material/Drawer'
import CssBaseline from '@mui/material/CssBaseline'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import List from '@mui/material/List'
import ListItemText from '@mui/material/ListItemText'
import exit from '../../assets/icon/SignOut.svg'
import { sidebarMenu } from '../../utils/constants'
import { Link } from 'react-router-dom'
import { useCurrentPath } from '../../hook/useCurrentPath'

const drawerWidth = 202

export default function SideBar({ existHandler }) {
    const path = useCurrentPath()
    // const pathName = role === 'USER' ? 'user' : 'admin'
    const pathName = 'admin'

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: `calc(100% - ${drawerWidth}px)`,
                    ml: `${drawerWidth}px`,
                }}
            ></AppBar>
            <Drawer
                sx={{
                    backgroundColor: 'red',
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        boxShadow: ' 0px 4px 5px 0px rgba(136, 118, 197, 0.20)',
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
                            <LogotipeAroma>
                                Aroma<LogotipeCafe>cafe</LogotipeCafe>
                            </LogotipeAroma>
                        </Toolbar>
                        <ListStyled>
                            {sidebarMenu.map((el) => (
                                <ListItemStyled key={el.id} disablePadding to={el.path}>
                                    <ListItemButtonStyle>
                                        <ListItemTextStyle
                                            primary={el.name}
                                            pathname={el.pathname}
                                            active={
                                                path ===
                                                `/${pathName}/${el.path}`
                                                    ? 'true'
                                                    : 'false'
                                            }
                                        />
                                    </ListItemButtonStyle>
                                </ListItemStyled>
                            ))}     
                        </ListStyled>
                    </div>
                    <SignOutDiv onClick={existHandler}>
                        <span>Выход</span>
                        <img src={exit} alt="" />
                    </SignOutDiv>
                </DrawerStyle>
            </Drawer>
        </Box>
    )
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

const ListItemStyled = styled(Link)(({ active }) => ({
    paddingLeft: '10px',
    // borderBottom: active === 'true' ? '2px solid #7f48af' : 'none',
}))
const ListStyled = styled(List)(() => ({
    display:'flex',
    flexDirection:'column'
}))

const ListItemButtonStyle = styled('button')(() => ({
    flexGrow: '0',
    background: 'none',
    backgroundColor: 'white',
    border: 'none',
    padding: '8px 16px',
}))

const ListItemTextStyle = styled(ListItemText)(({ active }) => ({
    borderBottom: '2px solid  #ffffff0',
    fontWeight: 900,
    fontSize: '18px',

    ':hover': {
        transition: '0.1s',
        borderBottom: '2px solid #00315D',
        color: '#00315D',
        cursor: 'pointer',
        fontSize: '18px',
        fontWeight: 900,
        fontFamily: 'Nunito Sans',
        borderBottom: active === 'true' ? '2px solid #00315D' : 'none',
    },
    borderBottom: active === 'true' ? '2px solid #00315D' : 'none',
}))
const DrawerStyle = styled('div')(() => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%',
    paddingBottom: '32px',
    background: 'var(--white, #FEFEFE)',
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
    color: #8876c5;
    font-family: Bai Jamjuree;
    font-size: 27.936px;
    font-style: normal;
    font-weight: 600;
    line-height: 120%;
    letter-spacing: -0.279px;
`