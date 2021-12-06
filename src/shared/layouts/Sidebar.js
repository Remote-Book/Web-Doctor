import { useEffect } from 'react';
// material
import Drawer from '@mui/material/Drawer';
import { Box } from '@mui/system';
import NavItem from '../components/NavItem';
import { List, ListItem } from '@mui/material';


// ----------------------------------------------------------------------

// const 290 = 280;

// const RootStyle = styled('div')(({ theme }) => ({
//     [theme.breakpoints.up('lg')]: {
//         flexShrink: 0,
//         width: 290
//     }
// }));






export default function DashboardSidebar({ isOpenSidebar, onCloseSidebar }) {



    useEffect(() => {
        if (isOpenSidebar) {
            onCloseSidebar();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const content = (
        <List>
            <ListItem>
                <Box>Logo</Box>
            </ListItem>


            <NavItem />
        </List>
    )



    return (
        <div>

            <Drawer
                open={isOpenSidebar}
                onClose={onCloseSidebar}
                PaperProps={{
                    sx: { width: 290 }
                }}
            >
                {content}
            </Drawer>



            <Drawer
                open
                variant="persistent"
                PaperProps={{
                    sx: { width: 290, bgcolor: 'background.default' }
                }}
            >
                {content}
            </Drawer>

        </div>
    );
}
