import React, { Component } from 'react'
import axios from 'axios';

export class Advice extends Component {
   state = { advice: ''};


   //executes on the render of component
   componentDidMount() {
   }

    fetchAdvice = () => {
        
        axios.get('https://api.adviceslip.com/advice')
        .then((response) => {
            console.log(response);
        })
        .catch((error) => {
            console.log(error)
        });
    }

    render() {
        return (
            <div>
                
            </div>
        )
    }
}

export default Advice
