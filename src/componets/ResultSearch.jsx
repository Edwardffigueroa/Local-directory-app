import React from 'react'
import PropTypes from 'prop-types';
// import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import { Tab, Tabs,Paper } from '@material-ui/core';
import ShopCardResult from './ShopCardResult';
import ProductCardResult from './ProductCardResult';


function ResultsPanel(props) {
  const { children, value, index} = props;

  return (
    // <Typography
    //   component="div"
    //   role="tabpanel"
    //   hidden={value !== index}
    //   id={`simple-tabpanel-${index}`}
    //   aria-labelledby={`simple-tab-${index}`}
    //   {...other}
    // >
    //   {value === index && <Box p={3}>{children}</Box>}

    // </Typography>
    <React.Fragment >
        {value === index && <Box p={3}>{children}</Box>}
    </React.Fragment>
    
  );
}

ResultsPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};


function ResultSearch (){
    
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    return(
      <div className="">
        <Paper square>
        <Tabs
          value={value}
          indicatorColor="primary"
          textColor="primary"
          onChange={handleChange} 
          aria-label="disabled tabs example"
          variant="fullWidth"

        >
          <Tab label="Comercios" />
          <Tab label="Productos" />
        </Tabs>
      </Paper>

      <ResultsPanel value={value} index={0}>
        <ShopCardResult />
        <ShopCardResult />
      </ResultsPanel>
      <ResultsPanel value={value} index={1}>
        <ProductCardResult />
        <ProductCardResult />
        <ProductCardResult />
      </ResultsPanel>
    
      </div>

    );
}

export default ResultSearch;