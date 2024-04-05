import React from 'react'
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import { MdOutlineManageAccounts } from "react-icons/md";


export const SidebarData = [
    {
        title: 'Deposit Funds',
        path: '/depositfunds',
        icon: <FaIcons.FaRocket />,
        cName: 'nav-text'

    },
    {
        title: 'Buy Crypto',
        path: '/buycrypto',
        icon: <AiIcons.AiFillShopping />,
        cName: 'nav-text'

    },
    {
        title: 'Dashboard',
        path: '/',
        icon: <AiIcons.AiTwotoneDashboard />,
        cName: 'nav-text'

    },
    {
        title: 'My Assets',
        path: '/myassets',
        icon: <FaIcons.FaFolder/>,
        cName: 'nav-text'

    },
    {
        title: 'Trade',
        path: '/trade',
        icon: <IoIcons.IoIosCash />,
        cName: 'nav-text'

    },
    {
        title: 'Withdraw Funds',
        path: '/withdrawfunds',
        icon: <IoIcons.IoIosDownload />,
        cName: 'nav-text'

    },
    {
        title: 'Referral Link',
        path: '/referrallink',
        icon: <IoIcons.IoIosLink />,
        cName: 'nav-text'

    },
    {
        title: 'View Downliners',
        path: '/viewdownliners',
        icon: <IoIcons.IoIosGitMerge />,
        cName: 'nav-text'

    },
    {
        title: 'Active Trade',
        path: '/activetrade',
        icon: <AiIcons.AiFillFund />,
        cName: 'nav-text'

    },
    {
        title: 'Profile',
        path: '/profile',
        icon: <IoIcons.IoIosPerson />,
        cName: 'nav-text'

    },
    {
        title: 'Settings',
        path: '/settings',
        icon: <IoIcons.IoIosCog />,
        cName: 'nav-text'

    },
    {
        title: 'Account Manager',
        path: '/accountmanager',
        icon: <MdOutlineManageAccounts />,
        cName: 'nav-text'

    },
    {
        title: 'Transactions',
        path: '/transactions',
        icon: <AiIcons.AiOutlineApartment />,
        cName: 'nav-text'

    },
    {
        title: 'Advanced',
        path: '/advanced',
        icon: <IoIcons.IoIosBuild />,
        cName: 'nav-text'

    },
    
]