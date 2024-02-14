import axios from "axios";

const REST_API_BASE_URL = "http://localhost:8080/api/employees";

export const listEmployeesAPI = () => axios.get(REST_API_BASE_URL);

export const addEmployeesAPI = (employee) => axios.post(REST_API_BASE_URL, employee);

export const getEmployeeByIdAPI = (empId) => axios.get(REST_API_BASE_URL + "/" + empId);
