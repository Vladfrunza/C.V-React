import './Footer.css';
import {FaFacebookF, FaLinkedin, FaGithub} from 'react-icons/fa';

function Footer(){
    return (
        <div className='container-fluid ps-4 pb-3 footer'>
            <div className='row'>
            <p className='text-secondary pt-3'>CONTACT ME AT:</p>
                <div className='contact col-lg-4'>
                    <div>
                        <p className='text-warning text-uppercase'>E-mail:</p>
                            <p>
                                <a href="mailto:vlafrunza@yahoo.com">vlafrunza@yahoo.com</a>
                            </p>
                    </div>
                        <div className=''>
                            <p className='text-warning text-uppercase'>Phone</p>
                            <p className='text-white'>0747550443</p>
                        </div>
                </div>
                <div className='col-lg-8'>
                <div className='d-flex justify-content-center pt-3 icon'>
                            <div className='ps-5'>
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

export default Footer;