import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import AvatarProvider from './contexts/AvatarContext';
import UserProvider from './contexts/UserContext';

ReactDOM.render(
  <React.StrictMode>
    <AvatarProvider>
      <UserProvider>
        <App />
      </UserProvider>
    </AvatarProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
