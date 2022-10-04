import React from "react";
import img from '../../../../Assets/img/cool-background.png';
import './style.css';
import {Youtube, UserCheck, User, Server, Film , PhoneCall} from 'react-feather'
import { useNavigate } from "react-router-dom";

function Topbar () {
    const history = useNavigate();
    return(
        <div
        data-aos="fade-left" 
         className="top-bar"
          style={{backgroundImage:`url(${img})`}}>
            
            <div className="top-bar-menus">
                <div className="tob-bar--sidemenus">
                    <ul>
                        <li onClick={()=>{history('/Demoweb')}}>Home</li>
                        <li onClick={()=>{history('/Demoweb/aboutus')}}>About Us</li>
                        <li onClick={()=>{history('/Demoweb/Policy')}}>Policy</li>
                        <li onClick={()=>{history('/Demoweb/Contact')}}>Contact Us</li>
                    </ul> 
                </div>
                <div className="top-bar--srvicemenu">
                    <div className="top-bar-servicemenuconiner">
                        <div className="top-bar--servicelist">
                            <Youtube size={50}/>
                            <h3 className="service-menu-title mt-15">Video Analytics</h3>
                        </div>
                        <div className="top-bar--servicelist">
                            <UserCheck size={50}/>
                            <h3 className="service-menu-title mt-15">User Testing</h3>
                        </div>
                        <div className="top-bar--servicelist">
                            <User size={50}/>
                            <h3 className="service-menu-title mt-15">Recruitment & Staffing</h3>
                        </div>
                        <div className="top-bar--servicelist">
                            <Server size={50}/>
                            <h3 className="service-menu-title mt-15">Development Solutions</h3>
                        </div>
                        <div className="top-bar--servicelist">
                            <Film size={50}/>
                            <h3 className="service-menu-title mt-15">AV Services</h3>
                        </div>
                        <div className="top-bar--servicelist">
                            <PhoneCall size={50}/>
                            <h3 className="service-menu-title mt-15">Contact Centre Solutions</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Topbar;