import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <div>
    <h1>Oops! you have navigated to an invalid page link, go back</h1>
    <Link to="/">HOME</Link>
  </div>
);
export default NotFound;
