// TableBody 컴포넌트 만들기
// TableBody 컴포넌트도 TableHead 컴포넌트와 유사한 방법으로 자식 프로퍼티를 사용. baseline 프로퍼티를 이용하여 자식 배열 중 마지막을 제외한 행은 밑줄(true)을 표시하도록 만듬

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class TableBody extends PureComponent {
  render() {
    const { children } = this.props;
    const { length } = React.Children.toArray(children);

    return (
      <tbody>
        {React.Children.map(children, (child, index) => {
          const baseline = index < length - 1 ? true : false;
          return React.cloneElement(child, { baseline });
        })}
      </tbody>
    );
  }
}

TableBody.propTypes = {
  children: PropTypes.node,
};

export default TableBody;
