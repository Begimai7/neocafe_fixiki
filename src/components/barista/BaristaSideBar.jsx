import React from 'react'
import BaristaBellSimple from '../../assets/icon/barista/BaristaBellSimple.svg'
import { Box, IconButton, ListItemText, colors, styled } from '@mui/material'
import { baristaSideBar } from '../../utils/constants.js'
import { Link } from 'react-router-dom'
import { useCurrentPath } from '../../hook/useCurrentPath.jsx'

const BaristaSideBar = ({ openNotificationHandler }) => {
    const path = useCurrentPath()
    console.log(path, '')
    const pathName = 'barista'
    return (
        <SideDiv>
            <Box marginTop="-110px" marginLeft="10px">
                <IconButton marginLaft="px">
                    <ImgBaristaBellSimple
                        onClick={openNotificationHandler}
                        src={BaristaBellSimple}
                        alt=""
                        width="40px"
                    />
                </IconButton>
            </Box>
            <BodyDiv>
                {baristaSideBar.map((el) => (
                    <LinkStyled to={el.path}>
                        <ListItemTextStyled
                            primary={el.name}
                            pathname={el.pathname}
                            active={
                                path === `/${pathName}/${el.path}`
                                    ? 'true'
                                    : 'false'
                            }
                        >
                            <ImgStyled src={el.icon} alt="" />
                            <TextStyle>{el.name}</TextStyle>
                        </ListItemTextStyled>
                    </LinkStyled>
                ))}
            </BodyDiv>
        </SideDiv>
    )
}

export default BaristaSideBar

const SideDiv = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    backgroundColor: '#023462',
    // marginTop: '-20px',
    width: '125px',
    height: '100vh',
})

const TextStyle = styled('p')({
    fontFamily: 'Nunito Sans',
    fontSize: '18px',
    fontWeight: '600',
    lineHeight: '25px',
    letterSpacing: '0em',
    textAlign: 'center',
    listStyle: 'none',
})

const BodyDiv = styled('div')(({ active }) => ({
    marginTop: '90px',
    width: '117px',
    top: '215px',
}))

const ImgStyled = styled('img')(({ active }) => ({
    width: '50px',
    color: active === 'true' ? ' red' : '#fff',
}))

const ImgBaristaBellSimple = styled('img')({
    backgroundColor: '',
    padding: '20px',
    marginBottom: '80px',
    background: '#fff',
    borderRadius: '50%',
})
const ListItemTextStyled = styled('div')(({ active }) => ({
    color: active === 'true' ? ' red' : '#fff',
}))

const LinkStyled = styled(Link)(({ active }) => ({
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '-30px',
    gap: '-20px',
    color: active === 'true' ? ' red' : '#fff',
    padding: '35px',
    textDecoration: 'none',
}))
