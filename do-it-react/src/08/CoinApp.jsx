// CoinApp 컴포넌트 만들기

import React, { PureComponent } from 'react';
import AppLayout from './components/AppLayout';
import CoinOverview from './components/main/CoinOverview';

class CoinApp extends PureComponent {
  render() {
    return (
      <AppLayout>
        <CoinOverview />
      </AppLayout>
    );
  }
}

export default CoinApp;
