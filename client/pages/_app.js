import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css';
import '../public/css/styles.css';
import TopNav from '../components/TopNav';

import React from 'react'

const App = ({ Component, pageProps }) => (
    <>
        <TopNav/>
        <Component  {...pageProps}/>
    </>
);

export default App
