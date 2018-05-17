import React from 'react';
import ReactDOM from 'react-dom';
 
class MyComponent extends React.Component{
        render(){
        return(   
              <div>
               <h1>Hello</h1>
               <Header name="maxx" id="101"/>
           </div>
        );
    }
}
 
function Header(props) {
    return (              
           <div>
            <Footer name = {props.name} id = {props.id}/>
           </div>
    );
}
function Footer(props) {
    return (             
           <div>             
            <h1> Welcome : {props.name}</h1>             
            <h1> Id is : {props.id}</h1>
           </div>
  );
}
ReactDOM.render(
   <MyComponent/>, document.getElementById('root')
);