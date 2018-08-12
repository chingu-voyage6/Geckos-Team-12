import React from 'react';

import Main from './Main';
import Sidebar from './Sidebar';
import Navbar from "./Navbar";

const HomePage = () => (
<div>
<Navbar />
<div className="wrapper">
    <div className="sidebar-container">
        <Sidebar />
    </div>
    <div className="main-container">
        <Main />
    </div>
    <div className="sidebar-container">
    </div>
</div>
</div>
);

export default HomePage;