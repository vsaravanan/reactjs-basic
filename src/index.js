
import ReactDOM from 'react-dom';
import React from "react";

class NameForm extends React.Component {
    state = {error: this.props.getErrorMessage('')}
    handleSubmit = (event) => {
       event.preventDefault();
       const value = event.target.elements.username.value;
        alert(`success: ${value}`);

   }

   handleChange = (event) => {
        const {value} = event.target;
        this.setState({
            error: this.props.getErrorMessage(value)
        })
   }

   render() {
        const {error} = this.state
       return (
           <form onSubmit={this.handleSubmit}>
               <label>
                   name:
                   <input name="username" onChange={this.handleChange} type="text" />
               </label>
               {error ? ( <div style={{color:'red'}}>{error} </div> ) : null }
               <button type='submit' disabled={Boolean(error)}>Submit</button>
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