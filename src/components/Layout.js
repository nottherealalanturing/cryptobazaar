import React from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import { FcHome } from 'react-icons/fc';
import styles from './styles/Layout.module.css';
import Search from './Search';

const Layout = () => {
  const params = useParams();
  return (
    <div>
      <nav className={styles.navbar}>
        <Link to="/" className="homeNav">
          <FcHome />
        </Link>
        <header className="titleNav">{params.id || 'CryptoBazaar'}</header>
        <Search />
      </nav>

      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
