import * as React from 'react'
import Box from '@mui/material/Box'
import Tab from '@mui/material/Tab'
import { Tabs, styled } from '@mui/material'
import { useLocation } from 'react-router-dom'
import { TabContext, TabList } from '@mui/lab'

export default function BaristaTabs() {
    const [value, setValue] = React.useState(0)
    const handleChange = (event, newValue) => {
        setValue(newValue)
    }
    const tabChangeHandler = (name) => {
        Navigate(`menu/${name}`)
    }
    const takeaway = true
    const params = useLocation()
    console.log(params, 'ck')
    return (
        <Box>
            <TabContext>
                <StyledTabs value={value} onChange={handleChange} centered>
                    <TabsStyled label="Нa вынос" takeaway={takeaway} />
                    <TabsStyledTwo label="В заведении " takeaway={false} />
                </StyledTabs>
            </TabContext>
        </Box>
    )
}
const StyledTabs = styled(Tabs)(() => ({
    // width: '100%',
    '.css-1aquho2-MuiTabs-indicator': {
        backgroundColor: '#DCEDFF',
    },
    '.css-1fs4vvf-MuiButtonBase-root-MuiTab-root.Mui-selected ': {
        color: 'black',
    },
    '.css-14kjmme-MuiButtonBase-root-MuiTab-root.Mui-selected': {
        color: 'black',
    },
    '.css-1fs4vvf-MuiButtonBase-root-MuiTab-root': {
        maxWidth: 'none',
    },
    '.css-14kjmme-MuiButtonBase-root-MuiTab-root': {
        maxWidth: 'none',
    },
}))

const TabsStyled = styled(Tab)(({ takeaway }) => ({
    background: takeaway ? '#FF8B5B' : '#DCEDFF',
    height: '80px',
    color: '#ffff',
    padding: '12px 22.3%',
}))
const TabsStyledTwo = styled(Tab)(({ takeaway }) => ({
    background: takeaway ? '#FF8B5B' : '#DCEDFF',
    height: '80px',
    color: '#ffff',
    padding: '12px 22.3%',
}))
