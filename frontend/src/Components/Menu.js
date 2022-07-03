import React from 'react'
import { Link } from 'react-router-dom'
import { ListGroup, ListGroupItem } from 'reactstrap'

export default function Menu() {
  return (
    <ListGroup>
        <Link  className='list-group-item list-group-item' to="/" >
Home
        </Link>
        <Link className='list-group-item list-group-item' to="/add-course" >
Add Course
        </Link>
        <Link  className='list-group-item list-group-item' to="/view-courses" >
View Courses
        </Link>
        <Link  className='list-group-item list-group-item' to="" >
About
        </Link>
        <Link  className='list-group-item list-group-item' to="" >
Contact
        </Link>
    </ListGroup>
  )
}
