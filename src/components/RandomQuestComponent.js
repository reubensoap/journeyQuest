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
        const newQuest = randomQ[Math.floor(Math.random() * 50)+1];
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
        if(this.state.step === 0){
            return(
                <div className="actionSection color-light">
                    <button onClick={() => this.renderRandomQuest() } className="button__primary"><p className="color-light">Start</p></button>
                </div>
            )
        } else if(this.state.step === 1) {
            return(
                <div className="additionSection color-light">
                    <div className="additionTop">
                        <h3>{this.state.questName}</h3>
                        <p>{this.state.questDesc}</p>
                    </div>
                    <div className="additionBottom">
                        <p>Experience level: {questLevels[this.state.questLevel].name}  + {questLevels[this.state.questLevel].points} points</p>
                        <p>Category: {this.state.category}</p>
                        <div className="button__submit__wrapper">
                            <button className="button__submit" onClick={() => {this.submitQuest()}}><p>Confirm</p></button>
                        </div>
                    </div>
                    <div className="flex-it footer-content">
                        <button className="button__primary" onClick={() => {this.renderRandomQuest()}}>
                            <p>Keep Choosing</p>
                        </button>
                    </div>
                </div>
            )            
        } else {
            return(
                <div>

                </div>
            )
        }
    }

    stepChange = (e) => {
        this.setState(() => ({step: e}));
    }

    render(){
        return(
            <div className="content-container">
                <div className="flex-it flex-center-align dash-wrapper">
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