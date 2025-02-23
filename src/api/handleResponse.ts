import {AxiosResponse} from 'axios';

export type handleResponseType<T> = {
  success: boolean;
  data?: T;
  status: number;
};
const handleResponse = <T>(res: AxiosResponse): handleResponseType<T> => {
  let success = res.data ? true : false;

  if (success) {
    return {
      success,
      data: res.data,
      status: res.status,
    };
  } else {
    return {
      success,
      status: res.status || 500,
    };
  }
};
export default handleResponse;
