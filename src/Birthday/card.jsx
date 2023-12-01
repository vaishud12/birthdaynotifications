import {  useState } from "react"
import Data from "./Data"
import './Card.css'


const Card = () => {
    const[data,setData]=useState(Data)  
    
  return (
    <div className="App">
       <section>
          <main>
            <p>Today Birthday {data.length} </p>
              {data.map((x)=>{
                return(
                    <div className='Cards' key={x.image}>
                      <img src={x.image} alt='' height={'60px'} width={'60px'}></img>
                      <ruby><p>{x.age}</p><rt>{x.name}</rt></ruby>
                    </div>

                )
              })}
              <button onClick={()=>setData([])}>Clear</button>
          </main>
       </section>
        
    
    </div>
    
    
  )
}

export default Card