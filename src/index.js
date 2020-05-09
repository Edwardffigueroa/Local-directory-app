import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import * as serviceWorker from './serviceWorker';
// import ShopOverview from './containers/ShopOverviewContainer';
import ShopContact from './containers/ShopContactContainer';
// import HomeContainer from './containers/HomeContainer';
// import SearchContainer from './containers/SearchContainer';


ReactDOM.render(
  <React.StrictMode>
    {/* <HomeContainer /> */}
    {/* <SearchContainer /> */}
    {/* <ShopOverview /> */}
    <ShopContact />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
