import React from 'react';
import { connect } from 'react-redux';
import { QuestItem } from './QuestComponent';

const TaskList = (props) => (
    <div className="task-wrapper ">
        {
            props.quests.length === 0 ? (
                <div>
                    NO Data
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