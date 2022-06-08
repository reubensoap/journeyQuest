import React from "react";
import { Link } from "react-router-dom";
import {connect} from 'react-redux';
import { levels, questLevels } from "../buildingBlocks/levels";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

class Congrats extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            m: this.props.match.params.pastPoints
        }
    }


    move = () => {

        var currentWhole = 0;

        if(this.props.userDetails.level === 0){
            currentWhole = 1000;

            var currentPercentage = (parseInt(this.props.userDetails.pastPoints) / currentWhole)*100;

            var increasePercentage = ((parseInt(this.props.userDetails.pastPoints) + questLevels[this.props.match.params.level].points) / currentWhole)*100;

        } else {
            currentWhole = levels[this.props.userDetails.level].levelCap - levels[this.props.userDetails.level - 1].levelCap;

            var currentPercentage = (parseInt(this.props.userDetails.pastPoints - levels[this.props.userDetails.level - 1].levelCap) / currentWhole)*100;

            var increasePercentage = ((parseInt(this.props.userDetails.pastPoints - levels[this.props.userDetails.level - 1].levelCap) + questLevels[this.props.match.params.level].points) / currentWhole)*100;
        }

        console.log("first", currentPercentage);
        console.log("second", increasePercentage);

        var i = 1;
              var elem = document.getElementById("myBar");
              elem.style.background = 'white';
              var width = currentPercentage; // change this to get the beginning line
              var id = setInterval(frame, 10);
              function frame() {
                if (width >= increasePercentage) {  //change this line to get the final percentage
                  clearInterval(id);
                  i = 0;
                } else {
                  width++;
                  elem.style.width = width + "%";
                }
              }
    }

    componentDidMount(){
        this.move();
    }

    render(){

        const custStyle =  {
            width: 0,
            height: '30px',
        }


        return(

            <div>
                <div className="content-container">
                    <div className="flex-it flex-center-align dash-wrapper">
                        <div className="taskData color-light">
                            <h3>Completed!</h3>
                            <p>{this.props.match.params.name}</p>
                            <p>{questLevels[parseInt(this.props.match.params.level)].points} pts. granted</p>
                        </div>
                        <div className="actionSection">
                            <div className="progress-bar__wrapper">
                                <div className="progress-bar__outer-tube">
                                    <div id="myBar" style={custStyle}></div>
                                </div>
                                <Link to="/dashboard">
                                    <button className="button__primary">Finished</button>
                                </Link>
                            </div>
                        </div>
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
            </div>
        );
    };
};

const mapStateToProps = (state, props) => {
    return {
        userDetails: state.userDetails
    };
};

export default connect(mapStateToProps)(Congrats);