/**
 * EmployeeServiceImpl: Implementation class for the EmployeeService interface.
 * Implements methods for managing employee-related business logic.
 */
package com.chowsowying.emsbackend.service.impl;

import com.chowsowying.emsbackend.dto.EmployeeDto;
import com.chowsowying.emsbackend.entity.Employee;
import com.chowsowying.emsbackend.exception.ResourceNotFoundException;
import com.chowsowying.emsbackend.mapper.EmployeeMapper;
import com.chowsowying.emsbackend.repository.EmployeeRepository;
import com.chowsowying.emsbackend.service.EmployeeService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class EmployeeServiceImpl implements EmployeeService {

    private EmployeeRepository employeeRepo;

    @Override
    public EmployeeDto createEmployee(EmployeeDto employeeDto) {
        Employee employee = EmployeeMapper.mapToEmployee(employeeDto);
        Employee savedEmployee = employeeRepo.save(employee);
        return EmployeeMapper.mapToEmployeeDto(savedEmployee);
    }

    @Override
    public EmployeeDto getEmployeeById(Long employeeId) {
        Employee employee = employeeRepo.findById(employeeId)
                .orElseThrow(()-> new ResourceNotFoundException("Employee does not exist with the given id : " + employeeId));

        return EmployeeMapper.mapToEmployeeDto(employee);
    }

    @Override
    public List<EmployeeDto> getAllEmployees() {
        List<Employee> employees = employeeRepo.findAll();
        return employees.stream().map((emp)-> EmployeeMapper.mapToEmployeeDto(emp))
                .collect(Collectors.toList());
    }

    @Override
    public EmployeeDto updateEmployee(Long employeeId, EmployeeDto updatedEmployee) {
        Employee employee = employeeRepo.findById(employeeId)
                .orElseThrow(()-> new ResourceNotFoundException("Employee does not exist with the given id : " + employeeId));

        employee.setFirstName(updatedEmployee.getFirstName());
        employee.setLastName(updatedEmployee.getLastName());
        employee.setEmail(updatedEmployee.getEmail());

        Employee updatedEmployeeObj = employeeRepo.save(employee);


        return EmployeeMapper.mapToEmployeeDto(updatedEmployeeObj);
    }

    @Override
    public void deleteEmployee(Long employeeId) {
        Employee employee = employeeRepo.findById(employeeId)
                .orElseThrow(()-> new ResourceNotFoundException("Employee does not exist with the given id : " + employeeId));

        employeeRepo.deleteById(employeeId);
    }
}
