import React,{useEffect} from 'react'
import {Container,Button} from 'reactstrap'
export default function Home() {
  useEffect(()=>{
    document.title="View Courses"
        },[]);
  return (
    <div>
        <div style={{backgroundColor:"lightgray",padding:20}}>
        <h1>Project By Pratham</h1>
<p>Learn any Course related to programming in affordable price</p>
<Container>
    <Button color="primary" outline>Start Using</Button>
</Container>
        </div>

    </div>
  )
}
