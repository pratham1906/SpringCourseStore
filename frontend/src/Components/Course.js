import axios from 'axios'
import React from 'react'
import { Card,CardBody,CardTitle,CardSubtitle,CardText,CardFooter,Button,Container } from 'reactstrap'
import { toast } from 'react-toastify'
export default function Course({course,update}) {

  const deleteCourse=(id)=>{
    axios.delete(`deleteCourse/${id}`).then(
      (response)=>{
        console.log("yeah")
      toast.success("COURSE DELETED")
      update(id);
      },
      (error)=>{
        toast.error("Error Occured")
      }
    )
  }
  return (
    <Card>
        <CardBody>
            <CardSubtitle className='font-weight-bold'>{course.title}</CardSubtitle>
            <CardText>{course.desc}</CardText>
            <Container className='text-center'>
                <Button color='danger' style={{margin:12}} onClick={()=>{
                  deleteCourse(course.id);
                }}>Delete</Button>
                <Button color='warning'>Update</Button>
            </Container>
            </CardBody>
        </Card>
  )
}
