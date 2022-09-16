package com.students.loginProject.service;
import com.students.loginProject.model.Student;

import java.util.List;


public interface IStudentService{
    public Student saveStudent(Student student);
    public List<Student> getAllStudents();
    public void deleteOneStudent(int id);
}
