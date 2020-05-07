import React from 'react';
import { Fab, makeStyles, Zoom, useTheme } from '@material-ui/core';
import { KeyboardArrowUp } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    
    fab: {
      position: 'fixed',
      bottom: theme.spacing(10),
      right: theme.spacing(2),
    },
    
  }));

function UpFab(){
    const classes = useStyles();
    const theme = useTheme();
    const transitionDuration = {
        enter: theme.transitions.duration.enteringScreen,
        exit: theme.transitions.duration.leavingScreen,
      };
      
    return(
        <Zoom
        
        in={true}
        timeout={transitionDuration}
        style={{
          transitionDelay: `${true ? transitionDuration.exit : 0}ms`,
        }}
        unmountOnExit
      >
        <Fab className={classes.fab} aria-label="up">
            <KeyboardArrowUp />
        </Fab>
        </Zoom>
    );
}

export default UpFab;