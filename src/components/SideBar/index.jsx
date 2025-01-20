import Button from '@mui/material/Button';
import { FaBed } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa6";
import { FaWpforms } from "react-icons/fa";
import { CiBoxList } from "react-icons/ci";
import { MdCancelScheduleSend } from "react-icons/md";
import { useNavigate } from 'react-router-dom';



const SideBar = () => {
    const navigate = useNavigate();

    const handleNavigateR = () => {
        navigate("/Room")
    }

    const handleNavigateA = () => {
        navigate("/AppointmentForm")
    }

    const handleNavigateW = () => {
        navigate("/WaitingList")
    }

    const handleNavigateS = () => {
        navigate("/Schedule")
    }



    
    return(
        <>
        <div className="sidebar">
            <ul>
                <li>
                    <Button className='w-100' onClick={handleNavigateR}>
                        <span className='icon'><FaBed/></span>
                        Room
                        <span className='arrow'><FaAngleRight/></span>
                    </Button>
                </li>
            </ul>
            <ul>
                <li>
              
                    <Button className='w-100' onClick={handleNavigateA}>
                        <span className='icon'><FaWpforms/></span>
                        AppointmentForm
                        <span className='arrow'><FaAngleRight/></span>
                    </Button>
                   
                </li>
            </ul>
            <ul>
                <li>
                
                    <Button className='w-100' onClick={handleNavigateW}>
                        <span className='icon'><CiBoxList/></span>
                        WaitingList
                        <span className='arrow'><FaAngleRight/></span>
                    </Button>
             
                </li>
            </ul>
            <ul>
                <li>
                
                    <Button className='w-100' onClick={handleNavigateS}>
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