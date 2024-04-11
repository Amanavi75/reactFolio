import React from 'react'
import { Card } from './Card';

export const Cards = (props) => {
    let courses= props.courses;

    function getCourses(){
        let allCourses = [];
        Object.values(courses).forEach(array=> {
            array.forEach(courseData =>{
                allCourses.push(courseData)
            })
        })
        return allCourses;
    } 
    {/*  extracted all the course data and added it into the allcourses array so that we can able to run the map function */}

  return (
    <div className="flex flex-wrap justify-center gap-4 mb-4">
        {
            getCourses().map((course)=>{
                return <Card  key={course.id} course={course}/>
            })
        }
    </div>
  )
}
