// 본문화면
// CoinOverview 컴포넌트와 TransactionList 컴포넌트를 React.Fragment 컴포넌트로 묶어서 출력

import React, { PureComponent } from 'react';
import CoinOverview from './CoinOverview';
// import TransactionList from './TransactionList';
import TransactionList from '../../containers/main/TransactionListContainer';

class MainPage extends PureComponent {
  render() {
    return (
      <React.Fragment>
        <CoinOverview />
        <TransactionList />
      </React.Fragment>
    );
  }
}

export default MainPage;
