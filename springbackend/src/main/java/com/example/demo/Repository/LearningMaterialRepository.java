package com.example.demo.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.Model.LearningMaterial;

public interface LearningMaterialRepository extends JpaRepository<LearningMaterial, Integer> {

}
