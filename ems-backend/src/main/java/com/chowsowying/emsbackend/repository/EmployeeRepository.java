/**
 * EmployeeRepository: Repository interface for performing CRUD operations on Employee entities.
 * Extends JpaRepository for easy access to database operations provided by Spring Data JPA.
 */
package com.chowsowying.emsbackend.repository;

import com.chowsowying.emsbackend.entity.Employee;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EmployeeRepository extends JpaRepository<Employee,Long> {
}
