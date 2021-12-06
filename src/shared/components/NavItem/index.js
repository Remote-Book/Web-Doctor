import React from 'react';

import {NavLink as RouterLink} from 'react-router-dom';
import {Button, ListItem} from '@mui/material';


const NavItem = ({title, link, icon: Icon, className, ...rest}) => () => {

    return (
        <ListItem
            disableGutters
            {...rest}
        >
            <Button

                component={RouterLink}
                to={link}
            >
                {Icon && <Icon size="20"/>}
                <span>{title}</span>
            </Button>
        </ListItem>
    );
};

export default NavItem;