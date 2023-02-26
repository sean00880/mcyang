import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import Link from 'next/link';

const MainBanner = () => {
  const [toggler, setToggler] = useState(false);
  return (
		<>  
      <FsLightbox
        toggler={toggler}
        sources={["https://www.youtube.com/embed/bk7McNUjWgw"]}
      />

      <div 
        className="main-banner" 
      >
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container">
              <div className="logo_wrapper">
              <div className="logoImage"/>
              <div className="logoText"/>
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <div className="main-banner-content">
                    

                    
                                     
                  </div>
                </div>

              

                <div className="col-lg-6">
                  <div className="banner-animation-image">


                    {/* Main Image */}
                  </div>
                </div>
              </div>
              <div className="buttons">
                <div className="button_wrapper">
                    <span className="span">Discover Us On Discord:</span> <hr />
              <Link href="/blog">
                      
                      <button class="button" id="lineExpand"><span class="button--icon"><img src="/images/discord_logo2.png" alt=""/></span><span class="button--text">Discord</span></button>
  
                      </Link>
              </div>
                <div className="button_wrapper">
                <span className="span">Shop Now:</span> <hr />
                      <Link href="/contact">
                      <button class="button" id="bubbleBorder"><span class="button2--icon"><img src="/images/store_logo.png" alt=""/></span><span class="button--text">Store</span></button>
                     
                      </Link>
                      </div>
                      
                    

                    

            </div>
            </div>
            
          </div>
          
        </div>
        
      </div>
      
		</>
  );
}

export default MainBanner;