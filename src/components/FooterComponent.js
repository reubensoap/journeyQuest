import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Footer = (props) => (
    <div id="footer" className="flex-it footer-tasks">
        <div className="flex-it footer-content">
            <Link to={`/${props.option1}`}>
                <div className="flex-it flex-center task-icon">
                    <FontAwesomeIcon icon={props.image1} size="1x" />
                </div>
            </Link>
            <Link to={`/${props.option2}`}>
                <div className="flex-it flex-center task-icon">
                    <FontAwesomeIcon icon={props.image2} size="1x"/>
                </div>
            </Link>
        </div>
    </div>
);

export default Footer;