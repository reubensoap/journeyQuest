import React from 'react';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faAnglesRight, faCarrot, faChessKnight, faAward, faInfo, faPlus } from '@fortawesome/free-solid-svg-icons';

class Information extends React.Component {
    render() {
        return (
            <div className="content-container">
                <div className="flex-it dash-wrapper">
                    <div className="task-wrapper ">
                        <div className="task color-light">
                            <h3>Create New</h3>
                        </div>
                        <div className="task color-light">
                            <h3>Random</h3>
                        </div>
                    </div>
                    <div className="flex-it footer-tasks">
                        <div className="footer-content">
                            <div className="flex-it flex-center task-icon">
                                <FontAwesomeIcon icon={faPlus} size="2x"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
};

export default Information;