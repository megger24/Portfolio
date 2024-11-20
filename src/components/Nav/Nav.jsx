import { useState } from 'react';
import { NavLink  } from 'react-router-dom';
import Modal from '../Modal/Modal';
import './style.css';
const Nav = () => {
const [modal, setModal] = useState(false)
    return (
        <>
        {modal && <Modal />}
        <div id='topnav' > 
           <NavLink className='link' to='/'>Home</NavLink>
            <NavLink className='link' to='/About'>About</NavLink>
            <NavLink className='link' to='/Projects'>Projects</NavLink>
            <button onClick={()=> setModal(!modal)} className='button'>Click</button> 
      
      
       
        </div>

        </>
    )

   
};

export default Nav;
