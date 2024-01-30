import * as React from 'react'
import { Box, styled } from '@mui/material'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import { skladTabsTitle } from '../../utils/constants'
import { TabContext, TabPanel } from '@mui/lab'

export default function CenteredTabs() {
    const [value, setValue] = React.useState(1)

    const handleChange = (event, newValue) => {
        setValue(newValue)
    }

    return (
        <Box>
            <TabContext value={`${value}`}>
                <Box
                    sx={{
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'center',
                        width: '1238px',
                        height: '70px',
                        flexShrink: '0',
                    }}
                    value={value}
                    onChange={handleChange}
                >
                    <TabsStyled onChange={handleChange} value={value}>
                        {skladTabsTitle.map((el) => (
                            <Tab
                                key={el.id}
                                label={el.name}
                                value={el.id}
                                sx={{
                                    fontFamily: 'Nunito Sans',
                                    fontSize: '18px',
                                    fontStyle: 'normal',
                                    fontWeight: '700',
                                    lineHeight: '120%',
                                    display: 'flex',
                                    paddingTop: '24px',

                                    // fontFamily: el.id == 2 && 'Nunito Sans',
                                    // fontSize: el.id == 2 && '18px',
                                    // fontStyle: el.id ==2 && 'normal',
                                    // fontWeight: el.id == 2 && '700',
                                    // lineHeight: el.id == 2 && '120%',
                                    // display: el.id == 2 && 'flex',
                                    // paddingTop: el.id == 2 && '24px',
                                }}
                            />
                        ))}
                    </TabsStyled>
                </Box>
                {skladTabsTitle.map((el) => (
                    <TabPanel key={el.id} value={`${el.id}`} label={el.name}>
                        hrgfuer
                    </TabPanel>
                ))}
            </TabContext>
        </Box>
    )
}



const TabsStyled = styled(Tabs)({
    '.css-ot6t74-MuiButtonBase-root-MuiTab-root.Mui-selected': {
        color: '#00315D',
    },
    '.css-1aquho2-MuiTabs-indicator': {
        backgroundColor: '#00315D',
    },
})
