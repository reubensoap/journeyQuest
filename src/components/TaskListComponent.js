import React from 'react';
import { connect } from 'react-redux';
import QuestItem from './QuestComponent';

class TaskList extends React.Component {

    constructor(props){
        super(props);
    }

    renderList = () => {
        if(this.props.quests.length === 0){
            return(
                <div id="nothing__wrapper" className="color-light">
                    <h3>Looks empty, use + button to start</h3>
                </div>
            );
        } else {
            return(
                this.props.quests.map((quest, index) => {
                    return <QuestItem key={index} {...quest} />;
                })
            )
        }
    }

    componentDidMount(){
        if(document.getElementById("nothing__wrapper") !== null){
            const menuColor = localStorage.getItem("menuColor");

            if(menuColor === 'undefined' || menuColor === "1"){
                document.getElementById("nothing__wrapper").classList.add('accent-color-1');
            } else if(menuColor === "2"){
                document.getElementById("nothing__wrapper").classList.add('accent-color-2');
            }
        }
    }

    render(){
        return(
            <div className="task-wrapper ">
                <this.renderList/>
                
            </div>
        )
    }
    
};

const mapStateToProps = (state) => {
    return {
        quests: state.quests
    };
};

export default connect(mapStateToProps)(TaskList);