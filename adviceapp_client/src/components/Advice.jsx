import React, { Component } from 'react'
import axios from 'axios';

class Advice extends Component {
   state = { advice: ''};


   //executes on the render of component
   componentDidMount() {
       this.fetchAdvice();
   }

    fetchAdvice = () => {
        
        axios.get('https://api.adviceslip.com/advice')
        .then((response) => {
            const {advice} = response.data.slip;

            this.setState({ advice });
        })
        .catch((error) => {
            console.log(error)
        });
        
       

    }



    render() {
        const {advice} = this.state;

        return (
            <div className = "advice">
               <main className = "card">
                   <h1 className = "heading">{advice}</h1>
               </main>
            </div>
        ); 
    }
}

export default Advice;
