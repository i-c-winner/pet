import { TCallback } from '../../app/types';

class Api {

  private readonly xhr: XMLHttpRequest;
  protected listeners: { [key: string]: TCallback[] };


  constructor() {
    this.xhr = new XMLHttpRequest();
    this.listeners = {};
    this.setHeaders = this.setHeaders.bind(this);

  }
  createListners() {
    this.xhr.addEventListener('load', this.load);
    this.xhr.addEventListener('loadend', this.loadend);
    this.xhr.addEventListener('error', this.error);
  }

  open(method: string, url: string, state?: boolean) {
    this.xhr.open(method, url, state??false);
  }

  setHeaders(headers: { name: string, value: string }[]) {
    headers.forEach((header) => {
      const { name, value } = header;
      this.xhr.setRequestHeader(name, value);
    });
  }

  send(body?: XMLHttpRequestBodyInit| undefined){
    console.log(body)
    body?this.xhr.send(body):this.xhr.send();
  }

  load=(ev: ProgressEvent)=> {
    this.emit('loadRequest', ev)
  }

  loadend=(ev: ProgressEvent)=> {
    this.emit('loadendRequest', this.xhr.responseText)
  }

  error=(ev: ProgressEvent)=> {

    this.emit('errorRequest', ev)
  }

  on(name: string, callback: TCallback) {
    if (!this.listeners[name]) {
      this.listeners[name] = [];
    }
    this.listeners[name].push(callback);
  }

  emit(name: string, ...args: any[]) {
    if (!this.listeners[name]) {
      console.error(`Listener ${name} dont`,new Error());
    }
    this.listeners[name].forEach((listener) => listener(args[0]));
  }
}


export { Api };
