// AppLayout 컴포넌트 만들기
// 본문에는 자식 프로퍼티 출력 예정, 자식 프로퍼티에는 이후 만들게 될 상단 정보 화면과 하단 정보 화면이 출력될 예정

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withStyles, css, withStylesPropTypes } from '../../doit-ui/withStyles';
import AppNav, { HEIGHT } from './AppNav';

class AppLayout extends PureComponent {
  render() {
    const { children, styles } = this.props;
    return (
      <div {...css(styles.wrapper)}>
        <AppNav />
        <div {...css(styles.body)}>{children}</div>
      </div>
    );
  }
}

AppLayout.propTypes = {
  ...withStylesPropTypes,
  children: PropTypes.node,
};

export default withStyles(({ unit }) => ({
  wrapper: {
    marginTop: HEIGHT,
  },
  body: {
    padding: unit * 4,
  },
}))(AppLayout);
