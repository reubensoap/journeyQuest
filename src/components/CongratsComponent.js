import React from "react";
import { Link } from "react-router-dom";
import {connect} from 'react-redux';
import { levels, questLevels } from "../buildingBlocks/levels";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

class Congrats extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            m: this.props.match.params.pastPoints
        }
    }


    move = () => {

        var currentWhole = 0;

        if(this.props.userDetails.level === 0){
            currentWhole = 1000;

            var currentPercentage = (parseInt(this.props.userDetails.pastPoints) / currentWhole)*100;

            var increasePercentage = ((parseInt(this.props.userDetails.pastPoints) + questLevels[this.props.match.params.level].points) / currentWhole)*100;

        } else {
            currentWhole = levels[this.props.userDetails.level].levelCap - levels[this.props.userDetails.level - 1].levelCap;

            var currentPercentage = (parseInt(this.props.userDetails.pastPoints - levels[this.props.userDetails.level - 1].levelCap) / currentWhole)*100;

            var increasePercentage = ((parseInt(this.props.userDetails.pastPoints - levels[this.props.userDetails.level - 1].levelCap) + questLevels[this.props.match.params.level].points) / currentWhole)*100;
        }

        console.log("first", currentPercentage);
        console.log("second", increasePercentage);

        var i = 1;
              var elem = document.getElementById("myBar");
              elem.style.background = 'white';
              var width = currentPercentage; // change this to get the beginning line
              var id = setInterval(frame, 10);
              function frame() {
                if (width >= increasePercentage) {  //change this line to get the final percentage
                  clearInterval(id);
                  i = 0;
                } else {
                  width++;
                  elem.style.width = width + "%";
                }
              }
    }

    componentDidMount(){
        this.move();



        const menuColor = localStorage.getItem("menuColor");

        if(menuColor === 'undefined' || menuColor === "1"){
            document.getElementById("dash-wrapper-1").classList.add('base-color-1');
            document.getElementById("footer").classList.add('accent-color-1');
            document.getElementById("animation_content_cover").classList.add('base-color-1');
            document.getElementById("progress-bar__outer-tube").classList.add('accent-color-1');

            document.getElementById("blocker").classList.add('accent-color-1-brighter');
            document.getElementById("blocker2").classList.add('accent-color-1-brighter');
            document.getElementById("blocker3").classList.add('accent-color-1-brightest');
            document.getElementById("blocker4").classList.add('accent-color-1-brightest');

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
            document.getElementById("animation_content_cover").classList.add('base-color-2');
            document.getElementById("progress-bar__outer-tube").classList.add('accent-color-2');

            document.getElementById("blocker").classList.add('accent-color-2-brighter');
            document.getElementById("blocker2").classList.add('accent-color-2-brighter');
            document.getElementById("blocker3").classList.add('accent-color-2-brightest');
            document.getElementById("blocker4").classList.add('accent-color-2-brightest');

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
            document.getElementById("animation_content_cover").classList.add('base-color-3');
            document.getElementById("progress-bar__outer-tube").classList.add('accent-color-3');

            document.getElementById("blocker").classList.add('accent-color-3-brighter');
            document.getElementById("blocker2").classList.add('accent-color-3-brighter');
            document.getElementById("blocker3").classList.add('accent-color-3-brightest');
            document.getElementById("blocker4").classList.add('accent-color-3-brightest');

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
            document.getElementById("animation_content_cover").classList.add('base-color-4');
            document.getElementById("progress-bar__outer-tube").classList.add('accent-color-4');

            document.getElementById("blocker").classList.add('accent-color-4-brighter');
            document.getElementById("blocker2").classList.add('accent-color-4-brighter');
            document.getElementById("blocker3").classList.add('accent-color-4-brightest');
            document.getElementById("blocker4").classList.add('accent-color-4-brightest');

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
            document.getElementById("animation_content_cover").classList.add('base-color-5');
            document.getElementById("progress-bar__outer-tube").classList.add('accent-color-5');

            document.getElementById("blocker").classList.add('accent-color-5-brighter');
            document.getElementById("blocker2").classList.add('accent-color-5-brighter');
            document.getElementById("blocker3").classList.add('accent-color-5-brightest');
            document.getElementById("blocker4").classList.add('accent-color-5-brightest');

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
            document.getElementById("animation_content_cover").classList.add('base-color-6');
            document.getElementById("progress-bar__outer-tube").classList.add('accent-color-6');

            document.getElementById("blocker").classList.add('accent-color-6-brighter');
            document.getElementById("blocker2").classList.add('accent-color-6-brighter');
            document.getElementById("blocker3").classList.add('accent-color-6-brightest');
            document.getElementById("blocker4").classList.add('accent-color-6-brightest');

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

        const custStyle =  {
            width: 0,
            height: '30px',
        }


        return(

            <div>
                <div className="content-container">
                    <div id="dash-wrapper-1" className="flex-it flex-center-align dash-wrapper">
                        <div className="taskData color-light">
                            <div className="animation-wrapper">
                                <div id="blocker"></div>
                                <div id="blocker2"></div>
                                <div id="blocker3"></div>
                                <div id="blocker4"></div>
                                <div id="animation_content_cover">
                                    <h3>Completed!</h3>
                                </div>
                            </div>
                            <p>{this.props.match.params.name}</p>
                            <div className="points-wrapper">
                                <p>{questLevels[parseInt(this.props.match.params.level)].points} pts. granted</p>
                            </div>
                        </div>
                        <div className="actionSection">
                            <div className="progress-bar__wrapper">
                                <div id="progress-bar__outer-tube">
                                    <div id="myBar" style={custStyle}></div>
                                </div>
                                <Link to="/dashboard">
                                    <button className="button button__primary">Finished</button>
                                </Link>
                            </div>
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

export default connect(mapStateToProps)(Congrats);