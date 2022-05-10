// 데이터 컴포넌트 만들기

import { connect } from 'react-redux';
import { setFilter } from '../actions/searchFilterActions';
import Input from '../../04/InputWithStyle';

const mapStateToProps = (state, props) => {
  const value = state.searchFilter[props.name] || ''; //props.name에는 검색 항목 키(name, page,...) 가 전달 searchFilter는 검색 항목 객체 state.searchFilter[props.name]은 해당 검색 항목의 입력값

  return {
    value,
  };
};

const mapDispatchToProps = {
  onChange: setFilter,
};

export default connect(mapStateToProps, mapDispatchToProps)(Input);
