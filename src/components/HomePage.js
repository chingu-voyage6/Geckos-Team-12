import React from 'react';

import Main from './Main';
import Sidebar from './Sidebar';

const HomePage = () => (
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
);

export default HomePage;