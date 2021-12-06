import React from 'react';

import { NavLink as RouterLink, useLocation } from 'react-router-dom';
import clsx from 'clsx';
import { ListItem, Button } from '@mui/material';



const NavItem = ({ title, link, icon: Icon, className, ...rest }) => () => {
    // const { title, link, icon: Icon, className, ...rest  } = props;
    // const classes = useStyles();
    // const { pathname } = useLocation();
    return (
        <ListItem
            // className={clsx(classes.item, className)}
            disableGutters
            {...rest}
        >
            <Button
                // activeClassName={pathname === link ? classes.active : ''}
                // className={classes.button}
                component={RouterLink}
                to={link}
            >
                {Icon && <Icon  size="20" />}
                <span >{title}</span>
            </Button>
        </ListItem>
    );
};

export default NavItem;
