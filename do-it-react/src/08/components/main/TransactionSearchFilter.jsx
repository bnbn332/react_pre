// TransactionSearchFilter 컴포넌트 만들기
// Input컴포넌트를 사용하여 만듬 FormProvider 컴포넌트로 사용자의 입력을 받음.
// 입력된 값은 onSubmit 콜백 함수의 인자로 전달
// 검색 필터

import React, { PureComponent } from 'react';
import InlineList from '../../../doit-ui/InlineList';
import Button from '../../../doit-ui/Button';
import Text from '../../../doit-ui/Text';
import Input from '../../../doit-ui/Input';
import Form from '../../../doit-ui/Form';

import Select, { Option } from '../../../doit-ui/Select';

class TransactionSearchFilter extends PureComponent {
  render() {
    return (
      <Form onSubmit={(values) => console.log(values)}>
        <Form.Consumer>
          {({ onChange, values }) => (
            <InlineList spacingBetween={2} verticalAlign="bottom">
              <Text xlarge bold>
                검색
              </Text>
              <Select name="code" label="코인 코드" onChange={onChange} value={values['code']}>
                <Option label="선택해주세요" />
                <Option label="비트코인(BTX)" values="BTX" />
                <Option label="이더리움(ETH)" values="ETH" />
                <Option label="도지코인(DOG)" values="DOG" />
              </Select>
              <Input
                name="minAmount"
                label="최소거래가"
                onChange={onChange}
                value={values['minAmount']}
              />
              <Input
                name="maxAmount"
                label="최대거래가"
                onChange={onChange}
                value={values['maxAmount']}
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

TransactionSearchFilter.propTypes = {};

export default TransactionSearchFilter;
