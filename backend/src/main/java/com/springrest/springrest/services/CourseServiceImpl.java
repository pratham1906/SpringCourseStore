package com.springrest.springrest.services;

import java.util.ArrayList;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.springrest.springrest.entity.Course;
import com.springrest.springrest.repo.CourseDao;

@Service
public class CourseServiceImpl implements CourseService {
    @Autowired
	private CourseDao courseDao;
	ArrayList<Course> list;
	
	public CourseServiceImpl() {
		list=new ArrayList<>();
		list.add(new Course(145,"Java Core Course","course course course"));
		list.add(new Course(222,"ReacTjS Core Course","couourse"));
	}
	@Override
	public ArrayList<Course> getCourses() {
		return (ArrayList<Course>) courseDao.findAll();
	}
	
	@Override
	public Course getCourse(long courseId) {
//		Course c=null;
//		for(Course course:list) {
//			if(course.getId()==courseId) {
//				c=course;
//				break;
//			}
//		}
		return courseDao.getReferenceById(courseId);
	}
	@Override
	public Course addCourse(Course course) {
		 
				courseDao.save(course);
				return course;
	}
	@Override
	public Course updateCourse(Course cou) {
	
//		for(Course course:list) {
//			if(course.getId()==cou.getId()) {
//				course.setTitle(cou.getTitle());
//				course.setDesc(cou.getDesc());
//				break;
//			}
//		}
		courseDao.save(cou);
		return cou;
	}
	@Override
	public void deleteCourse(long courseId) {
//		for(Course course:list) {
//			if(course.getId()==courseId) {
//				list.remove(course);
//			}
//		}
		Course entity=courseDao.getReferenceById(courseId);
		courseDao.delete(entity);
	}
	

}
