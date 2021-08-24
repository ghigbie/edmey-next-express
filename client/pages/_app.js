import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css';
import '../public/css/styles.css';
import TopNav from '../components/TopNav';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import React from 'react'

const App = ({ Component, pageProps }) => (
    <>
        <ToastContainer position="top-center"/>
        <TopNav/>
        <Component  {...pageProps}/>
    </>
);

export default App
