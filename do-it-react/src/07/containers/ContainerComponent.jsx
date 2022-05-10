// connect()함수로 데이터 컴포넌트 생성하기

import { connect } from 'react-redux';
import PresentationComponent from '../PresentationComponent';

const mapStateToProps = (state, props) => {
  return {
    userName: state.user.name, // 스토어 user 객체의 name항목에 접근하여 userName 프로퍼티값으로 변환
    entity: state.collection.entities[props.id], // 데이터 컴포넌트에 프로퍼티로 전달된 id값을 참조하여 그래프 DB의 자료를 추출
  };
};

export default connect(mapStateToProps)(PresentationComponent);

// mapStateToProps()함수는 데이터 컴포넌트에서 필요한 데이터를 스토어에서 추출하여 객체를 반환하는 역할
