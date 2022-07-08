import React from "react";
import Footer from "./FooterComponent";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import uuid from 'react-uuid';
import { connect } from "react-redux";
import { randomQ } from "../buildingBlocks/randomQuests";
import { questLevels } from "../buildingBlocks/levels";
import { addQuest } from "../actions/quests";
import { history } from '../routers/AppRouter';
import { faCoffee, faAnglesRight, faCarrot, faChessKnight, faAward, faArrowLeft, faPlus } from '@fortawesome/free-solid-svg-icons';


class RandomQuest extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            step: 0,
            category: "",
            questName: "",
            questDesc: "",
            questLevel: 0
        }
    }

    renderRandomQuest = () => {
        const newQuest = randomQ[Math.floor(Math.random() * 60)+1];
        this.setState((prevState) => ({
            step: 1,
            category: newQuest.category,
            questName: newQuest.questName,
            questDesc: newQuest.questDesc,
            questLevel: newQuest.questLevel
        }));
    }

    stepBack = (e) => {
        this.setState(() => ({step: e}));
    }

    submitQuest = () => {
        this.props.addQuest({
            id: uuid(),
            questName: this.state.questName,
            questDesc: this.state.questDesc,
            questLevel: this.state.questLevel,
            category: this.state.category
        });
        this.props.history.push(`/dashboard`);
        
    }

    renderActionSection = () => {
        return(
            <div className="additionWrapper">
                <div className={`actionSection color-light ${this.state.step === 0 ? '' : 'no-show'}`}>
                    <button onClick={() => this.renderRandomQuest() } className="button button__primary"><p className="color-light">Start</p></button>
                </div>
                <div className={`actionSection color-light ${this.state.step === 1 ? '' : 'no-show'}`}>
                    <div className="additionTop">
                        <h3>{this.state.questName}</h3>
                        <p>{this.state.questDesc}</p>
                    </div>
                    <div className="additionBottom">
                        <p>Experience level: {questLevels[this.state.questLevel].name}  + {questLevels[this.state.questLevel].points} points</p>
                        <p>Category: {this.state.category}</p>
                        <div className="button__submit__wrapper">
                            <button className="button button__submit" onClick={() => {this.submitQuest()}}><p>Confirm</p></button>
                        </div>
                    </div>
                    <div className="flex-it footer-content">
                        <button className="button button__primary" onClick={() => {this.renderRandomQuest()}}>
                            <p>Keep Choosing</p>
                        </button>
                    </div>
                </div>
            </div>
        )
                
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

    stepChange = (e) => {
        this.setState(() => ({step: e}));
    }

    render(){
        return(
            <div className="content-container">
                <div id="dash-wrapper-1" className="flex-it flex-center-align dash-wrapper">
                    <div className="taskData color-light">
                        <h3>Start a new Journey</h3>
                        <p>Is this something you like?</p>
                    </div>
                    {this.renderActionSection()}
                    <Footer option1="dashboard" option2="addition" image1={faArrowLeft} image2={faPlus}/>
                    
                </div>
            </div>
        )
    }

}

const mapDispatchToProps = (dispatch) => ({
    addQuest: (quest) => dispatch(addQuest(quest))
});

export default connect(undefined, mapDispatchToProps)(RandomQuest);