import { v4 as uuidv4 } from 'uuid';

export type Platform = 'android' | 'ios';

type JSON_PARAM = {
  jsonrpc: '2.0';
  id: string;
  method: string;
  params: any[];
};

type JSON_RESULT = {
  jsonrpc: '2.0';
  id: string;
  result: any;
  error: string;
};

type TaskMap = {
  [key: string]: {
    resolve: (value: unknown) => void;
    reject: (err: string) => void;
  };
};

export class NativeRPC {
  private platform: string;
  private taskMap: TaskMap = {};

  constructor(platform: Platform) {
    this.platform = platform;
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    window.listen = (param: string) => {
      try {
        this.listen(JSON.parse(param));
      } catch (error) {
        console.info(
          'sdk: recieved listen param should be json string, current is ',
          param
        );
      }
    };
  }

  send(param: JSON_PARAM) {
    console.info('sdk: native rpc send ', param);
    try {
      switch (this.platform) {
        case 'android':
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          window.OcPluginInterface.send(JSON.stringify(param));
          break;
        case 'ios':
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          window.webkit.messageHandlers.send.postMessage(JSON.stringify(param));
          break;
      }
    } catch (error) {
      console.info('sdk: native send method error ', error);
    }
  }

  listen(param: JSON_RESULT) {
    console.info('sdk: native rpc listen recieved ', param);
    const { id, result, error } = param;
    const task = this.taskMap[id];

    if (!task) {
      return;
    }

    Reflect.deleteProperty(this.taskMap, id);
    if (error) {
      return task.reject(error);
    }

    task.resolve(result);
  }

  async invoke(method: string, ...args: any[]) {
    const requestId = uuidv4();

    return new Promise((resolve, reject) => {
      this.send({
        jsonrpc: '2.0',
        id: requestId,
        method,
        params: args,
      });
      this.taskMap[requestId] = { resolve, reject };
    });
  }
}
