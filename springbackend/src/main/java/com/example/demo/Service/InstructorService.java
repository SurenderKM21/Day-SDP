package com.example.demo.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Model.Assignment;
import com.example.demo.Model.Course;
import com.example.demo.Model.LearningMaterial;
import com.example.demo.Model.SubModule;
import com.example.demo.Repository.AssignmentRepository;
import com.example.demo.Repository.CourseRepository;
import com.example.demo.Repository.LearningMaterialRepository;
import com.example.demo.Repository.SubModuleRepository;

@Service
public class InstructorService {

    @Autowired
    private CourseRepository cr;

    @Autowired
    private LearningMaterialRepository lr;

    @Autowired
    private SubModuleRepository sr;

    @Autowired
    private AssignmentRepository ar;

    public Course savecourse(Course course) {
        return cr.save(course);
    }

    public String deletecourse(int id) {
        Course exists = cr.findById(id).orElse(null);
        if (exists != null) {
            cr.deleteById(id);
            return "course deleted successfully";
        }
        return "course not found";
    }

    public List<Course> allcourses() {
        return cr.findAll();
    }

    public LearningMaterial upload(LearningMaterial material) {
        return lr.save(material);
    }

    public SubModule add(SubModule subModule) {
        return sr.save(subModule);
    }

    public Assignment addassign(Assignment assignment) {
        return ar.save(assignment);
    }

    public List<LearningMaterial> getall() {
        return lr.findAll();
    }

    public List<SubModule> getallsubmodule() {
        return sr.findAll();
    }

    public List<Assignment> getallassignment() {
        return ar.findAll();
    }

}
