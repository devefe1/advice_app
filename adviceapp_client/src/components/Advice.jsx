import React, { Component } from 'react'
import axios from 'axios';

class Advice extends Component {
    constructor(props) {
        super(props);

   this.state = { advice: '',
   savedAdvice: {
       advices: ''
   }
};
   this.saveAdvice = this.saveAdvice.bind(this)
   this.fetchAdvice = this.fetchAdvice.bind(this)
}



   //executes on the render of component
   componentDidMount() {
       this.fetchAdvice;
   }

    fetchAdvice = () => {
        
        axios.get('https://api.adviceslip.com/advice')
        .then((response) => {
            const {advice} = response.data.slip;

            this.setState({ advice });

        })


        // .then ((response) => {
        //     const {savedAdvice} = response.data.slip.advice;

        //     this.setState({savedAdvice} )
        // })


        .catch((error) => {
            console.log(error)
        });

    }

saveAdvice = async () =>{
    let savedAdvice = {"advice": this.state.advices};
    try {
        await axios.post('https://cors-anywhere.herokuapp.com/https://adviceapi.herokuapp.com/advice', savedAdvice)
    
    } catch (e) {
        console.log(e)
    }
}

    render() {
        const {advice} = this.state;

        return (
            <div className = "advice">
               <main className = "card">
                   <h1 className = "heading">{advice}</h1>
                
                   <button className = "button" onClick={this.fetchAdvice}>
                       <span>GIVE ME ADVICE!</span>
                   </button>
                   <br/>
                  < button className = "button" onClick={this.saveAdvice}>
                       <span>SAVE ADVICE!</span>
                   </button>
                   
                   
               </main>
            </div>
        ); 
    }
}

export default Advice;
