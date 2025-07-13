function LeftSection({ imageUrl, productName, productDescription, tryDemo, learnMore, googlePlay, appStore }) {
    return (
        <div className="container pt-5 mt-5">
            <div className="row mt-5 ">
                <div className="col-6">
                    <img src={imageUrl}  />
                </div>
                
                <div className="col-6 p-5 ">
                    <h1>{productName}</h1>
                    <p>{productDescription}</p>
                    <div >
                        <a href={tryDemo} style={{textDecoration:"none"}}>Try Demo <i className="fa-solid fa-arrow-right"></i></a>
                    <a href={learnMore} style={{marginLeft:"50px",textDecoration:"none"}}>Learn More <i className="fa-solid fa-arrow-right"></i></a>
                    
                    </div>
                    <div className="mt-3">
                    <a href={googlePlay}><img src="media/images/googlePlayBadge.svg" alt="" /></a>
                    <a href={appStore} style={{marginLeft:"50px"}}><img src="media/images/appstoreBadge.svg" alt="" /></a>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}

export default LeftSection;
