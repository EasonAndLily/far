class Request {
  constructor(hostURL, port) {
    this.url = new URL(hostURL);
    this.url.port = port;
  }

  get(pathName, param) {
    this.url.pathname = pathName;
    if (param) {
      this.url.search = new URLSearchParams(param);
    }
    return fetch(this.url).then((response) => response.json());
  }
}

export default Request;
