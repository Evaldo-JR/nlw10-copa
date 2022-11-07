import axios from 'axios';

/* Se estiver usando IOS, a porta "localhost" funciona,
 * mas para android precisa ser o IP Físico do seu computador,
 * que inclusive também funciona para desenvolvimento em IOS. */

export const api = axios.create({
  baseURL: 'http://192.168.237.86:3333',
});
