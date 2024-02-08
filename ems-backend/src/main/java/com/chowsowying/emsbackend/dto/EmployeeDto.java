/**
 * EmployeeDto: Data Transfer Object (DTO) class representing an employee.
 * Used for transferring employee data between different layers of the application.
 */
package com.chowsowying.emsbackend.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class EmployeeDto {
    private Long id;
    private String firstName;
    private String lastName;
    private String email;
}
