let backendHost;

const isServer = typeof window === 'undefined';

const hostname = isServer
  ? ''
  : window && window.location && window.location.hostname;

if (hostname === 'localhost') {
  backendHost = 'http://localhost:8000';
} else if (hostname === '') {
  backendHost = 'http://localhost:8000';
} else {
  backendHost = 'http://prod-todo-backend.us-west-2.elasticbeanstalk.com'; // 자기주소로 바꾸기
}

export const API_BASE_URL = `${backendHost}`;
