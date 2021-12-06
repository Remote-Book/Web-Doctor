import { useEffect } from 'react';
import Drawer from '@mui/material/Drawer';
import { Box } from '@mui/system';
import NavItem from '../components/NavItem';
import { List, ListItem } from '@mui/material';

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
