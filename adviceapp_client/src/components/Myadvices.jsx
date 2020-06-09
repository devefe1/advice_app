import React, { Component } from 'react';
import axios from 'axios';
import '../styles/Myadvices.css';


class Myadvices extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            gottenAdvice: []
         }

         this.deletedAdvices = this.deletedAdvices.bind(this)
    }

    

    componentDidMount = async () => {
        try {
            const myAdvices = await axios.get('https://cors-anywhere.herokuapp.com/https://adviceapi.herokuapp.com/advice');
            this.setState({gottenAdvice: myAdvices.data});
            console.log(myAdvices.data)

       //catch errors     
        } catch (e) {
            console.log(e);
        }
    }
    
    deletedAdvices = async (id) => {
        const {gottenAdvice} = this.state;
        try{
            const deleted = await axios.delete(`https://cors-anywhere.herokuapp.com/https://adviceapi.herokuapp.com/advice/${id}` , gottenAdvice);
            let deletedProducts = [...this.state.gottenAdvice].filter(i => i.id !== id)
            this.setState({gottenAdvice: deletedProducts})
            // this.setState({cartProducts: cart.data});
            console.log(deleted.data)

       //catch errors     
        } catch (e) {
            console.log(e);
        }
    }

    
    render() { 
        return ( 
            
                
                <div className="cartPage" >
                {this.state.gottenAdvice.map(item =>(
                    <div className="cartField"key={item.id}> 
                        <h3 className="item">{item.advice}</h3>
                        <p className="productPrice"><button className="delete" onClick={() => this.deletedAdvices(item.id)}>Delete</button></p> 
                    </div>

                ))}
            
                

                
            </div>
         );
    }
}
 
export default Myadvices;