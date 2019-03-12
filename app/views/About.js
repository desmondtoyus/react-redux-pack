import React from 'react';
import {Link} from 'react-router-dom';
import {Helmet} from 'react-helmet';

class About extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
        
    }
    
   render(){
       return(
       <div >
          <Helmet>
                    <title>About </title>
                    <meta name="description" content="about us description"/>
                </Helmet>
       <h1>About Page!</h1>

     </div>)
   }
}

export default About;