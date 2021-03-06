//공급자

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import ButtonWithContext from './ButtonWithContext'; //소비자
import Button from '../04/Button';

function RowBComponent() {
  return <Button>버튼</Button>;
}

function RowCComponent() {
  return <ButtonWithContext>버튼</ButtonWithContext>; //소비자 출력
}

function TableComponent() {
  return (
    <table>
      <RowBComponent />
      <RowCComponent />
    </table>
  );
}

class HomePageComponent extends PureComponent {
  constructor(props) {
    super(props);

    this.state = { loading: false };
    this.setLoading = this.setLoading.bind(this); //콜백함수 setLoading()을 소비자에 전달하여 데이터를 변경할 예정이므로 공급자의 this를 바인딩
    //만약 바인딩하지 않으면 콜백 함수가 실행되는 소비자 컴포넌트에서 공급자의 setState()함수에 접근하지 못함 오류 발생
    this.toggleLoading = this.toggleLoading.bind(this);
  }

  getChildContext() {
    //소비자는 getChildContext()함수를 통해 loading와 setLoading() 함수를 전달 받음
    return {
      loading: this.state.loading,
      setLoading: this.setLoading,
    };
  }

  setLoading(loading) {
    this.setState({ loading });
  }

  toggleLoading() {
    this.setState(({ loading }) => ({ loading: !loading }));
  }

  render() {
    return (
      <div>
        <TableComponent />
        <Button onPress={this.toggleLoading}>상태 변경</Button>
      </div>
    );
  }
}

HomePageComponent.childContextTypes = {
  loading: PropTypes.bool,
  setLoading: PropTypes.func,
};

export default HomePageComponent;
