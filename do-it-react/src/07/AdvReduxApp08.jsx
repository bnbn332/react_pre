import React, { PureComponent } from 'react';
import { Provider } from 'react-redux';
import configureStore from './configureStore';

import ContainerComponent from './containers/ContainerComponent';
import PresentationComponent from './PresentationComponent';
import DispatchConainer from './containers/DispatchContainer03';

class AdvReduxApp extends PureComponent {
  store = configureStore({ loading: false });

  render() {
    return (
      <Provider store={this.store}>
        화면 컴포넌트: <PresentationComponent userName="화면 컴포넌트" />
        <br />
        데이터 컴포넌트: <ContainerComponent id={2} />
        <br />
        최종 액션 데이터 컴포넌트: <DispatchConainer />
      </Provider>
    );
  }
}

export default AdvReduxApp;
