// TransactionSearchFilter 컴포넌트 만들기
// Input컴포넌트를 사용하여 만듬 FormProvider 컴포넌트로 사용자의 입력을 받음.
// 입력된 값은 onSubmit 콜백 함수의 인자로 전달
// 검색 필터
// onSubmit 프로퍼티로 전달 받은 콜백 함수는 Form 컴포넌트에서 전달받은 handleSubmit 콜백함수이다. handleSubmit 콜백 함수의 인자로 전달한 values의 구조는 params에 넘겨줄 값의 구조와 같으므로 바로 대입가능
// 객체 빈 값을 제외하는 방법 적용
// setFilter 액션 함수가 동작할 수 있게 수정

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import InlineList from '../../../doit-ui/InlineList';
import Button from '../../../doit-ui/Button';
import Text from '../../../doit-ui/Text';
import Input from '../../../doit-ui/Input';
import Form from '../../../doit-ui/Form';
import Select, { Option } from '../../../doit-ui/Select';

import Api from '../../Api';

class TransactionSearchFilter extends PureComponent {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(params) {
    //const { setTransactionList } = this.props;
    //Api.get('/transactions', { params }).then(({ data }) => setTransactionList(data));
    const { requestTransactionList, setFilter } = this.props;
    const cleanedParams = Object.entries(params)
      .filter(([key, value]) => value != '')
      .reduce((obj, [key, value]) => ({ ...obj, [key]: value }), {});
    requestTransactionList(cleanedParams);
    setFilter(cleanedParams);
  }
  render() {
    return (
      <Form onSubmit={(values) => Api.get('/transactions', { params: values })}>
        <Form.Consumer>
          {({ onChange, values }) => (
            <InlineList spacingBetween={2} verticalAlign="bottom">
              <Text xlarge bold>
                검색
              </Text>
              <Select name="code" label="코인 코드" onChange={onChange} value={values['code']}>
                <Option label="선택해주세요" />
                <Option label="비트코인(BTX)" value="BTX" />
                <Option label="이더리움(ETH)" value="ETH" />
                <Option label="도지코인(DOG)" value="DOG" />
              </Select>
              <Input
                name="currentPrice_gte"
                label="최소거래가"
                onChange={onChange}
                value={values['currentPrice_gte']}
              />
              <Input
                name="currentPrice_lte"
                label="최대거래가"
                onChange={onChange}
                value={values['currentPrice_lte']}
              />
              <Button type="submit" primary>
                검색
              </Button>
            </InlineList>
          )}
        </Form.Consumer>
      </Form>
    );
  }
}

//TransactionSearchFilter.propTypes = { setTransactionList: PropTypes.func };
TransactionSearchFilter.propTypes = { setFilter: PropTypes.func };
TransactionSearchFilter.propTypes = { requestTransactionList: PropTypes.func };

export default TransactionSearchFilter;
