
import ReactDOM from 'react-dom';
import React from "react";

class NameForm extends React.Component {
   handleSubmit = (event) => {
       event.preventDefault();
       const value = event.target.elements.username.value;
       const error = this.props.getErrorMessage(value);
       if (error) {
        alert(`error: ${error}`);
       } else {
        alert(`success: ${value}`);
       }

   }

   render() {
       return (
           <form onSubmit={this.handleSubmit}>
               <label>
                   name:
                   <input name="username"  type="text" />
               </label>
               <button type='Submit'>Submit</button>
           </form>
       )
   }
}


ReactDOM.render(
    <NameForm
        getErrorMessage={value => {
            if (value.length < 3) {
                return `Value must be at least 3 characters`;
            }
            if (!value.includes('s')) {
                return `Value does not include "s"`
            }
            return null
        }}
    />, 
    document.getElementById('root'));