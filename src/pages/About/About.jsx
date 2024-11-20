import food from '../Assets/food.jpg'
import travel from '../Assets/travel.jpg'
import react from "../Assets/react.png"
const About = () => {
    return (
      <>
           <h1 className='About-Me'>About Me</h1>
           <p className='P'>My favorite things are</p>
           <ul className='List' >
             <li  className="animate__animated animate__tada">Food</li>
             <li className="animate__animated animate__tada">Travel</li>
             <li className="animate__animated animate__tada">working out</li>
             <img class="photos" src={food} />
             <img class="photos" src={travel} />
           </ul>
           <ul className="animate__animated animate__bounceIn">Coding languages
           
             <li>React</li> 
            <img class='photos' src={react} />
           </ul>
         
            </>
     
    );
};

export default About;