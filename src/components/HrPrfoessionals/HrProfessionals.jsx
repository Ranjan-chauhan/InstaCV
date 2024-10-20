import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { FaLinkedinIn } from "react-icons/fa";
import hr from '../../assets/HR.jpg'
import '../../CSS/Styles.css'

const HrProfessionals = () => {
  const options = {
    items: 2,
    nav: true,
    dots: true,
    slideBy: 2,
    stagePadding: 0,
    autoWidth: false,
    margin: 40,
    navText: ["<i class='bx bxs-left-arrow custom'></i>", "<i class='bx bxs-right-arrow custom'></i>"],
    responsive: {
      0: {
          items: 1
      },
      600: {
          items: 1
      },
      1000: {
          items: 2
      },
      1500:{
        items:4
      }
  }
  }

  return (
    <>
      <div className="testimonials">
        <h1 className='text-4xl font-bold'>HR Professionals Recommend InstaCV</h1>
        <p className='text-lg mt-3 mb-6'>Industry experts recommend InstaCV as a proven way to boost your career.</p>
        <OwlCarousel className='owl-theme' {...options}>
          <div className='item'>
            <div className="img-div flex justify-between items-center">
              <div className="hr-img flex justify-center items-center">
                <img src={hr} alt="hr1" />
                <p className='text-left ml-2'>
                  <h1 className='text-lg'>Caroline Dowd-Higgins</h1>
                  <h1 className='text-lg opacity-70'>TEDx Speaker & Executive Coach</h1>
                </p>
              </div>
              <div className="linkedin"><FaLinkedinIn /></div>
            </div>
            <div className="testimony mt-2">
              <p className='text-left text-lg'>The worker masrket has created a fierce competition for roles.
                Your resume is the first impression and an essential opportunity to distinguish yourself.
                I have reviewed thousand of resumes in my coaching practice and the InstaCV Resume Builder and templates are an outstanding resource to help you put your best professional foot forward.
                User Friendly with recruiter insight to help you shine.</p>
            </div>
          </div>
          <div className='item'>
            <div className="img-div flex justify-between items-center">
              <div className="hr-img flex justify-center items-center">
                <img src={hr} alt="hr1" />
                <p className='text-left ml-2'>
                  <h1 className='text-lg'>Caroline Dowd-Higgins</h1>
                  <h1 className='text-lg opacity-70'>TEDx Speaker & Executive Coach</h1>
                </p>
              </div>
              <div className="linkedin"><FaLinkedinIn /></div>
            </div>
            <div className="testimony mt-2">
              <p className='text-left text-lg'>The worker masrket has created a fierce competition for roles.
                Your resume is the first impression and an essential opportunity to distinguish yourself.
                I have reviewed thousand of resumes in my coaching practice and the InstaCV Resume Builder and templates are an outstanding resource to help you put your best professional foot forward.
                User Friendly with recruiter insight to help you shine.</p>
            </div>
          </div>
          <div className='item'>
            <div className="img-div flex justify-between items-center">
              <div className="hr-img flex justify-center items-center">
                <img src={hr} alt="hr1" />
                <p className='text-left ml-2'>
                  <h1 className='text-lg'>Caroline Dowd-Higgins</h1>
                  <h1 className='text-lg opacity-70'>TEDx Speaker & Executive Coach</h1>
                </p>
              </div>
              <div className="linkedin"><FaLinkedinIn /></div>
            </div>
            <div className="testimony mt-2">
              <p className='text-left text-lg'>The worker masrket has created a fierce competition for roles.
                Your resume is the first impression and an essential opportunity to distinguish yourself.
                I have reviewed thousand of resumes in my coaching practice and the InstaCV Resume Builder and templates are an outstanding resource to help you put your best professional foot forward.
                User Friendly with recruiter insight to help you shine.</p>
            </div>
          </div>
          <div className='item'>
            <div className="img-div flex justify-between items-center">
              <div className="hr-img flex justify-center items-center">
                <img src={hr} alt="hr1" />
                <p className='text-left ml-2'>
                  <h1 className='text-lg'>Caroline Dowd-Higgins</h1>
                  <h1 className='text-lg opacity-70'>TEDx Speaker & Executive Coach</h1>
                </p>
              </div>
              <div className="linkedin"><FaLinkedinIn /></div>
            </div>
            <div className="testimony mt-2">
              <p className='text-left text-lg'>The worker masrket has created a fierce competition for roles.
                Your resume is the first impression and an essential opportunity to distinguish yourself.
                I have reviewed thousand of resumes in my coaching practice and the InstaCV Resume Builder and templates are an outstanding resource to help you put your best professional foot forward.
                User Friendly with recruiter insight to help you shine.</p>
            </div>
          </div>
          <div className='item'>
            <div className="img-div flex justify-between items-center">
              <div className="hr-img flex justify-center items-center">
                <img src={hr} alt="hr1" />
                <p className='text-left ml-2'>
                  <h1 className='text-lg'>Caroline Dowd-Higgins</h1>
                  <h1 className='text-lg opacity-70'>TEDx Speaker & Executive Coach</h1>
                </p>
              </div>
              <div className="linkedin"><FaLinkedinIn /></div>
            </div>
            <div className="testimony mt-2">
              <p className='text-left text-lg'>The worker masrket has created a fierce competition for roles.
                Your resume is the first impression and an essential opportunity to distinguish yourself.
                I have reviewed thousand of resumes in my coaching practice and the InstaCV Resume Builder and templates are an outstanding resource to help you put your best professional foot forward.
                User Friendly with recruiter insight to help you shine.</p>
            </div>
          </div>
          <div className='item'>
            <div className="img-div flex justify-between items-center">
              <div className="hr-img flex justify-center items-center">
                <img src={hr} alt="hr1" />
                <p className='text-left ml-2'>
                  <h1 className='text-lg'>Caroline Dowd-Higgins</h1>
                  <h1 className='text-lg opacity-70'>TEDx Speaker & Executive Coach</h1>
                </p>
              </div>
              <div className="linkedin"><FaLinkedinIn /></div>
            </div>
            <div className="testimony mt-2">
              <p className='text-left text-lg'>The worker masrket has created a fierce competition for roles.
                Your resume is the first impression and an essential opportunity to distinguish yourself.
                I have reviewed thousand of resumes in my coaching practice and the InstaCV Resume Builder and templates are an outstanding resource to help you put your best professional foot forward.
                User Friendly with recruiter insight to help you shine.</p>
            </div>
          </div>
        </OwlCarousel>
      </div>
    </>
  )
}

export default HrProfessionals