import React from "react";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Button } from "@mui/material";

import "./Footer.scss";


const Footer: React.FC = () => {
    const handleLink = () => {
        alert("mobile/telegram/viber: +375292430550")
    }
    const handleInfo = () => {
        alert("Sidarovich Siarhei from Belarus")
    }
    return (
        <div className="main-footer">
            <div className="container">
                <div className="row">
                    {/* Colomn 1 */}
                    <div className="col-md-3 col-sm-6">
                        <h4>Contact information</h4>
                        <ul className="list-contact">
                            <li>
                                <Button
                                    size="small"
                                    variant="text"
                                    color="inherit"
                                    onClick={handleLink} >
                                    Contacts
                                </Button>
                            </li>
                            <li>
                                <Button
                                    size="small"
                                    variant="text"
                                    color="inherit"
                                    onClick={handleInfo} >
                                    About me
                                </Button>
                            </li>
                        </ul>
                    </div>
                    {/* Colomn 2 */}
                    <div className="column">
                        <h4 className="footer-title">Social networks</h4>
                        <ul className="list-social">
                            <li>
                                <a href="https://www.facebook.com/" target="_blank">
                                    <FacebookIcon className='icon-button' />
                                </a>
                            </li>
                            <li>
                                <a href="https://github.com/Serhio348/" target="_blank">
                                    <GitHubIcon className='icon-button' />
                                </a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/" target="_blank">
                                    <LinkedInIcon className='icon-button' />
                                </a>
                            </li>
                            <li>
                                <a href="https://twitter.com/" target="_blank">
                                    <TwitterIcon className='icon-button' />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                {/* Footer Bottom */}
                <div className="footer-bottom">
                    <p className="text-xs-center">
                        &copy; {new Date().getFullYear()}  Serhio Sidorovich
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Footer;