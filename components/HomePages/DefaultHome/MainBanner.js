import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import Link from 'next/link';
import Flip from 'react-reveal/Flip';
import Bounce from 'react-reveal/Bounce';
import Zoom from 'react-reveal/Zoom';
import LightSpeed from 'react-reveal/LightSpeed';
import Roll from 'react-reveal/Roll';

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
                <Roll top>
              <div className="logoImage">
                <Flip left delay={1000}>
                <div className="wing1" ></div>
                </Flip>
                <Flip right delay={1000}>  
                <div className="wing2" ></div>
                </Flip>
                <Zoom delay={500}>
                <div className="y"></div>
                </Zoom>
              </div>
              </Roll>
              <LightSpeed delay={1500}>
              <div className="logoText"/>
              </LightSpeed>
              </div>
             
              
              <div className="buttons">
              <LightSpeed left>
                <div className="button_wrapper">
                    <span className="span">Discover Us On Discord:</span> <hr />
              <Link href="https://discord.gg/vr5up7mW">
                      
                      <button class="button" id="lineExpand"><span class="button--icon"><img src="/images/discord_logo2.png" alt=""/></span><span class="button--text">Discord</span></button>
  
                      </Link>
              </div>
              </LightSpeed>
              <LightSpeed right>
                <div className="button_wrapper">
                <span className="span">Shop Now:</span> <hr />
                      <Link href="https://store.yangmc.net/">
                      <button class="button" id="bubbleBorder"><span class="button2--icon"><img src="/images/store_logo.png" alt=""/></span><span class="button--text">Store</span></button>
                     
                      </Link>
                      </div>
                      </LightSpeed>
                      
                    

                    

            </div>
            </div>
            
          </div>
          
        </div>
        
      </div>
      
		</>
  );
}

export default MainBanner;