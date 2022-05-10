// 데이터 컴포넌트 만들기

import { connect } from 'react-redux';
import SearchResultTable from '../SearchResultTable';

const mapStateToProps = (state) => {
  const { collection, searchFilter } = state;
  const hasFilter = Object.values(searchFilter).reduce(
    (result, value) => result || Boolean(value),
    false,
  ); // 검색 항목이 있는지 검색
  const { ids, entities } = collection;
  const items = ids
    .map((id) => entities[id]) // 해시맵 형태로 되어 있는 그래프 DB를 객체 배열로 변환
    .filter(
      (entity) =>
        !hasFilter || // 검색단어에 대한 데이터가 없으면 모든 목록을 반환
        Object.entries(searchFilter).reduce(
          // filter() 함수는 참값인 데이터만을 추출. reduce() 함수를 사용하여 데이터 항목 id, name, age의 조건을 모두 만족하는 경우에만 참값을 반환하여 검색 결과에 해다하는 목록을 추출
          (result, [key, value]) => result && (!value || `${entity[key]}` === `${value}`),
          true,
        ),
    );

  return { items };
};

export default connect(mapStateToProps)(SearchResultTable);
