// CoinApp 컴포넌트 만들기

import React, { PureComponent } from 'react';
import AppLayout from './components/AppLayout';
import MainPage from '../08/components/main/MainPage';

class CoinApp extends PureComponent {
  render() {
    return (
      <AppLayout>
        <MainPage />
      </AppLayout>
    );
  }
}

export default CoinApp;
