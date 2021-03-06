import React from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import TaskList from './TaskListComponent';
import { levels } from '../buildingBlocks/levels';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { completeQuest } from '../actions/quests';
import Footer from './FooterComponent';
import { headerStatements } from '../buildingBlocks/statements';
import { faCoffee, faAnglesRight, faCarrot, faChessKnight, faAward, faInfo, faPlus } from '@fortawesome/free-solid-svg-icons';

class Dashboard extends React.Component {

    constructor(props){
        super(props);


    }

    setTheme = (theme) => {
        document.documentElement.className = theme;

        console.log(document.documentElement.className);

        if(document.documentElement.className === 'watermelon'){
            localStorage.setItem("menuColor", 1);
        } else if(document.documentElement.className === 'violet-blue'){
            localStorage.setItem("menuColor", 2);
        } else if(document.documentElement.className === 'old-car-yellow'){
            localStorage.setItem("menuColor", 3);
        } else if(document.documentElement.className === 'rain'){
            localStorage.setItem("menuColor", 4);
        } else if(document.documentElement.className === 'grass'){
            localStorage.setItem("menuColor", 5);
        } else if(document.documentElement.className === 'gun-metal'){
            localStorage.setItem("menuColor", 6);
        }
    }

    componentDidMount() {
        const menuColor = localStorage.getItem("menuColor");
        const userPlate = localStorage.getItem("plate");

        if(userPlate === 'undefined' || userPlate === "1"){
            document.getElementById("plate-insert").classList.add('background-level-1');
        } else if(userPlate === "2"){
            document.getElementById("plate-insert").classList.add('background-level-2');
        } else if(userPlate === "3"){
            document.getElementById("plate-insert").classList.add('background-level-3');
        } else if(userPlate === "4"){
            document.getElementById("plate-insert").classList.add('background-level-4');
        } else if(userPlate === "5"){
            document.getElementById("plate-insert").classList.add('background-level-5');
        } else if(userPlate === "6"){
            document.getElementById("plate-insert").classList.add('background-level-6');
        }

        if(menuColor === 'undefined' || menuColor === "1"){
            document.getElementById("dash-wrapper-1").classList.add('base-color-1');
            document.getElementById("footer").classList.add('accent-color-1');

            const custer = document.querySelectorAll('.task');
            for (var i = 0; i < custer.length; i++){
                custer[i].classList.add('accent-color-1');
            }

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

            const custer = document.querySelectorAll('.task');
            for (var i = 0; i < custer.length; i++){
                custer[i].classList.add('accent-color-2');
            }

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

            const custer = document.querySelectorAll('.task');
            for (var i = 0; i < custer.length; i++){
                custer[i].classList.add('accent-color-3');
            }

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

            const custer = document.querySelectorAll('.task');
            for (var i = 0; i < custer.length; i++){
                custer[i].classList.add('accent-color-4');
            }

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

            const custer = document.querySelectorAll('.task');
            for (var i = 0; i < custer.length; i++){
                custer[i].classList.add('accent-color-5');
            }

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

            const custer = document.querySelectorAll('.task');
            for (var i = 0; i < custer.length; i++){
                custer[i].classList.add('accent-color-6');
            }

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

    renderPlateOpions = () => {
        
    }

    render(){


        return (
            <div className="content-container">
                <div id="plate-insert" className="dash-header">
                    <div className="dash-header__top">
                        <h2 className="dash-name">Welcome, {this.props.userDetails.firstName}</h2>
                        <p>{headerStatements[Math.floor(Math.random() * 20)+1].statement}</p>
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
                <div id="dash-wrapper-1" className="flex-it dash-wrapper dash-color-1">
                    <TaskList />
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