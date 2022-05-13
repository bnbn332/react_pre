// 본문화면
// CoinOverview 컴포넌트와 TransactionList 컴포넌트를 React.Fragment 컴포넌트로 묶어서 출력

import React, { PureComponent } from 'react';
import CoinOverView from './CoinOverview';
//import TransactionList from './TransactionList';
import TransactionListContainer from '../../containers/main/TransactionListContainer';

class MainPage extends PureComponent {
  render() {
    return (
      <React.Fragment>
        <CoinOverView />
        <TransactionListContainer />
      </React.Fragment>
    );
  }
}

export default MainPage;
