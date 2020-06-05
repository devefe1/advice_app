import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            userName: '',
            password: ''
         }
    }

    render() { 
        return ( 
      <div className = 'page'>
                <div id="message"><br/>This app provides a single <br/> piece of advice,<br/> chosen at random daily <br/>with a little bit of humor :)</div>
                <div className='login-page' >
                    <div className='form' >
                        <form className='register-form' >
                            <input type="text" placeholder="User Name"/>
                            <input type="password" placeholder="Password" />
                            <button type="submit" > Login </button>
                        </form>
                        <Link id='noAccount' to='/signup' > <p> Don't have an account? Sign up </p>  </Link>
                       
                 </div>
                    </div>
          
    </div>
         );
    }
}
 
export default Login;