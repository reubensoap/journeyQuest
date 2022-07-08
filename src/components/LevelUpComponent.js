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

    componentDidMount() {
        const menuColor = localStorage.getItem("menuColor");

        if(menuColor === 'undefined' || menuColor === "1"){
            document.getElementById("dash-wrapper-1").classList.add('base-color-1');
            document.getElementById("footer").classList.add('accent-color-1');

            const taskIcons = document.querySelectorAll('.task-icon');
            for (var i = 0; i < taskIcons.length; i++){
                taskIcons[i].classList.add('accent-color-1-brightest');
            }

            const buttons = document.querySelectorAll('.button');
            for (var i = 0; i < buttons.length; i++){
                buttons[i].classList.add('button-color-1');
            }

         } else if (menuColor === "2"){
            document.getElementById("dash-wrapper-1").classList.add('base-color-2');
            document.getElementById("footer").classList.add('accent-color-2');

            const taskIcons = document.querySelectorAll('.task-icon')
            for (var i = 0; i < taskIcons.length; i++){
                taskIcons[i].classList.add('accent-color-2-brightest');
            }

            const buttons = document.querySelectorAll('.button')
            for (var i = 0; i < buttons.length; i++){
                buttons[i].classList.add('button-color-2');
            }

         } else if (menuColor === "3"){
            document.getElementById("dash-wrapper-1").classList.add('base-color-3');
            document.getElementById("footer").classList.add('accent-color-3');

            const taskIcons = document.querySelectorAll('.task-icon')
            for (var i = 0; i < taskIcons.length; i++){
                taskIcons[i].classList.add('accent-color-3-brightest');
            }

            const buttons = document.querySelectorAll('.button')
            for (var i = 0; i < buttons.length; i++){
                buttons[i].classList.add('button-color-3');
            }

         } else if (menuColor === "4"){
            document.getElementById("dash-wrapper-1").classList.add('base-color-4');
            document.getElementById("footer").classList.add('accent-color-4');

            const taskIcons = document.querySelectorAll('.task-icon')
            for (var i = 0; i < taskIcons.length; i++){
                taskIcons[i].classList.add('accent-color-4-brightest');
            }

            const buttons = document.querySelectorAll('.button')
            for (var i = 0; i < buttons.length; i++){
                buttons[i].classList.add('button-color-4');
            }

         } else if (menuColor === "5"){
            document.getElementById("dash-wrapper-1").classList.add('base-color-5');
            document.getElementById("footer").classList.add('accent-color-5');

            const taskIcons = document.querySelectorAll('.task-icon')
            for (var i = 0; i < taskIcons.length; i++){
                taskIcons[i].classList.add('accent-color-5-brightest');
            }

            const buttons = document.querySelectorAll('.button')
            for (var i = 0; i < buttons.length; i++){
                buttons[i].classList.add('button-color-5');
            }

         } else if (menuColor === "6"){
            document.getElementById("dash-wrapper-1").classList.add('base-color-6');
            document.getElementById("footer").classList.add('accent-color-6');

            const taskIcons = document.querySelectorAll('.task-icon')
            for (var i = 0; i < taskIcons.length; i++){
                taskIcons[i].classList.add('accent-color-6-brightest');
            }

            const buttons = document.querySelectorAll('.button')
            for (var i = 0; i < buttons.length; i++){
                buttons[i].classList.add('button-color-6');
            }

         }
    }



    render(){

        return(

            <div>
                <div className="content-container">
                    <div id="dash-wrapper-1" className="flex-it flex-center-align dash-wrapper">
                        <div className="taskData__Level color-light">
                            <h2>Level Up</h2>
                            <div className="levelUpWrapper">
                                <h2 className="first">{levels[this.props.userDetails.level - 1].rank}</h2>
                                <h2 className="second">{levels[this.props.userDetails.level].rank}</h2>
                            </div>
                        </div>
                        <div className="actionSection">
                            <div id="plateWrapper" className="newStuff__wrapper">
                                <h3 className="color-light">Plates</h3>
                                <div className="newStuff__plate__wrapper">
                                    <div className="newPlate">
                                        
                                    </div>
                                </div>
                                <h3 className="color-light">Menu Color</h3>
                                <div className="newStuff__color__wrapper">
                                    <div className="newColor">
                                        
                                    </div>
                                </div>
                            </div>
                            <Link to={`/congrats/${this.props.match.params.name}/${this.props.match.params.level}`}>
                                <button className="button button__primary">Continue</button>
                            </Link>
                        </div>
                        <div id="footer" className="flex-it footer-tasks">
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