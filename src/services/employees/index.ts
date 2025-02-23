import api from '../../api/apiClient';
import handleResponse, {handleResponseType} from '../../api/handleResponse';
import {Employee} from '../../interfaces/employee';

const getAllEmployees = async (): Promise<handleResponseType<Employee[]>> => {
  let response = await api.get('employees');
  return handleResponse<Employee[]>(response);
};
export default getAllEmployees;
