import './Home.css';
import Reactphoto from '../images/photo.jpg';
import {FaFacebookF, FaLinkedin, FaGithub} from 'react-icons/fa';




function Home(){
    return(
            <div className='container-fluid col-12 text-light'>
                <div className='row'>
                    <div className='home_1 p-4 col-lg-5 col-sm-12'>
                        <p className='home_title text-center text-warning pb-3 pt-4'>Junior React JS Developer and tester software</p>
                        <div className='skills pb-2'>
                            <span>Skills</span>
                            <ul>
                                <li>knowledge of React JS platform and core principle</li>
                                <li>Knowledge of Wordpress platform</li>
                                <li>Command over HTML, CSS, JavaScript, PhP languages</li>
                                <li>User interface design and development</li>
                            </ul>
                        </div>
                        <div className='eperience pb-2'>
                        <span>Experience</span>
                            <ul>
                                <li><span>Digi-texx Romania</span> - Data Entry Specialist</li>
                                <li><span>Gfk Romania</span> - Data Entry Senior </li>
                                <li><span>Concord Service Center Romania</span> - Tester Smartphone</li>
                                <li><span>Stanleybet Romania</span> - Betting operator</li>
                            </ul>
                        </div>
                        <div className='education'>
                        <span>Education</span>
                            <ul>
                                <li><span>F.E.G, Iasi</span> - Balneofiziokinetotherapy and recovery nurse</li>
                                <li><span>EnerEd IT Academy</span> - Junior web developer</li>
                            </ul>
                        </div>
                    </div>
                    <div className='home_2 col-lg-7 col-sm-12'>
                        <img src={Reactphoto} className='rounded-circle mt-5 mx-auto d-block' alt="profile" width="200" height="200" />
                        <p className='name text-center text-warning p-3 h4'>Vlad Frunza</p>
                        <p className='text-center text-secondary contact-me'>CONTACT ME AT:</p>
                        <div className='contact d-flex justify-content-center'>
                            <div>
                            <p className='text-info text-uppercase'>E-mail:</p>
                                <p>
                                    <a href="mailto:vlafrunza@yahoo.com">vlafrunza@yahoo.com</a>
                                </p>
                            </div>
                            <div className='ps-5'>
                                <p className='text-info text-uppercase'>Phone</p>
                                <p>0747550443</p>
                            </div>
                        </div>
                        <div className='d-flex justify-content-center pt-3 icon'>
                            <div className=''>
                                <a href="https://www.facebook.com/vladfrunza22/">
                                    <FaFacebookF />
                                </a>
                            </div>
                            <div className='ps-5'>
                                <a href="https://www.linkedin.com/in/vlad-frunza-476620191/">
                                    <FaLinkedin />
                                </a>
                            </div>
                            <div className='ps-5'>
                                <a href="https://github.com/Vladfrunza">
                                    <FaGithub />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

export default Home;