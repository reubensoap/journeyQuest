import React from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { completeQuest, addPoints, levelUp } from '../actions/quests';
import { levels, questLevels } from '../buildingBlocks/levels';
import { history } from '../routers/AppRouter';
import Footer from './FooterComponent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPlus, faArrowLeft} from '@fortawesome/free-solid-svg-icons';

class Task extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            questName: '',
            level: 0
        }

    }



    stepChange = (e) => {
        const title = this.props.quest.questName;
        const level = this.props.quest.questLevel;
        this.setState((prevState) => ({
            questName: title,
            level
        }));

        this.changeSteps(e);
    }

    changeSteps = (e) => {
        if(e === 1){
            document.getElementById('section1').classList.add('no-show');
            document.getElementById('section2').classList.remove('no-show');
        } else if(e === 0){
            document.getElementById('section1').classList.remove('no-show');
            document.getElementById('section2').classList.add('no-show');
        }
    }

    submitQuest = () => {
        this.props.completeQuest(this.props.match.params.id);
        var oldPoints = this.props.userDetails.points;
        this.props.addPoints(oldPoints, this.props.userDetails.points + questLevels[this.props.quest.questLevel].points);

        if((this.props.userDetails.points + questLevels[this.props.quest.questLevel].points) >= levels[this.props.userDetails.level].levelCap){
            console.log("leveled UP");
            this.props.levelUp(this.props.userDetails.level + 1);
            this.props.history.push(`/levelUp/${this.state.questName}/${this.state.level}`);
        } else {
            this.props.history.push(`/congrats/${this.state.questName}/${this.state.level}`);
        }
    }

    renderActionSection = () => {

        return(
            <div>
                <div id="section1" className="actionSection color-light">
                    <button onClick={() => this.stepChange(1) } className="button button__primary"><p className="color-light">Complete Quest</p></button>
                </div>
                <div id="section2" className="actionSection text-center-align color-light no-show">
                    <p className="padding-bottom-2">Are you sure?</p>
                    <div className="flex-it inner-row">
                        <button onClick={() => { this.submitQuest() }} className="button button__primary margin-right-1"><p>Yes</p></button>
                        <button onClick={() => { this.changeSteps(0) }} className="button button__primary"><p>No</p></button>
                    </div>
                </div>
            </div>
        );
        
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

         }
    }


    render() {
        return (
            <div className="content-container">
                <div id="dash-wrapper-1" className="flex-it flex-center-align dash-wrapper">
                    <div className="taskData color-light">
                        <h3>{this.props.quest.questName}</h3>
                        <p>{this.props.quest.questDesc}</p>
                    </div>
                    {this.renderActionSection()}
                    <Footer option1="dashboard" option2="addition" image1={faArrowLeft} image2={faPlus}/>
                    
                </div>
            </div>
        );
    };
};

const mapStateToProps = (state, props) => {

    if(state.quests.find((quest) => quest.id === props.match.params.id) === undefined){
        history.push("/dashboard");
    }

    return {
        quest: state.quests.find((quest) => quest.id === props.match.params.id),
        userDetails: state.userDetails
    };
};

const mapDispatchToProps = (dispatch) => ({
    completeQuest: (id) => dispatch(completeQuest(id)),
    addPoints: (data, data2) => dispatch(addPoints(data, data2)),
    levelUp: (data) => dispatch(levelUp(data))
});


export default connect(mapStateToProps,mapDispatchToProps)(Task);