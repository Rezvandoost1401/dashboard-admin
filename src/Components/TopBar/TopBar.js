import React from 'react'
import './TopBar.css'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import LanguageIcon from '@mui/icons-material/Language';
import SettingsIcon from '@mui/icons-material/Settings';

export default function TopBar() {
  return (
    <div className='topbar'>
        <div className='topbarWrapper'>
            <div className='topLeft'>
                <span className='logo'>
                Sou Design
                </span>
            </div>
            <div className='topRight'>
                <div className='topbarIconContainer'>
                    <NotificationsNoneIcon />
                    <span className='topIconBadge'>2</span>
                </div>
                <div className='topbarIconContainer'>
                    <LanguageIcon />
                    <span className='topIconBadge'>2</span>
                </div>
                <div className='topbarIconContainer'>
                    <SettingsIcon />
                </div>
                <img src='images/Ava002.png' className='topAvatar'/>
            </div>
        </div>
    </div>
  )
}
