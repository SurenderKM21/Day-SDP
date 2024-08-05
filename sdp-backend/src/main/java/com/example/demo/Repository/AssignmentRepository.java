package com.example.demo.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.Model.Assignment;

public interface AssignmentRepository extends JpaRepository<Assignment, Integer> {

}
