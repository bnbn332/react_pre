// 데이터 컴포넌트 작성하기

import { connect } from 'react-redux';
import ActionComponent from '../ActionComponent01';

import { setAge } from '../actions/collectionActions'; // SET_AGE 액션 타입을 호출하는 setAge() 함수를 임포트

const mapDispatchToProps = (dispatch) => {
  return {
    setAge: (id, age) => dispatch(setAge(id, age)),
  };
};

export default connect(null, mapDispatchToProps)(ActionComponent); // mapStateToProps 생략

// connect() 함수는 이 mapDispatchToProps()함수가 반환하는 객체를 재활용 컴포넌트 (ActionComponent)의 프로퍼티로 변환하여 전달.
// setAge 키가 곧 dispatch() 함수를 호출하는 것이므로 store.dispatch(setAge(id, age))를 실행하게 된다.
