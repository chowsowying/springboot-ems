/**
 * Employee: Entity class representing an employee.
 * Annotated with JPA annotations to map the class to a database table.
 */
package com.chowsowying.emsbackend.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "employees")
public class Employee {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name="first_name")
    private String firstName;

    @Column(name="last_name")
    private String lastName;

    @Column(name = "email_id", nullable = false, unique = true)
    private String email;

    //Getter/Setter/Constructors are created automatically with lombok

}
