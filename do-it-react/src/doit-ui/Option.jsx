// Option 컴포넌트 만들기
// Option 컴포넌트를 Select 컴포넌트의 자식 컴포넌트로 출력하면 선택 항목을 구현할 수 있다.

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class Option extends PureComponent {
  render() {
    const { value, label, disabled } = this.props;

    return (
      <option value={value} disabled={disabled}>
        {label || value}
      </option>
    );
  }
}

Option.propTypes = {
  disabled: PropTypes.bool,
  value: PropTypes.string.isRequired,
  label: PropTypes.string,
};

export default Option;
