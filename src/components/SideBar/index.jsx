import Button from '@mui/material/Button';
import { FaBed } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa6";
import { FaWpforms } from "react-icons/fa";
import { CiBoxList } from "react-icons/ci";
import { MdCancelScheduleSend } from "react-icons/md";
import { useNavigate } from 'react-router-dom';



const SideBar = () => {
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate("/Room")
    }
    
    return(
        <>
        <div className="sidebar">
            <ul>
                <li>
                    <Button className='w-100' onClick={handleNavigate}>
                        <span className='icon'><FaBed/></span>
                        Room
                        <span className='arrow'><FaAngleRight/></span>
                    </Button>
                </li>
            </ul>
            <ul>
                <li>
              
                    <Button className='w-100'>
                        <span className='icon'><FaWpforms/></span>
                        Appointment Form
                        <span className='arrow'><FaAngleRight/></span>
                    </Button>
                   
                </li>
            </ul>
            <ul>
                <li>
                
                    <Button className='w-100'>
                        <span className='icon'><CiBoxList/></span>
                        Waiting List
                        <span className='arrow'><FaAngleRight/></span>
                    </Button>
             
                </li>
            </ul>
            <ul>
                <li>
                
                    <Button className='w-100'>
                        <span className='icon'><MdCancelScheduleSend/></span>
                        Schedule
                        <span className='arrow'><FaAngleRight/></span>
                    </Button>  
                  
                </li>
            </ul>
         
        </div>
        </>
    )
}

export default SideBar