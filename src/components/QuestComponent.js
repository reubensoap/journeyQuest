import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faAnglesRight, faCarrot, faChessKnight, faAward, faInfo, faPlus } from '@fortawesome/free-solid-svg-icons';

export const QuestItem = ({id, questDesc, questName, questlevel, category}) => (
        <Link to={`/task/${id}`}>
            <div className="task">
                <div className=" flex-it flex-center-align content-section">
                    <div className="flex-it flex-center task-icon">
                        <FontAwesomeIcon icon={faCarrot} size="2x"/>
                    </div>
                    <div className="flex-it flex-center-align flex-just-space color-light task-tube">
                        <p>{questName}</p>
                        <div className="flex-it flex-center-align flex-just-space task-tube__right">
                            <p>100 pts</p>
                            <FontAwesomeIcon icon={faAnglesRight} size="2x"/>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
);

export default connect()(QuestItem);