import './Quote.css';

function Quote(){
    return(
        <div className='container-fluid quote d-flex flex-column justify-content-center pe-5'>
            <p className="text-center text-primary h3 pe-5 fw-bolder">Web design.</p>
            <p className="text-center text-white fst-italic ps-5 fs-6">It’s not just looking good, it is good.</p>
        </div>
    )
}

export default Quote;