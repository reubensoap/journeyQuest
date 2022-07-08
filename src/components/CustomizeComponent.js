import React from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { completeQuest, addPoints, levelUp } from '../actions/quests';
import { levels, questLevels } from '../buildingBlocks/levels';
import { history } from '../routers/AppRouter';
import Footer from './FooterComponent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPlus, faArrowLeft} from '@fortawesome/free-solid-svg-icons';

class Customize extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            plateNum: 6,
            menuNum: 6
        }

    }


    renderLook = () => {
        return(
            <div className="lookup">
                <div className={`top ${
                    (this.state.plateNum === 1 ? 'background-level-1' : '') ||
                    (this.state.plateNum === 2 ? 'background-level-2' : '') ||
                    (this.state.plateNum === 3 ? 'background-level-3' : '') ||
                    (this.state.plateNum === 4 ? 'background-level-4' : '') ||
                    (this.state.plateNum === 5 ? 'background-level-5' : '') ||
                    (this.state.plateNum === 6 ? 'background-level-6' : '')
                }`}>

                </div>
                <div className={`bottom ${
                    (this.state.menuNum === 1 ? 'base-color-1' : '') ||
                    (this.state.menuNum === 2 ? 'base-color-2' : '') ||
                    (this.state.menuNum === 3 ? 'base-color-3' : '') ||
                    (this.state.menuNum === 4 ? 'base-color-4' : '') ||
                    (this.state.menuNum === 5 ? 'base-color-5' : '') ||
                    (this.state.menuNum === 6 ? 'base-color-6' : '')
                }`}>

                </div>
            </div>
        )
    }



    renderActionSection = () => {

        return(
            <div className="additionSection">
                <div className="additionTop color-light">
                    <h3>Plates</h3>
                </div>
                <div className="additionBottom">
                    
                </div>
                <div className="additionTop color-light">
                    <h3>Menu Colors</h3>
                </div>
                <div className="additionBottom">
                    
                </div>
            </div>
        );
        
    }

    changeMenu = () =>  {

    }

    changePlate = () => {

    }


    componentDidMount() {
        const menuColor = localStorage.getItem("menuColor");

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


    render() {
        return (
            <div className="content-container">
                <div id="dash-wrapper-1" className="flex-it flex-center-align dash-wrapper">
                    <div className="taskData color-light">
                        <h3>Customize</h3>
                        <p>What fits you?</p>
                    </div>
                    {this.renderLook()}
                    {this.renderActionSection()}
                    <Footer option1="dashboard" option2="addition" image1={faArrowLeft} image2={faPlus}/>
                    
                </div>
            </div>
        );
    };
};

const mapDispatchToProps = (dispatch) => ({
    completeQuest: (id) => dispatch(completeQuest(id)),
    addPoints: (data, data2) => dispatch(addPoints(data, data2)),
    levelUp: (data) => dispatch(levelUp(data))
});

const mapStateToProps = (state, props) => {
    return {
        userDetails: state.userDetails
    };
};


export default connect(mapStateToProps,mapDispatchToProps)(Customize);