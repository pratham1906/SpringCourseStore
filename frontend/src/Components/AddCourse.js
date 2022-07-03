
import axios from 'axios';
import React, { useState } from 'react'
import {Form,FormGroup,Input,Container,Button} from 'reactstrap'
import base_url from '../api/bootapi';
export default function AddCourse() {


       const[course,setCourse]=useState({});
       const handleForm=(e)=>{
              console.log(course);
              postDataServer(course);
              
       }



       //creating function to post data on server
       const postDataServer=(data)=>{
              axios.post('/addCourses',data).then(
                     (response)=>{
                            console.log(response);
                            console.warn("success");
                     },
       (error)=>{
              console.log(error);
       }
              )
       }
  return (
   <>
   
   <h1 className='text-center my-3'>Fill Course Details</h1>
   <Form onSubmit={handleForm}>
       
       <FormGroup>
<label htmlFor="courseId">Course Id</label>
<Input type="text" placeholder="Enter Here" name="courseId" id="courseId"
onChange={(e)=>{
       setCourse({...course,id:e.target.value})
}}




/>
       </FormGroup>


       <FormGroup>
<label htmlFor="title">Course Title</label>
<Input type="text" placeholder="Enter Title Here" name="title" id="title"

onChange={(e)=>{
       setCourse({...course,title:e.target.value})
}}/>
       </FormGroup>

       <FormGroup>
<label htmlFor="desc">Description</label>
<Input type="textarea" placeholder="Enter Description Here" name="desc" id="desc"
onChange={(e)=>{
       setCourse({...course,desc:e.target.value})
}}/>
       </FormGroup>
       <Container className='text-center'>
       <Button  type="submit" color="success">Add Course</Button>
           <Button type="reset" onClick={()=>{
              setCourse({id:"",title:"",description:""})
           }}>Clear</Button>
       </Container>
           
       
   </Form>
   </>
  )
}
