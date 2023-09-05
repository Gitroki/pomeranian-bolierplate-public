import React from 'react';

import './styles/header.css';
import { Logo } from '../Components/Logo/Logo';
import { Link } from 'react-router-dom';
import { SettingIcon } from '../Components/Icons/SettingIcon';
import { HeaderMenu } from '../Components/HeaderMenu/HeaderMenu';

export function AppHeader() {
  return (
    <header>
      <div>
        <Link to="/">
          <Logo />
        </Link>
      </div>
      <div className="headerUserMenu">
        <SettingIcon />
        <HeaderMenu />
      </div>
    </header>
  );
}
