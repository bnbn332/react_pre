// withStyles 하이어오더 컴포넌트
// Theme.js파일을 연동

import ThemedStyleSheet from 'react-with-styles/lib/ThemedStyleSheet';
import aphroditeInterface from 'react-with-styles-interface-aphrodite';
import { css, withStyles, withStylesPropTypes } from 'react-with-styles';
import Theme from './Theme';

ThemedStyleSheet.registerInterface(aphroditeInterface);
ThemedStyleSheet.registerTheme(Theme);

export { css, withStyles, withStylesPropTypes, ThemedStyleSheet };
