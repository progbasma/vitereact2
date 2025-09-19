import React from 'react'
// import './Mainc.css'
// const styles={
// maincomponent:{background:"burlywood",padding:"50px",width:"60%",margin:"auto",marginTop:"50px"},
// h1:{textAlign:"center",color:"red"}
// };
import styles from "./Mainc.module.css"
const myname="ahmed";
const students=["ahmed","hany","ali","nada"];
function Mainc() {
  return (
    <section className={styles.maincomponent}  >
        <h1>welcome {myname} in main component</h1>
        {
        /*
        <img src=''/>
        
        <label htmlFor='username'>username</label> <input type="text" placeholder='username' id='username' /> 
        */

        }
        <ul>
          {
            students.map((student)=><li key={student}>{student}</li>)
          }
        </ul>



    </section>
    
  )
}

export default Mainc