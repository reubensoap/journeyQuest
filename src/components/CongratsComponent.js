import React from "react";
import { Link } from "react-router-dom";
import { levels, questLevels } from "../buildingBlocks/levels";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const Congrats = (props) => (
    <div>
        <div className="content-container">
            <div className="flex-it flex-center-align dash-wrapper">
                <div className="taskData">
                    <h3>Completed!</h3>
                    <p>{props.match.params.name}</p>
                    <p>{questLevels[parseInt(props.match.params.level)].points} pts. granted</p>
                </div>
                <div>

                </div>
                <div className="flex-it footer-tasks">
                    <div className="flex-it footer-content">
                        <Link to="/dashboard">
                            <div className="flex-it flex-center task-icon">
                                <FontAwesomeIcon icon={faArrowLeft} size="2x" />
                            </div>
                        </Link>
                        <div className="flex-it flex-center task-icon">
                            <FontAwesomeIcon icon={faPlus} size="2x"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default Congrats;