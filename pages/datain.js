import React, { useEffect, useState } from 'react'
import { realdb } from '../shared/FirebaseConfig'
import { ref, onValue } from 'firebase/database';
function datain() {

   const [data, setdata ] = useState ([])

    useEffect(() => {
       const db = realdb;
       const path = ref(db,"employees")
    //    console.log(path) 
    const dataArray = []
       onValue(path,(snapshot)=>{
      const dataArray = [];
      snapshot.forEach((data)=>{
        dataArray.push(data.val())
      }) ;
      setdata (dataArray)
       })
    //    console.log(dataArray)
       
      }, []);
console.log(data)
  return (
    <div className='mt-20'>
        {data.map((food,index)=>{
            return <div key={index}> 
            <p>{index}</p>
            <p> {food.name} </p>
            <p> {food.title}</p>

            </div>
        })}
    </div>
  )
}

export default datain
