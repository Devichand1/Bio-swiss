import React from 'react';
import './Features.css'

const Features = () => {
    return (
        <>
            <div className="features">
                <h2>Our Features</h2>
                <div className="feature_item">
                    <div>
                        <img src="https://www.swiss-newater.com/Services_Photo/5e8199ab04387Four%20products_HydroClean.jpg" alt="Advantages" />
                        <span>ADVANTAGES</span>
                    </div>
                    <div>
                        <img src="https://www.swiss-newater.com/Services_Photo/5e412842c48601.jpg" alt="Credential" />
                        <span>CREDENTIAL</span>
                    </div>
                    <div>
                        <img src="https://www.swiss-newater.com/Services_Photo/5e8199886a538Features.png" alt="Features" />
                        <span>FEATURES</span>
                    </div>
                    
                    <div>
                        <img src="https://www.swiss-newater.com/Services_Photo/5e3e8ba3e5a0fFour%20recipes.jpg" alt="Applications" />
                        <span>APPLICATIONS</span>
                    </div>
                    <div>
                        <img src="https://www.swiss-newater.com/Services_Photo/5e86fed83949dswiss-freze.jpg" alt="Advantages" />
                        <span>THE SCIENCE BEHIND THE PRODUCT</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Features;
