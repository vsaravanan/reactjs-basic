
import ReactDOM from 'react-dom';
import React from "react";

class NameForm extends React.Component {
   handleSubmit = (event) => {
       event.preventDefault();
       console.log(event.target[0].value);
       console.log(event.target.elements.username.value);
       console.log(this.userName.value)
   }

   render() {
       return (
           <form onSubmit={this.handleSubmit}>
               <label>
                   name:
                   <input name="username" ref={inputNode => (this.userName = inputNode)} type="text" />
               </label>
               <button type='Submit'>Submit</button>
           </form>
       )
   }
}


ReactDOM.render(<NameForm/>, document.getElementById('root'))