import { Link } from 'react-router-dom'
import advisor from '../../assets/advisor.jpg'
import { IoIosArrowForward } from "react-icons/io";
import bullseye from '../../assets/bullseye .png'
import '../../CSS/Styles.css'

const Resources = () => {
  return (
    <>
      <div className='flex items-center justify-center mt-20'>
        <div className="booster">
          <h1 className='text-4xl font-bold mb-6'>Boost Your Career with our Free Resources</h1>
          <p className='careerGridDescription'>Need help with your resume or cover letter? Visit our career blog with over 1,400 insightful articles. Our expert advice is based on first-hand experience, in-depth job market research, and HR expertise.</p>
          <p className='careerGridDescription'>Each day, we analyze hiring trends, browse through workforce reports, and monitor job market forecasts to make sure you get all the information you need to land your dream job.</p>
          <p className='careerGridDescription'>Our work has been <Link className='text-blue-500'>featured by reputable media outlets and top universities</Link>from around the globe. Here are some of our most valuable resources:</p>
          <div className='flex gap-10 items-center justify-center '>
            <Link className='careerBtn1'>Resume Resources</Link>
            <Link className='careerBtn2'>Cover Letter Resources</Link>
            <Link className='careerBtn3'>Career Advice</Link>
          </div>
          <div className="careerGuide">
            <div className="careeradvice">
              <div className="careertitle text-left ">
                <h1 className='text-xl font-semibold title'>How to make Resume in 2024:Examples & Writing Guide</h1>
                <div className='flex  mt-3 gap-3'>
                  <img src={advisor} alt="advisor1" />
                  <p className='opacity-75'>Maciej Tomaszewicz,CPRW</p>
                  <p className='opacity-75'>October 13,2024</p>
                </div>
              </div>
              <div className="arrowSvg">
                <IoIosArrowForward size={30} />
              </div>
            </div>
            <hr />
            <div className="careeradvice">
              <div className="careertitle text-left ">
                <h1 className='text-xl font-semibold title'>3 Best Resume Formats for 2024: Examples & Templates</h1>
                <div className='flex  mt-3 gap-3'>
                  <img src={advisor} alt="advisor1" />
                  <p className='opacity-75'>Maciej Tomaszewicz,CPRW</p>
                  <p className='opacity-75'>October 13,2024</p>
                </div>
              </div>
              <div className="arrowSvg">
                <IoIosArrowForward size={30} />
              </div>
            </div>
            <hr />
            <div className="careeradvice">
              <div className="careertitle text-left ">
                <h1 className='text-xl font-semibold title'>50+ Best Resume Summary Examples & How-To Guide</h1>
                <div className='flex  mt-3 gap-3'>
                  <img src={advisor} alt="advisor1" />
                  <p className='opacity-75'>Maciej Tomaszewicz,CPRW</p>
                  <p className='opacity-75'>October 13,2024</p>
                </div>
              </div>
              <div className="arrowSvg">
                <IoIosArrowForward size={30} />
              </div>
            </div>
            <hr />
            <div className="careeradvice">
              <div className="careertitle text-left ">
                <h1 className='text-xl font-semibold title'>How to Make a Resume With No Experience: Best Examples</h1>
                <div className='flex  mt-3 gap-3'>
                  <img src={advisor} alt="advisor1" />
                  <p className='opacity-75'>Maciej Tomaszewicz,CPRW</p>
                  <p className='opacity-75'>October 13,2024</p>
                </div>
              </div>
              <div className="arrowSvg">
                <IoIosArrowForward size={30} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="careerDevGuide flex justify-between items-center ">
        <div className="careerDevTitle flex gap-8 justify-center  items-center">
          <img src={bullseye} alt="" height={40} width={40} />
          <div className='text-left'>
            <h1 className='text-xl font-bold devGuide'>
              Check out our career development guides
            </h1>
            <p className='careergrid'>
              Learn everything you need to take your career to the next level!
            </p>
          </div>
        </div>
        <Link className='readmore  text-white'>Read more about Resumes</Link>
      </div>
    </>
  )
}

export default Resources