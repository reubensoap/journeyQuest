import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { questLevels } from '../buildingBlocks/levels';
import { faCoffee, faAnglesRight, faCarrot, faChessKnight, faAward, faInfo, faPlus } from '@fortawesome/free-solid-svg-icons';

const renderPics = (category) => {
    if(category === 'adventure'){
        return(
            <FontAwesomeIcon icon={faAnglesRight} size="1x"/>
        )
    } else {
        return(
            <FontAwesomeIcon icon={faAward} size="1x"/>
        )
    }
}

class QuestItem extends React.Component {

    constructor(props){
        super(props);
    }

    componentDidMount(){
    }

        render(){
            return(
                <Link to={`/task/${this.props.id}`} className="no-link">
                    <div className="task">
                        <div className=" flex-it flex-center-align content-section">
                            <div className="flex-it flex-center task-icon">
                                {renderPics(this.props.category)}
                            </div>
                            <div className="flex-it flex-center-align flex-just-space color-light task-tube">
                                <p>{this.props.questName}</p>
                                <div className="flex-it flex-center-align flex-just-space task-tube__right">
                                    <p>{questLevels[this.props.questLevel].points} points</p>
                                    <FontAwesomeIcon icon={faAnglesRight} size="1x"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>
            )
        }
        
};

export default connect()(QuestItem);