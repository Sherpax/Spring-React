package com.students.loginProject.controller;

import com.students.loginProject.model.Student;
import com.students.loginProject.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "/student")
@CrossOrigin
public class StudentController {

    @Autowired
    private StudentService studentService;

    @PostMapping("/add")
    public String addStudent(@RequestBody Student student){
        studentService.saveStudent(student);
        return "Student successfully added";
    }

    @GetMapping(path = "/students")
    public List<Student> getStudents(){
        return studentService.getAllStudents();
    }

    @DeleteMapping("/students/student/delete/{id}")
    public String deleteStudent(@PathVariable("id") int id){
        studentService.deleteOneStudent(id);
        return "Student " + id + " deleted";
    }

}
