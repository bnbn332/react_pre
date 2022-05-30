// 페이지 이동 버튼 컴포넌트 추가하기
// requestTransactionList 액션 함수에 searchParams 프로퍼티를 인자로 전달

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Button from '../../../doit-ui/Button';
import InlineList from '../../../doit-ui/InlineList';

class TransactionPagination extends PureComponent {
  constructor(props) {
    super(props);
    this.handleNextPress = this.handleNextPress.bind(this);
    this.handlePrevPress = this.handlePrevPress.bind(this);
  }
  handleNextPress() {
    const { requestTransactionList, pageNumber, searchParams } = this.props;
    requestTransactionList(searchParams, pageNumber + 1);
  }
  handlePrevPress() {
    const { requestTransactionList, pageNumber, searchParams } = this.props;
    requestTransactionList(searchParams, pageNumber - 1);
  }
  render() {
    const { loading, pageNumber, hasNext } = this.props;
    const prevDisabled = loading || pageNumber <= 1;
    const nextDisabled = loading || !hasNext;
    return (
      <InlineList align="right">
        <Button secondary disable={prevDisabled} onPress={this.handlePrevPress}>
          이전
        </Button>
        <Button secondary disable={nextDisabled} onPress={this.handleNextPress}>
          다음
        </Button>
      </InlineList>
    );
  }
}

TransactionPagination.propTypes = {
  hasNext: PropTypes.bool,
  pageNumber: PropTypes.number,
  loading: PropTypes.bool,
  requestTransactionList: PropTypes.func.isRequired,
};

export default TransactionPagination;
