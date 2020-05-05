import React from 'react';
import './styles/BottomButton.scss';
import { Button, makeStyles } from '@material-ui/core';
import { Phone } from '@material-ui/icons';


const useStyles = makeStyles({

    root: {
      // background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      background: 'linear-gradient(74.1deg, #F9A753 8.09%, #FF6573 93.21%)',
      borderRadius: 3,
      border: 0,
      color: 'white',
      height: 48,
      width: '95%',
      padding: '0 30px',
      // marginTop: '5px',
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    },
    label: {
      textTransform: 'capitalize',
    },
  });

function BottomButton (){
      const classes = useStyles();
    return(
        <div className="button-container">
            <Button
            classes={{
                root: classes.root, // class name, e.g. `classes-nesting-root-x`
                label: classes.label, // class name, e.g. `classes-nesting-label-x`
              }}
             startIcon={<Phone />} disableElevation="true" size="large">Contactarme</Button>
        </div>
    );
}

export default BottomButton;