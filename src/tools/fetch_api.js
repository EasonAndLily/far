import config from './config.json';

class Request {
  constructor(pathName) {
    this.url = new URL(config.serverURL);
    this.url.port = config.port;
    this.url.pathname = pathName;
  }

  get(param) {
    if (param) {
      this.url.search = new URLSearchParams(param);
    }
    return fetch(this.url).then((response) => response.json());
  }
}

export default Request;
