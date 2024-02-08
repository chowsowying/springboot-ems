/**
 * EmployeeMapper: Mapper class responsible for converting between Employee and EmployeeDto objects.
 * Provides methods to map an Employee entity to an EmployeeDto DTO and vice versa.
 */
package com.chowsowying.emsbackend.mapper;

import com.chowsowying.emsbackend.dto.EmployeeDto;
import com.chowsowying.emsbackend.entity.Employee;

public class EmployeeMapper {
    public static EmployeeDto mapToEmployeeDto(Employee employee) {
        return new EmployeeDto(
                employee.getId(),
                employee.getFirstName(),
                employee.getLastName(),
                employee.getEmail()
        );
    }

    public static Employee mapToEmployee(EmployeeDto employeeDto) {
        return new Employee(
                employeeDto.getId(),
                employeeDto.getFirstName(),
                employeeDto.getLastName(),
                employeeDto.getEmail()
        );

    }
}
