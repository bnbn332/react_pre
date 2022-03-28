//버튼을 누르면 모달 박스가 나타나도록 만들기

import React, { PureComponent } from 'react';
import Button from '../04/Button';
import Text from '../04/Text';
import Modal from './Modal';

class ButtonWithModal extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { showModal: false }; //모달 출력상태를 state에 저장
  }
  render() {
    return (
      <React.Fragment>
        <Button onPress={() => this.setState({ showModal: true })}>삭제</Button>
        {this.state.showModal && ( //버튼이 눌릴 때 출력 state를 변경 ↑
          //state의 출력 상태 값이 변경되면 모달 박스를 출력
          <Modal>
            <div>
              <Text>정말로 삭제하시겠습니까?</Text>
            </div>
            <Button primary>예</Button>
            <Button onPress={() => ({ showModal: false })}>닫기</Button>
          </Modal>
        )}
      </React.Fragment>
    );
  }
}

export default ButtonWithModal;
