import { getRPC } from '../rpcs';

async function getCode() {
  const rpc = getRPC();

  console.info('sdk: api invoke api.code');
  const reponse = await rpc.invoke('api.code');
  console.info('sdk: api respone api.code ', reponse);

  if (typeof reponse === 'string') {
    return JSON.parse(reponse);
  }

  return reponse;
}

export const API = {
  getCode,
};
