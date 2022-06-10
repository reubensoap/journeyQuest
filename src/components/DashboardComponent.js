import React from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import TaskListComponent from './TaskListComponent';
import { levels } from '../buildingBlocks/levels';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { completeQuest } from '../actions/quests';
import Footer from './FooterComponent';
import { faCoffee, faAnglesRight, faCarrot, faChessKnight, faAward, faInfo, faPlus } from '@fortawesome/free-solid-svg-icons';

class Dashboard extends React.Component {

    constructor(props){
        super(props);


    }

    render(){
        return (
            <div className="content-container">
                <div className="dash-header">
                    <div className="dash-header__top">
                        <h2 className="dash-name">Welcome, {this.props.userDetails.firstName}</h2>
                        <p>Something about your life</p>
                    </div>
                    <div className="flex-it flex-just-space dash-header__bottom">
                        <div className="flex-it flex-center left">
                            <p>Lv. {this.props.userDetails.level}</p>
                            <p>Next {levels[this.props.userDetails.level].levelCap - this.props.userDetails.points} pts</p>
                            <p>{levels[this.props.userDetails.level].rank}</p>
                        </div>
                        <div className="right">
                            <Link to="/facts">
                                <div className="flex-it flex-center task-icon">
                                    <FontAwesomeIcon icon={faInfo} size="1x"/>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="flex-it dash-wrapper">
                    <TaskListComponent />
                    <Footer option1="settings" option2="addition" image1={faInfo} image2={faPlus}/>
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



export default connect(mapStateToProps)(Dashboard);