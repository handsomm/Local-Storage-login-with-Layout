import React from 'react'
import { HomeOutlined, DashboardOutlined, UnorderedListOutlined, ProfileOutlined, PoweroffOutlined } from '@ant-design/icons';
import { Menu } from 'antd';

import { useNavigate } from 'react-router-dom';

const SideMenu = () => {

    const navigate = useNavigate();
    return (
        <Menu
            // style={{height:'100vh'}}
            onClick={({ key }) => {
                if (key === 'signout') {
                    localStorage.removeItem('user_login')
                    navigate('/login')
                } else {
                    navigate(key);
                }
            }}
            defaultSelectedKeys={[window.location.pathname]}
            items={[
                {
                    label: 'Home',
                    key: '/details',
                    icon: <HomeOutlined />
                },
                {
                    label: 'Dashboard',
                    key: '/dashboard',
                    icon: <DashboardOutlined />
                },
                // {
                //     label: 'Users List',
                //     key: '/userlist',
                //     icon: <UnorderedListOutlined />,
                //     children: [
                //         {label:'Active Users', key:'/activeusers'},
                //         {label:'Disabled Users', key:'/disabledusers'}
                //     ]
                // },
                {
                    label: 'Profile',
                    key: '/profile',
                    icon: <ProfileOutlined />
                },
                {
                    label: 'Sign Out',
                    key: 'signout',
                    icon: <PoweroffOutlined />,
                    danger: true
                },
            ]}>
        </Menu>
    )
}

export default SideMenu