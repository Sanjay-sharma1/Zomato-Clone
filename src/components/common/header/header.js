import React from "react";
import "./header.css";

const Header = () => {
  return (
    <div className="max-width header">
      <img
        src="https://ops.runnr.in/assets/zomato_logo_black-72e759139bb73d92afb5f8ae0b2485b7cb023a5474859f2b6e22fdd8b83d2fc0.png"
        alt="zomato-logo"
        className="header-logo"/>

        <div className="header-right">
            <div className="header-location-search-container">
                <div className="location-wrapper">
                    <div className="location-icon-name">
                    <i class="fi fi-rr-marker absolute-center location-icon"></i>
                    <div> Pathankot </div>
                    </div>
                    <i class="fi fi-rr-caret-down absolute-center"></i>
                </div>
                <div className="location-seperator"></div>
                    <div className="header-searchbar">
                    <i class="fi fi-rr-search absolute-center search-icon"></i>
                    <input placeholder="Search for restaurant, cuisine or a dish " className="search-input" />
                </div>
            </div>
            <div className="profile-wrapper">
                <img src="https://th.bing.com/th/id/R.f29406735baf0861647a78ae9c4bf5af?rik=GKTBhov2iZge9Q&riu=http%3a%2f%2fcdn.onlinewebfonts.com%2fsvg%2fimg_206976.png&ehk=gCH45Zmryw3yqyqG%2fhd8WDQ53zwYfmC8K9OIkNHP%2fNU%3d&risl=&pid=ImgRaw&r=0" 
                alt="profile" 
                className = "header-profile-imege"/>
                {/* <i className="fi fi-rr-user header-profile-image"></i> */}
                <span className="header-username"> Sanjay </span>
                <i class="fi fi-rr-angle-small-down absolute-center profile-options-icon"></i>
            </div>
        </div>
    </div>
  );
};

export default Header;
