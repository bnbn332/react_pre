import React from 'react';
import { storiesOf } from '@storybook/react';

import Table from '../doit-ui/Table';
import TableHead from '../doit-ui/TableHead';
import TableBody from '../doit-ui/TableBody';
import TableRow from '../doit-ui/TableRow';
import TableCell from '../doit-ui/TableCell';

storiesOf('Doit-UI/Table', module).addWithJSX('Table 예제', () => (
  <Table>
    <TableHead>
      <TableRow>
        <TableCell align="left">코인</TableCell>
        <TableCell align="center">시가 총액</TableCell>
        <TableCell align="center">현재 시세</TableCell>
        <TableCell align="right">거래 시간</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      <TableRow>
        <TableCell>비트코인(BTX)</TableCell>
        <TableCell align="center">123,123,000.000원</TableCell>
        <TableCell align="center">4,200,000원</TableCell>
        <TableCell align="right">2022/05/12 23:02:00</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>우이코인(WooC)</TableCell>
        <TableCell align="center">3,123,000.000원</TableCell>
        <TableCell align="center">200,000원</TableCell>
        <TableCell align="right">2022/05/12 02:02:00</TableCell>
      </TableRow>
    </TableBody>
  </Table>
));
