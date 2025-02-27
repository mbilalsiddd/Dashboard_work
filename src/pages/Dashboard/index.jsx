import React from 'react';
import Card from '../../components/Card';
import Header from '../../components/Header';
import SideBar from '../../components/SideBar';

const Dashboard = () => {
    return (
        <>
            <Header />
            <div className='main d-flex'>
                <div className='sidebarwrapper'>
                    <SideBar />
                </div>
                <div className='content'>
                    <Card/>
                </div>
            </div>
        </>
    );
}

export default Dashboard;

