// CoinApp 컴포넌트 만들기
// 리덕스 스토어 추가( 리덕스 스토어는 앱 전체에서 한개만 사용해야하므로 최상단 컴포넌트에 추가)
// 오류메시지 출력 확인하기

import React, { PureComponent } from 'react';
import { Provider } from 'react-redux';
import AppLayout from './components/AppLayout';
import MainPage from '../08/components/main/MainPage';
import configureStore from './store/configureStore';
import ModalProvider from './ModalProvider';
import CoinOverview from './components/main/CoinOverview';
import TransactionListContainer from './containers/main/TransactionListContainer';
//import NotificationContainer from './containers/main/NotificationContainer';
import NotificationContainer from './containers/NotificationContainer';

class CoinApp extends PureComponent {
  store = configureStore();

  render() {
    return (
      <Provider store={this.store}>
        <ModalProvider>
          <AppLayout>
            <CoinOverview />
            <TransactionListContainer />
            <NotificationContainer />
          </AppLayout>
        </ModalProvider>
      </Provider>
    );
  }
}

export default CoinApp;
