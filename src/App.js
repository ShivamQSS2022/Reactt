
import logo from './logo.svg';
import './App.css';
// import ComPonent  from './Constructor'
// import RenderInClassMethod from './RenderInClass';
// import {useState} from 'react'
// import ComponentDidMounts from './ComponentDidMounts';
// import ComponentDidUpdates from './ClassComponentDidUpdate';
// import ClassComp from './ClassCom';
import { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
// import { GearFill } from 'react-bootstrap-icons';
import PageButton from './PageButton';

function App()
{

  return(
    <div className='App'>

  <div className="Nav">

    <div className="my-2 buttonContainer buttonContainerTop">
                      <PageButton name={"Swap"} isBold={false}/>
                      <PageButton name={"Pool"} isBold={false} />
                  </div>
    </div>
      <div className='InterfaceBody'>
        <div className='InterfaceContainer'>
          <div className='Header'>

          <span className='swap'>Swap</span>
          <span className='setting-icon'> <i class="fa fa-cog" aria-hidden="true"></i></span>


          </div>



  <div>
        <input className='input input-box-margin' type='text'  placeholder='0.0'>
          
        </input>

        <input className='input sec-input-box' type='text' placeholder='0.0'>
        </input>

        <Button  className='button' size='' color='black' >
        <bold>Connect Wallet</bold>
      </Button>



  </div>




          

        </div>

  </div>




    </div>


  )
}


export default App;







//pics
//9838949653









// //   --------------RENDER IN CLASS METHOD----------------------------------



// // function App()
// // {
// //   const[name,setNAME]= useState("SHIVAM")
// //   return(
// //     <div className='App'>

// //       {/* 
// //       <ComPonent/> 
      
// //       */}
// //       <RenderInClassMethod name= {name} />
// //       <button onClick={()=>setNAME("KHUSHI")}>Update Name</button>

// //     </div>
// //   )
// // }


// // export default App;






























// /// FUNCTION BEING PASSED AS A PROPS IN REACT EXAMPLE




// // import logo from './logo.svg';
// // import './App.css';
// // import React from 'react';  
// // import InputBoxValue from './InputBoxVal';
// // import HideAndShow from './HideAndShow';
// // import OnChangeInputBoxVal from './InputBoxValue';
// // import HideShowToggle from './HideShowToggle';
// // import HandleFormDta from './HandleFormData';
// // import Profile from './IfElseCond';
// // import LogInFormVal from './LoginFormVal';
// // import FunAsProps from './FunAsProps'

// // function App(){


// //   //Example of Function Being Passed AS Props
// //   function getData()
// //   {
// //     alert("THIS IS THE FUNCTION BEING PASSED AS PROPS");
// //   }

// //   return(

// //     <div className='App'>

// //       {/* <InputBoxValue/>
// //       <HideAndShow/>
      
// //       <HideShowToggle/>
// //       <OnChangeInputBoxVal/>
      
      
// //       <HandleFormDta/>
// //       <Profile/>
// //       <LogInFormVal/>
      


// //       */}


// //       <FunAsProps  data= {getData}/>
      


// //     </div>

// //   )
// // }

// // export default App;










  
  
  
  
//   //PROPS IN CLASS COMPONENT EXAMPLE                      




// // import logo from './logo.svg';
// // import './App.css';
// // import React from 'react';
// // import Student from './Props';
// // import { useState } from 'react';
// // import PropsInClassComp from './PropsInClassComp'


// // class App  extends React.Component{

// //   constructor(){
// //     super();
// //     this.state={
// //       name:"avinash gupta",
// //       email:"avinash@gmail.com"
// //     }
// //   }


// //   render(){
// //     return (
  
// //       <div className="App">
// //        <PropsInClassComp name={this.state.name} email={this.state.email}/>
// //        {/* <PropsInClassComp name='AVINASH' email="AVINASH@gmail.com"/> */}
// //        <button onClick={()=>this.setState({name:'SHIVAM SINGH', email:'shivam@gmail.com'})}>
// //         UPDATE
// //        </button>
  
// //       </div>
// //     );

// //   }
 
// // }

// // export default App;












































// // PREVIOUS EXAMPLES WITH PROPS WORKING: FROM  FERE ONWARDS NEW APP CONTENT IS CREATED
   
// // import logo from './logo.svg';
// // import './App.css';
// // import React from 'react';
// // // import Shivam from './Shivam';
// // // import Urs from './Users'; 
// // // import Hello from './Hello';
// // // import Comp from './Comp';
// // // import ClassComp from './ClassCom';
// // // import AnoClassComp from './AnoClassComp';
// // // import Jsx from './Jsx';
// // // import  ClickEvent  from './ClickEvent';
// // // import State from './StateInFuncComp';
// // // import ClassState from './StateInClassComp';
// // import Student from './Props';
// // import { useState } from 'react';

// // function App() {

// //   // SETTING UP PROPS DEFAULT VALUE
// //   const [name,setName]= useState("SHIWANI SINGH");
// //   return (
// //     <div className="App">
// //       {/* 
// //     <Shivam />
// //     <Hello/>
// //     <Comp/>
// //     <ClassComp/>
// //     <AnoClassComp/>
// //     <ClickEvent/>
// //     <Urs />
// //     <State/>
// //     <Jsx/> 
// //     <ClassState/>
// //     */}
// //     {/* <Student name ="SHIVAM"/>
// //     <Student name ="PROPS"/>
// //     <Student message="STUDYING PROPS IN REACT"/> */}
    
// //     {/* <Student name={"SHIVAM SINGH"} email={"shivam@singh.com"}  other={{address:"Lucknow", Num:222}}/> */}
     
// //   {/* PASSING THE PROPS VALUE */}
// //     <Student name={name}/>

// //     {/* UPDATING  NEW PROP VALUE */}
// //     <button onClick={()=>{setName("SHIVAM SINGH")}}>UPDATE</button>
// //     {/* <Student name={"SHUBHAM YADAV"} />
// //     <Student name={"DEVANSH SRIVASTAVA"} /> */}


// //     </div>
// //   );
// // }

// // export default App;

























// // import logo from './logo.svg';
// // import './App.css';
// // function App(){
// //   let data = "SHIVAM SINGH";
// //   function Apple()
// //   {
// //     alert("function Called");
// //   }

// //   return (
// //     <div className='App'>
// //       <h1>Hello WORLD!!!!!!!!!!!!!!!</h1>

// //       <h1>{data}</h1>

// //       {/* This will call the function automatically without evenClicking */}
// //       {/* <button onClick={Apple}>Click Me</button> */}

// //       {/* SOlution to abpove probem */}

// //       {/* <button onClick ={()=> {Apple()}} >Click Me</button> */}


// //     </div>
// //   )
// // }

// // export default App;