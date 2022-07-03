package com.springrest.springrest.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.springrest.springrest.entity.Course;
import com.springrest.springrest.services.CourseService;

@RestController
public class MyController {
 
    @Autowired
	private CourseService courseService;
	
	//get the courses
	@GetMapping("/courses")
	public ArrayList<Course> getCourses(){
		return this.courseService.getCourses();
	}
	@GetMapping("/courses/{courseId}")
	public Course getCourse(@PathVariable long courseId) {
		return this.courseService.getCourse(courseId);
	}
	@PostMapping("/addCourses")
	public Course addCourse(@RequestBody Course course) {
		return this.courseService.addCourse(course);
	}
	
	@PutMapping("/updateCourse")
	public Course updateCourse(@RequestBody Course course) {
		return this.courseService.updateCourse(course);
	}
	@DeleteMapping("/deleteCourse/{courseId}")
	public void deleteCourse(@PathVariable long courseId) {
		this.courseService.deleteCourse(courseId);
	}
}
