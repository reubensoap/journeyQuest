import React from "react";
import { Link } from "react-router-dom";
import {connect} from 'react-redux';
import { levels, questLevels } from "../buildingBlocks/levels";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

class LevelUp extends React.Component {

    constructor(props){
        super(props);

    }


    render(){

        return(

            <div>
                <div className="content-container">
                    <div className="flex-it flex-center-align dash-wrapper">
                        <div className="taskData color-light">
                            <h3>+ Level Up</h3>
                            <p>{levels[this.props.userDetails.level - 1].rank}</p>
                            <p>V V V</p>
                            <p>{levels[this.props.userDetails.level].rank}</p>
                        </div>
                        <div className="actionSection">
                            <Link to={`/congrats/${this.props.match.params.name}/${this.props.match.params.level}`}>
                                <button className="button__primary">Continue</button>
                            </Link>
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
    };
};

const mapStateToProps = (state, props) => {
    return {
        userDetails: state.userDetails
    };
};

export default connect(mapStateToProps)(LevelUp);