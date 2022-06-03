import React from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { completeQuest } from '../actions/quests';
import { history } from '../routers/AppRouter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faAnglesRight, faCarrot, faChessKnight, faAward, faInfo, faPlus, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

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
            this.props.completeQuest(parseInt(this.props.match.params.id));
            this.props.history.push(`/congrats/${this.state.questName}/${this.state.level}`);
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
                    <div className="flex-it footer-tasks">
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
        );
    };
};

const mapStateToProps = (state, props) => {

    if(state.quests.find((quest) => quest.id === parseInt(props.match.params.id)) === undefined){
        history.push("/dashboard");
    }

    return {
        quest: state.quests.find((quest) => quest.id === parseInt(props.match.params.id))
    };
};

const mapDispatchToProps = (dispatch) => ({
    completeQuest: (id) => dispatch(completeQuest(id)) 
});


export default connect(mapStateToProps,mapDispatchToProps)(Task);