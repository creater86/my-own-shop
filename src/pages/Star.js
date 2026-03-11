import React, { useState } from 'react'
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";

function Star() {

  const Arrindex = Array(5).fill("");

  const [currentindex, setCurrentindex] = useState(() => Math.floor(Math.random()*5)+1);

  const [reviews] = useState(() => Math.floor(Math.random()*500)+1);

  return (
    <div className='para' style={{display:"flex",alignItems:"center",gap:"5px"}}>

      {Arrindex.map((_, index) => {

        if (index < currentindex) {
          return (
            <FaStar 
              key={index}
              onClick={() => setCurrentindex(index + 1)}
              style={{ color: "gold", fontSize: "25px" }}
            />
          );
        }

        return (
          <CiStar
            key={index}
            onClick={() => setCurrentindex(index + 1)}
            style={{ fontSize: "23px" }}
          />
        );

      })}

      <span style={{fontSize:"14px",color:"white"}}>
        {currentindex}.0 ({reviews})
      </span>

    </div>
  )
}

export default Star 