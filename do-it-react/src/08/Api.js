// 자주 사용하는 API 프로젝트 등록
// localhost:4000

import axios from 'axios';

const Api = axios.create({
  baseURL: 'http://localhost:4000/',
});

export default Api;
