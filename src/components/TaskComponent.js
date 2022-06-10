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
            step: 0,
            questName: '',
            level: 0
        }

    }

    stepChange = (e) => {
        const title = this.props.quest.questName;
        const level = this.props.quest.questLevel;
        this.setState((prevState) => ({
            step: e,
            questName: title,
            level
        }));
    }

    renderActionSection = () => {
        if(this.state.step === 0){
            return(
                <div className="actionSection color-light">
                    <button onClick={() => this.stepChange(1) } className="button__primary"><p className="color-light">Complete Quest</p></button>
                </div>
            );
        } else if(this.state.step === 1){

            

            return(
                <div className="actionSection text-center-align color-light">
                    <p className="padding-bottom-2">Are you sure?</p>
                    <div className="flex-it inner-row">
                        <button onClick={() => { this.stepChange(2) }} className="button__primary margin-right-1"><p>Yes</p></button>
                        <button onClick={() => { this.stepChange(0) }} className="button__primary"><p>No</p></button>
                    </div>
                </div>
            );
        } else if(this.state.step === 2){
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
    }


    render() {
        return (
            <div className="content-container">
                <div className="flex-it flex-center-align dash-wrapper">
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