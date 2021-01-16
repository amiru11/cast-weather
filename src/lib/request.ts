import Axios, { AxiosRequestConfig } from 'axios';

export const requestAxios = ({ ...config }: AxiosRequestConfig): Promise<any> =>
  new Promise((resolve, reject) => {
    Axios.create()({
      ...config,
    })
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
