import React, { Component } from 'react';
import ReactTypingEffect from 'react-typing-effect';
import profilepic from '../Images/profilepic.jpg';


class Home extends Component { 
    render() { 
        return (
            <div className="condiv home">
            <img src={profilepic} className='profilepic'/>


{/* typing effect */}
<ReactTypingEffect 
className="typingeffect" 
text={['My name is Alexandra Chaney!']} 
speed={50} 
eraseDelay={700}
/>


</div>

        )
}
}
export default Home