import React from 'react';
import { connect } from 'react-redux';
import { QuestItem } from './QuestComponent';

const TaskList = (props) => (
    <div className="task-wrapper ">
        {
            props.quests.length === 0 ? (
                <div className="nothing__wrapper color-light">
                    <h3>Looks empty, use + button to start</h3>
                </div>
            ) : (
                props.quests.map((quest, index) => {
                    return <QuestItem key={index} {...quest} />;
                })
            )
        }
    </div>
);

const mapStateToProps = (state) => {
    return {
        quests: state.quests
    };
};

export default connect(mapStateToProps)(TaskList);