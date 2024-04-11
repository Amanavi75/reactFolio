import React, { useState } from 'react'
import { Card } from './Card';

export const Cards = (props) => {
    let courses= props.courses;
    let category = props.category;
    
   
    const [likedCourses, setLikedCourses] = useState([]) ;
    // at first we dont have any liked course in the array thats why we taken empty array 

    //


    function getCourses(){
        if(category==="All"){
            let allCourses = [];
            Object.values(courses).forEach(array=> {
                array.forEach(courseData =>{
                    allCourses.push(courseData)
                })
            })
            return allCourses;
        }else{
            //only specific category ka array pass karoonga

            return courses[category];
        }
       
    } 
    {/*  extracted all the course data and added it into the allcourses array so that we can able to run the map function */}

  return (
    <div className="flex flex-wrap justify-center gap-4 mb-4">
        {
            getCourses().map((course)=>{
              return  <Card 
                key={course.id}
                course={course}
                category= {category}
                likedCourses={likedCourses}
                setLikedCourses= {setLikedCourses} 
                />
            })
        }
    </div>
  )
}
