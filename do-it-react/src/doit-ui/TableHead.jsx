// TableHead 컴포넌트 만들기
// TableHead 컴포넌트에는 isHead 프로퍼티를 전달. 자식 프로퍼티의 값은 JSX 노드 형태이므로 자바스크립트의 map()이 아닌 리액트에서 제공하는 React.children.map()함수를 사용해야 한다.
// React.Children.map() 함수는 자식 프로퍼티에 포함된 JSX의 컴포넌트 엘리먼트를 배열처럼 취급한다.
// 또한 React.cloneElement() 함수를 사용하여 각각의 자식 컴포넌트(child)에 추가 프로퍼티를 전달한다. React.cloneElement()함수는 JSX노드를 복사한 다음 특정 프로퍼티를 추가한다.

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class TableHead extends PureComponent {
  render() {
    const { children } = this.props;

    return (
      <thead>
        {React.Children.map(children, (child) => React.cloneElement(child, { isHeader: true }))}
      </thead>
    );
  }
}

TableHead.propTypes = {
  children: PropTypes.node,
};

export default TableHead;
