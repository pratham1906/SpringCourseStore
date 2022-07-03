import React,{useEffect, useState} from 'react'
import Course from './Course'
import base_url from '../api/bootapi';
import axios from 'axios';
import { toast } from 'react-toastify';
export default function AllCourses() {

    useEffect(()=>{
document.title="View Courses";
getAllCoursesFromServer();
    },[]);

    //function to call api from server
    const getAllCoursesFromServer=()=>{
   axios.get('/courses').then(
       (response)=>{
            
           console.log(response);
           toast.success("Courses has been loaded");
           setCourses(response.data);
       },
       (error)=>{
           console.log(error);
       }
   )
    }




    const[courses,setCourses]=useState([
        {title:"Java Course",desc:"Let's go"},
        {title:"Django Course",desc:"Let's go"},
        {title:"Angular Course",desc:"Let's go"},
        {title:"ReactJs Course",desc:"Let's go"}
    ]);


    const updateCourse=(id)=>{
setCourses(courses.filter((c)=>c.id!=id));
    }
  return (
   <div>
       <h1>All Courses</h1>
       <p>Explore all Courses</p>
       {
           courses.length>0?courses.map((item)=>
            <Course key={item.id} course={item} update={updateCourse}/>
           ):"No Courses Found"
       }
   </div>
  )
}
