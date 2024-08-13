package com.usecase.elearn.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.usecase.elearn.model.Enrollment;

public interface EnrollmentRepository extends JpaRepository<Enrollment, Integer> {

}
