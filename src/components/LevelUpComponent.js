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
                        <div className="taskData__Level color-light">
                            <h2>Level Up</h2>
                            <div className="levelUpWrapper">
                                <h2 className="first">{levels[this.props.userDetails.level - 1].rank}</h2>
                                <h2 className="second">{levels[this.props.userDetails.level].rank}</h2>
                            </div>
                        </div>
                        <div className="actionSection">
                            <div className="newStuff__wrapper">
                                <h3>Plates</h3>
                                <div className="newStuff__plate__wrapper">
                                    <div className="newPlate">
                                        
                                    </div>
                                </div>
                                <h3>Menu Color</h3>
                                <div className="newStuff__color__wrapper">
                                    <div className="newColor">
                                        
                                    </div>
                                </div>
                            </div>
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