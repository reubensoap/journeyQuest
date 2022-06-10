import React from "react";
import Footer from "./FooterComponent";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import uuid from 'react-uuid';
import { connect } from "react-redux";
import { addQuest } from "../actions/quests";
import { history } from '../routers/AppRouter';
import { faCoffee, faAnglesRight, faCarrot, faChessKnight, faAward, faArrowLeft, faPlus } from '@fortawesome/free-solid-svg-icons';


class AddQuest extends React.Component {

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

    updateCategory = (category) => {
        this.setState((prevState) => ({
            ...prevState,
            step: 1,
            category
        }));
    }

    updateQuestLevel = (e) => {
        this.setState((prevState) => ({
            ...prevState,
            step: 3,
            questLevel: e
        }));
    }

    onSubmit = () => {
        this.setState((prevState) => ({
            ...prevState,
            step: 2
        }));
    }

    onTitleChange = (e) => {
        const questName = e.target.value;
        this.setState(() => ({questName}));
    }

    onDescChange = (e) => {
        const questDesc = e.target.value;
        this.setState(() => ({questDesc}));
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

    renderAction = () => {
        if(this.state.step === 0){
            return(
                <div className="additionSection color-light">
                    <div className="additionTop">
                        <h3>Step 1.</h3>
                        <p>Choose a category</p>
                    </div>
                    <div className="additionBottom">
                        <button onClick={() => {this.updateCategory("adventure")}} className="widthHundred margin-bottom-2">
                            <div className="option flex-it flex-center-align">
                                <div className="flex-it flex-center task-icon">
                                    <FontAwesomeIcon icon={faPlus} size="1x" />
                                </div>
                                <div className="right">
                                    <p>Adventure</p>
                                </div>
                            </div>
                        </button>
                        <button onClick={() => {this.updateCategory("health")}} className="widthHundred margin-bottom-2">
                            <div className="option flex-it flex-center-align">
                                <div className="flex-it flex-center task-icon">
                                    <FontAwesomeIcon icon={faPlus} size="1x" />
                                </div>
                                <div className="right">
                                    <p>Health</p>
                                </div>
                            </div>
                        </button>
                        <button onClick={() => {this.updateCategory("skill")}} className="widthHundred margin-bottom-2">
                            <div className="option flex-it flex-center-align">
                                <div className="flex-it flex-center task-icon">
                                    <FontAwesomeIcon icon={faPlus} size="1x" />
                                </div>
                                <div className="right">
                                    <p>Skill</p>
                                </div>
                            </div>
                        </button>
                    </div>
                </div>
            )
        } else if(this.state.step === 1){
            return(
                <div className="additionSection color-light">
                    <div className="additionTop">
                        <h3>Step 2.</h3>
                        <p>Jot down details</p>
                    </div>
                    <div className="additionBottom">
                        <form onSubmit={(e) => this.onSubmit(e)} className="form">
                            <input className="text-input" type="text" placeholder="Quest title" value={this.state.questName} onChange={this.onTitleChange} />
                            <textarea className="textarea" placeholder="Add a note for the quest." value={this.state.questDesc} onChange={this.onDescChange} />
                            <div>
                                <button className="form__button color-light"><p>Next</p></button>
                            </div>
                        </form>
                    </div>
                    <div className="flex-it footer-content">
                        <button className="button__primary" onClick={() => {this.stepBack(0)}}>
                            <p>Back step</p>
                        </button>
                    </div>
                </div>
            );
        } else if(this.state.step === 2){
            return(
                <div className="additionSection color-light">
                    <div className="additionTop">
                        <h3>Step 3.</h3>
                        <p>How hard is this quest?</p>
                    </div>
                    <div className="additionBottom">
                        <button onClick={() => {this.updateQuestLevel(0)}} className="widthHundred margin-bottom-2">
                            <div className="option flex-it flex-center-align">
                                <div className="flex-it flex-center task-icon">
                                    <FontAwesomeIcon icon={faPlus} size="1x" />
                                </div>
                                <div className="right">
                                    <p>Stepping stone</p>
                                </div>
                            </div>
                        </button>
                        <button onClick={() => {this.updateQuestLevel(1)}} className="widthHundred margin-bottom-2">
                            <div className="option flex-it flex-center-align">
                                <div className="flex-it flex-center task-icon">
                                    <FontAwesomeIcon icon={faPlus} size="1x" />
                                </div>
                                <div className="right">
                                    <p>Expansion</p>
                                </div>
                            </div>
                        </button>
                        <button onClick={() => {this.updateQuestLevel(2)}} className="widthHundred margin-bottom-2">
                            <div className="option flex-it flex-center-align">
                                <div className="flex-it flex-center task-icon">
                                    <FontAwesomeIcon icon={faPlus} size="1x" />
                                </div>
                                <div className="right">
                                    <p>Bucket Lister</p>
                                </div>
                            </div>
                        </button>
                    </div>
                    <div className="flex-it footer-content">
                        <button className="button__primary" onClick={() => {this.stepBack(1)}}>
                            <p>Back step</p>
                        </button>
                    </div>
                </div>
            );
        } else if(this.state.step === 3){
            return(
                <div className="additionSection color-light">
                    <div className="additionTop">
                        <h3>Confirm Quest</h3>
                        <p>Does this look correct?</p>
                    </div>
                    <div className="additionBottom">
                        <p>Quest Name: {this.state.questName}</p>
                        <p>Quest Description: {this.state.questDesc}</p>
                        <p>Category: {this.state.category}</p>
                        <p>Experience level: {this.state.questLevel}</p>
                        <div>
                            <button className="button__primary" onClick={() => {this.submitQuest()}}>Confirm</button>
                        </div>
                    </div>
                    <div className="flex-it footer-content">
                        <button className="button__primary" onClick={() => {this.stepBack(2)}}>
                            <p>Back step</p>
                        </button>
                    </div>
                </div>
            )
        }
    }

    render(){
        return(
            <div className="content-container">
                <div className="flex-it flex-center-align dash-wrapper">
                    <div className="taskData color-light">
                        <h2>New Quest</h2>
                        <p>Create a custom quest</p>
                    </div>
                    <this.renderAction />
                    <Footer option1="dashboard" option2="addition" image1={faArrowLeft} image2={faPlus}/> 
                </div>
            </div>
        );
    }

};

const mapDispatchToProps = (dispatch) => ({
    addQuest: (quest) => dispatch(addQuest(quest))
});

export default connect(undefined, mapDispatchToProps)(AddQuest);