import './Portfolio.css';
import ReactSite_1 from '../images/home.png';
import ReactSite_2 from '../images/barcelona.png';
import ReactSite_3 from '../images/site-romania.png';

function Portfolio() {
    return(
        <div className="container-fluid portfolio pb-3">
            <p className="text-center text-info h2 pt-5 pb-5 text-italic fw-lighter">Portfolio</p>
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-12 portofolio-img d-flex justify-content-center">
                        <figure className="figure">
                            <a href="https://github.com/Vladfrunza">
                                <img src={ReactSite_1} class="figure-img img-fluid rounded" alt="..." />
                            </a>
                            <figcaption className="figure-caption text-center text-warning pt-4 fst-italic">Learn I.T</figcaption>
                        </figure>
                    </div>
                    <div className="col-lg-4 col-md-12 portofolio-img d-flex justify-content-center">
                        <figure className="figure">
                            <a href="https://github.com/Vladfrunza">
                                <img src={ReactSite_2} className="figure-img img-fluid rounded" alt="..." />
                            </a>
                            <figcaption className="figure-caption text-center text-warning pt-4 fst-italic">Barcelona City</figcaption>
                        </figure>
                    </div>
                    <div className="col-lg-4 col-md-12 portofolio-img d-flex justify-content-center">
                        <figure className="figure">
                            <a href="https://github.com/Vladfrunza">
                                <img src={ReactSite_3} className="figure-img img-fluid rounded" alt="..." />
                            </a>
                            <figcaption className="figure-caption text-center text-warning pt-4 fst-italic">Romanian Tourism</figcaption>
                        </figure>
                    </div>               
                </div>          
            </div>
        </div>
    );
}

export default Portfolio;
