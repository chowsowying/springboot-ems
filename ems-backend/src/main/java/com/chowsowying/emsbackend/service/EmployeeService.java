/**
 * EmployeeService: Service interface defining operations related to employees.
 * Contains methods for managing employee-related business logic.
 */
package com.chowsowying.emsbackend.service;

import com.chowsowying.emsbackend.dto.EmployeeDto;
import java.util.List;

public interface EmployeeService {
    EmployeeDto createEmployee(EmployeeDto employeeDto);
    EmployeeDto getEmployeeById(Long employeeId);
    List<EmployeeDto> getAllEmployees();
    EmployeeDto updateEmployee(Long employeeId, EmployeeDto updatedEmployee);
    void deleteEmployee(Long employeeId);

}
