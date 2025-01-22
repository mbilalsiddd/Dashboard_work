import DashboardBox from "../components/DashboardBox"
import { CiUser } from "react-icons/ci";
import { TbHospitalCircleFilled } from "react-icons/tb"
import { MdEmergency } from "react-icons/md";
import { MdBedroomChild } from "react-icons/md";
import { FaUserDoctor } from "react-icons/fa6";


const Dashboard = () => {
    return (
        <>
            <div className="right-content w-100">
                <div className="row dashboardBoxWrapperRow">
                    <div className="col-md-8">
                        <div className="dashboardBoxWrapper d-flex">
                            <DashboardBox color={["#1da256", "#48d483"]} icon={<CiUser />} name={"user Information"} message={"info"}/>
                            <DashboardBox color={["#c012e2", "#eb64fe"]} icon={<TbHospitalCircleFilled />}name={"Hospital Announment"} message={"announment"} />
                            <DashboardBox color={["#2c78e5", "#60aff5"]} icon={<MdEmergency />} name={"Patient In and Out"} message={"checking"} />
                            <DashboardBox color={["#e1950e", "#f3cd29"]} icon={<MdBedroomChild />} name={"Room"} 
                            message={"total"}/>
                        </div>
                    </div>
                    <div className="col-md-4 pl-0">
                        <div className="box appointBox">
                            <div className='d-flex w-100'>
                                <div className='col1 mb-0'>
                                    <h4 className='text-white'>Appointment</h4>
                                    <span className='text-white'>total appointment</span>
                                </div>
                                <div className="ms-auto">
                                <span className="icon"><FaUserDoctor/></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard