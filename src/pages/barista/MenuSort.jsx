import React from 'react'
import { Link } from 'react-router-dom'
import { baristaMenu, baristaCoffee } from '../../utils/constants'
import { styled } from '@mui/material'
import { useCurrentPath } from '../../hook/useCurrentPath'
import { Coffee } from './Coffee'

export const MenuSort = ({ children }) => {
    const path = useCurrentPath()
    console.log(path, 'sjdhjsjk')
    const pathName = 'barista'
    return (
        <div>
            <SideDiv>
                {baristaMenu.map((el) => (
                    <LinkStyled to={el.path} key={el.path}>
                        <ListItemTextStyled
                            primary={el.name}
                            pathname={el.pathname}
                            active={
                                path === `/${pathName}/${el.path}`
                                    ? 'true'
                                    : 'false'
                            }
                        >
                            <div>
                                <ImgStyled src={el.icon} alt="" />
                                <TextStyle>{el.name}</TextStyle>
                            </div>
                        </ListItemTextStyled>
                    </LinkStyled>
                ))}
            </SideDiv>
            {children}
        </div>
    )
}
const Styldiv = styled('div')({
    maxWidth: '350px',
    minWidth: '320px',
    height: '136px',
    width: '320px',
    borderRadius: '15px',
    display: 'flex',
    padding: '16px 20px',
    gap: '16px',
    backgroundColor: 'gray',
    boxSizing: 'border-box',
})

const IconButton = styled('img')({
    backgroundColor: '#FF8B5B',
    borderRadius: '50px',
    width: '50px',
})

const DivStyled = styled('div')({
    display: 'flex',
})

const Img = styled('img')({
    width: '90px',
})

const SideDiv = styled('div')({
    display: 'flex',
    width: '100vw',
    height: '200px',
    justifyContent: 'space-around',
    alignItems: 'center',
})

const LinkStyled = styled(Link)(({ active }) => ({
    marginRight: '80px',
    display: 'flex',
    gap: '20px',
    color: active === 'true' ? '#FF8B5B' : '#fffff',
    textDecoration: 'none',
}))

const ListItemTextStyled = styled('div')(({ active }) => ({
    color: active === 'true' ? '#FF8B5B' : '#fffff',
    borderRadius: '50px',
    padding: '20px',
    backgroundColor: '',
    color: active === 'true' ? '#FF8B5B' : '#FF8B5B',
    div: {
        display: 'flex',
        alignItems: 'center',
    },
}))

const ImgStyled = styled('img')(({ active }) => ({
    width: '30px',
    color: active === 'true' ? '#FF8B5B' : '#fffff',
}))

const TextStyle = styled('span')({
    fontFamily: 'Nunito Sans',
    fontSize: '18px',
    fontWeight: '600',
    lineHeight: '25px',
    letterSpacing: '0em',
    textAlign: 'center',
    listStyle: 'none',
    color: '#000000',
})
