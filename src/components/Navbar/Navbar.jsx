import './Navbar.css'
import Logo from '../../assets/cover(1).png'
import { Link } from 'react-router-dom'
import resume from '../../assets/resume.jpg'
import { FaRegFileLines } from "react-icons/fa6";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { RiFileEditLine } from "react-icons/ri";

const Navbar = () => {
    return (
        <>
            <div className="nav-bar">
                <div className="logo">
                    <img src={Logo} alt="" height={200} width={200} />
                </div>
                <ul>
                    <li className='nav-item1'>
                        Tools
                        <IoMdArrowDropdown className='arrow' />
                        <div className="tools">
                            <div className=" tool-item flex justify-center items-center text-left">
                                <img src={resume} alt="" height={100} width={100} />
                                <div>
                                    <p className='text-xl font-bold'>Resume Builder</p>
                                    <p className=' text-sm opacity-75'>Create a resume in 5 minutes.Get the job you want.</p>
                                </div>
                            </div>
                            <hr />
                            <div className="services">
                                <div className="service-item flex gap-4 justify-center items-center">
                                    <div className="imgResume">
                                        <FaRegFileLines size={28} />
                                    </div>
                                    <div className="service ">
                                        <h1 className='font-semibold'>Resume Checker</h1>
                                        <p className=' text-xs opacity-75'>Create resume in 5 minutes.Get the job you want.</p>
                                    </div>
                                </div>
                                <div className="service-item flex gap-4 justify-center items-center">
                                    <div className="imgResume">
                                        <FaRegFileLines size={28} />
                                    </div>
                                    <div className="service">
                                        <h1 className='font-semibold'>CV Maker</h1>
                                        <p className=' text-xs opacity-75'>Create CV in 5 minutes.Get the job you want.</p>
                                    </div>
                                </div>
                                <div className="service-item flex gap-4 justify-center items-center">
                                    <div className="imgResume">
                                        <FaRegFileLines size={28} />
                                    </div>
                                    <div className="service ">
                                        <h1 className='font-semibold'>Cover Letter Builder</h1>
                                        <p className=' text-xs opacity-75'>Write a cover letter that convinces employers that you are best.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className='nav-item2'>
                        Resume
                        <IoMdArrowDropdown className='arrow' />
                        <div className="resume">
                            <div className=" resume-item flex justify-center items-center text-left">
                                <img src={resume} alt="" height={100} width={100} />
                                <div>
                                    <p className='text-xl font-bold'>Resume Builder</p>
                                    <p className=' text-sm opacity-75'>Create a resume in 5 minutes.Get the job you want.</p>
                                </div>
                            </div>
                            <hr />
                            <div className="resume-services ">
                                <div className="resume-service flex gap-4 items-center">
                                    <div className="resume-img">
                                        <FaRegFileLines size={28} />
                                    </div>
                                    <div className="resumeDescription">
                                        <h1>Resume Templates</h1>
                                        <p>Find the best resume templates.</p>
                                    </div>
                                </div>
                                <div className="resume-service flex gap-4 items-center">
                                    <div className="resume-img">
                                        <FaRegFileLines size={28} />
                                    </div>
                                    <div className="resumeDescription">
                                        <h1>Resume Examples</h1>
                                        <p>See perfect resume examples that gets job.</p>
                                    </div>
                                </div>
                                <div className="resume-service flex gap-4 items-center">
                                    <div className="resume-img">
                                        <FaRegFileLines size={28} />
                                    </div>
                                    <div className="resumeDescription">
                                        <h1>Resume Formats</h1>
                                        <p>Pick right resume format for situation.</p>
                                    </div>
                                </div>
                                <div className="resume-service flex gap-4 items-center">
                                    <div className="resume-img">
                                        <RiFileEditLine size={28} />
                                    </div>
                                    <div className="resumeDescription">
                                        <h1>How to write a resume</h1>
                                        <p>Learn how to write resume.</p>
                                    </div>
                                </div>
                                <div className="resume-service flex gap-4 items-center">
                                    <div className="resume-img">
                                        <IoCheckmarkCircleOutline size={28} />
                                    </div>
                                    <div className="resumeDescription">
                                        <h1>Resume checker</h1>
                                        <p>Get you resume checked and score with one click.</p>
                                    </div>
                                </div>
                                <div className="resume-service flex gap-4 items-center">
                                    <div className="resume-img">
                                        <IoIosHelpCircleOutline size={28} />
                                    </div>
                                    <div className="resumeDescription">
                                        <h1>Resume Help</h1>
                                        <p>Review your resume from expert guides.</p>
                                    </div>
                                </div>
                                <p className='createResume'>Create Your Resume now</p>
                            </div>
                        </div>
                    </li>
                    <li className='nav-item3'>
                        CV
                        <IoMdArrowDropdown className='arrow' />
                        <div className="cv">
                            <div className=" resume-item flex justify-center items-center text-left">
                                <img src={resume} alt="" height={100} width={100} />
                                <div>
                                    <p className='text-xl font-bold'>CV Builder</p>
                                    <p className=' text-sm opacity-75'>Create CV in 5 minutes.Get the job you want.</p>
                                </div>
                            </div>
                            <hr />
                            <div className="resume-services ">
                                <div className="resume-service flex gap-4 items-center">
                                    <div className="resume-img">
                                        <FaRegFileLines size={28} />
                                    </div>
                                    <div className="resumeDescription">
                                        <h1>CV Templates</h1>
                                        <p>Find the best CV templates.</p>
                                    </div>
                                </div>
                                <div className="resume-service flex gap-4 items-center">
                                    <div className="resume-img">
                                        <FaRegFileLines size={28} />
                                    </div>
                                    <div className="resumeDescription">
                                        <h1>CV Examples</h1>
                                        <p>See perfect CV examples that gets job.</p>
                                    </div>
                                </div>
                                <div className="resume-service flex gap-4 items-center">
                                    <div className="resume-img">
                                        <FaRegFileLines size={28} />
                                    </div>
                                    <div className="resumeDescription">
                                        <h1>CV Formats</h1>
                                        <p>Pick right CV format for situation.</p>
                                    </div>
                                </div>
                                <div className="resume-service flex gap-4 items-center">
                                    <div className="resume-img">
                                        <RiFileEditLine size={28} />
                                    </div>
                                    <div className="resumeDescription">
                                        <h1>How to write a CV</h1>
                                        <p>Learn how to write CV.</p>
                                    </div>
                                </div>
                                <div className="resume-service flex gap-4 items-center">
                                    <div className="resume-img">
                                        <IoCheckmarkCircleOutline size={28} />
                                    </div>
                                    <div className="resumeDescription">
                                        <h1>CV checker</h1>
                                        <p>Get you CV checked and score with one click.</p>
                                    </div>
                                </div>
                                <div className="resume-service flex gap-4 items-center">
                                    <div className="resume-img">
                                        <IoIosHelpCircleOutline size={28} />
                                    </div>
                                    <div className="resumeDescription">
                                        <h1>CV Help</h1>
                                        <p>Review your CV from expert guides.</p>
                                    </div>
                                </div>
                                <p className='createResume'>Create Your CV now</p>
                            </div>
                        </div>
                    </li>
                    <li className='nav-item4'>
                        Cover Letter
                        <IoMdArrowDropdown className='arrow' />
                        <div className="coverletter">
                            <div className=" resume-item flex justify-center items-center text-left">
                                <img src={resume} alt="" height={100} width={100} />
                                <div>
                                    <p className='text-xl font-bold'>Cover Letter Builder</p>
                                    <p className=' text-sm opacity-75'>Create Cover Letter in 5 minutes.Get the job you want.</p>
                                </div>
                            </div>
                            <hr />
                            <div className="resume-services ">
                                <div className="resume-service flex gap-4 items-center">
                                    <div className="resume-img">
                                        <FaRegFileLines size={28} />
                                    </div>
                                    <div className="resumeDescription">
                                        <h1>Cover Letter Templates</h1>
                                        <p>Find the best Cover Letter templates.</p>
                                    </div>
                                </div>
                                <div className="resume-service flex gap-4 items-center">
                                    <div className="resume-img">
                                        <FaRegFileLines size={28} />
                                    </div>
                                    <div className="resumeDescription">
                                        <h1>Cover Letter Examples</h1>
                                        <p>See perfect Cover Letter examples that gets job.</p>
                                    </div>
                                </div>
                                <div className="resume-service flex gap-4 items-center">
                                    <div className="resume-img">
                                        <FaRegFileLines size={28} />
                                    </div>
                                    <div className="resumeDescription">
                                        <h1>Cover Letter Formats</h1>
                                        <p>Pick right Cover Letter format for situation.</p>
                                    </div>
                                </div>
                                <div className="resume-service flex gap-4 items-center">
                                    <div className="resume-img">
                                        <RiFileEditLine size={28} />
                                    </div>
                                    <div className="resumeDescription">
                                        <h1>How to write a Cover Letter</h1>
                                        <p>Learn how to write Cover Letter.</p>
                                    </div>
                                </div>
                                <div className="resume-service flex gap-4 items-center">
                                    <div className="resume-img">
                                        <IoCheckmarkCircleOutline size={28} />
                                    </div>
                                    <div className="resumeDescription">
                                        <h1>Cover Letter checker</h1>
                                        <p>Get you Cover Letter checked and score with one click.</p>
                                    </div>
                                </div>
                                <div className="resume-service flex gap-4 items-center">
                                    <div className="resume-img">
                                        <IoIosHelpCircleOutline size={28} />
                                    </div>
                                    <div className="resumeDescription">
                                        <h1>Cover Letter Help</h1>
                                        <p>Review your Cover Letter from expert guides.</p>
                                    </div>
                                </div>
                                <p className='createResume'>Create Your Cover Letter now</p>
                            </div>
                        </div>
                    </li>
                    <li className='nav-item5'>Career Blog <IoMdArrowDropdown className='arrow' /></li>
                    <li className='nav-item6'>About <IoMdArrowDropdown className='arrow' /></li>
                    <li><Link className='myaccount'>My Account</Link></li>
                </ul>

            </div>
        </>
    )
}

export default Navbar