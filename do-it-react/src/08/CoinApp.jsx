// CoinApp 컴포넌트 만들기
// 리덕스 스토어 추가( 리덕스 스토어는 앱 전체에서 한개만 사용해야하므로 최상단 컴포넌트에 추가)
// 오류메시지 출력 확인하기

import React, { PureComponent } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import AppLayout from './components/AppLayout';
import MainPage from './components/main/MainPage';
import NotFound from './components/NotFound';
import CoinOverview from './components/main/CoinOverview';
import TransactionListContainer from './containers/main/TransactionListContainer';
import configureStore from './store/configureStore';
import ModalProvider from './ModalProvider';
import NotificationContainer from './containers/NotificationContainer';

class CoinApp extends PureComponent {
  store = configureStore();

  render() {
    return (
      <Provider store={this.store}>
        <Router>
          <ModalProvider>
            <AppLayout>
              <Switch>
                <Route path="/" exact render={() => <MainPage />} />
                <Route path="*" component={NotFound} />
              </Switch>
              <NotificationContainer />
            </AppLayout>
          </ModalProvider>
        </Router>
      </Provider>
    );
  }
}

export default CoinApp;
