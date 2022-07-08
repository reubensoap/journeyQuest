import React from 'react';
import { levels } from '../buildingBlocks/levels';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faAnglesRight, faCarrot, faChessKnight, faAward, faInfo, faArrowLeft } from '@fortawesome/free-solid-svg-icons';


class NavigationComponent extends React.Component {

    constructor(props){
        super(props);
    }

    renderOptions = () => {
        if(this.props.options === "settings"){
            return(
                <div className="task-wrapper ">
                    <Link to="/dashboard">
                        <div className="task color-light">
                            <h3>History</h3>
                        </div>
                    </Link>
                    <Link to="/dashboard">
                        <div className="task color-light">
                            <h3>User Options</h3>
                        </div>
                    </Link>
                    <Link to="/customize">
                        <div className="task color-light">
                            <h3>Customize</h3>
                        </div>
                    </Link>
                    <Link to="/dashboard">
                        <div className="task color-light">
                            <h3>Logout</h3>
                        </div>
                    </Link>
                </div>
            );
        } else if(this.props.options === "addition")  {
            return(
                <div className="task-wrapper ">
                    <Link to="/newQuest">
                        <div className="task color-light">
                            <h3>Create New</h3>
                        </div>
                    </Link>
                    <Link to="/random">
                        <div className="task color-light">
                            <h3>Discover New</h3>
                        </div>
                    </Link>
                </div>
            );
        } else {
            return(
                <div className="task-wrapper color-light">
                    <h3>Leveling Up</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Facilisi morbi tempus iaculis urna id volutpat. Diam in arcu cursus euismod quis viverra. Amet nisl suscipit adipiscing bibendum est ultricies integer quis. Morbi non arcu risus quis varius quam quisque id diam. Nec tincidunt praesent semper feugiat nibh sed pulvinar proin. Eros in cursus turpis massa tincidunt dui. Vulputate ut pharetra sit amet aliquam id. Erat imperdiet sed euismod nisi porta lorem mollis aliquam ut. Netus et malesuada fames ac turpis egestas maecenas pharetra. Lacus laoreet non curabitur gravida arcu ac tortor dignissim convallis. Enim sed faucibus turpis in eu mi bibendum neque. Faucibus purus in massa tempor. Aliquet lectus proin nibh nisl condimentum id. Rhoncus est pellentesque elit ullamcorper dignissim cras. Adipiscing tristique risus nec feugiat in.</p>
                    <h3>Points</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Facilisi morbi tempus iaculis urna id volutpat. Diam in arcu cursus euismod quis viverra. Amet nisl suscipit adipiscing bibendum est ultricies integer quis. Morbi non arcu risus quis varius quam quisque id diam. Nec tincidunt praesent semper feugiat nibh sed pulvinar proin. Eros in cursus turpis massa tincidunt dui. Vulputate ut pharetra sit amet aliquam id. Erat imperdiet sed euismod nisi porta lorem mollis aliquam ut. Netus et malesuada fames ac turpis egestas maecenas pharetra. Lacus laoreet non curabitur gravida arcu ac tortor dignissim convallis. Enim sed faucibus turpis in eu mi bibendum neque. Faucibus purus in massa tempor. Aliquet lectus proin nibh nisl condimentum id. Rhoncus est pellentesque elit ullamcorper dignissim cras. Adipiscing tristique risus nec feugiat in.</p>
                </div>
            );
        }
    }

    componentDidMount(){
        const menuColor = localStorage.getItem("menuColor");
        const userPlate = localStorage.getItem("plate");

        if(userPlate === 'undefined' || userPlate === "1"){
            document.getElementById("plate-insert").classList.add('background-level-1');
        } else if(userPlate === "2"){
            document.getElementById("plate-insert").classList.add('background-level-2');
        } else if(userPlate === "3"){
            document.getElementById("plate-insert").classList.add('background-level-3');
        } else if(userPlate === "4"){
            document.getElementById("plate-insert").classList.add('background-level-4');
        } else if(userPlate === "5"){
            document.getElementById("plate-insert").classList.add('background-level-5');
        } else if(userPlate === "6"){
            document.getElementById("plate-insert").classList.add('background-level-6');
        }

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

         } else if (menuColor === "3"){
            document.getElementById("dash-wrapper-1").classList.add('base-color-3');
            document.getElementById("footer").classList.add('accent-color-3');

            const custer = document.querySelectorAll('.task');
            for (var i = 0; i < custer.length; i++){
                custer[i].classList.add('accent-color-3');
            }

            const taskIcons = document.querySelectorAll('.task-icon')
            for (var i = 0; i < taskIcons.length; i++){
                taskIcons[i].classList.add('accent-color-3-brightest');
            }

            const buttons = document.querySelectorAll('.button')
            for (var i = 0; i < buttons.length; i++){
                buttons[i].classList.add('button-color-3');
            }

         } else if (menuColor === "4"){
            document.getElementById("dash-wrapper-1").classList.add('base-color-4');
            document.getElementById("footer").classList.add('accent-color-4');

            const custer = document.querySelectorAll('.task');
            for (var i = 0; i < custer.length; i++){
                custer[i].classList.add('accent-color-4');
            }

            const taskIcons = document.querySelectorAll('.task-icon')
            for (var i = 0; i < taskIcons.length; i++){
                taskIcons[i].classList.add('accent-color-4-brightest');
            }

            const buttons = document.querySelectorAll('.button')
            for (var i = 0; i < buttons.length; i++){
                buttons[i].classList.add('button-color-4');
            }

         } else if (menuColor === "5"){
            document.getElementById("dash-wrapper-1").classList.add('base-color-5');
            document.getElementById("footer").classList.add('accent-color-5');

            const custer = document.querySelectorAll('.task');
            for (var i = 0; i < custer.length; i++){
                custer[i].classList.add('accent-color-5');
            }

            const taskIcons = document.querySelectorAll('.task-icon')
            for (var i = 0; i < taskIcons.length; i++){
                taskIcons[i].classList.add('accent-color-5-brightest');
            }

            const buttons = document.querySelectorAll('.button')
            for (var i = 0; i < buttons.length; i++){
                buttons[i].classList.add('button-color-5');
            }

         } else if (menuColor === "6"){
            document.getElementById("dash-wrapper-1").classList.add('base-color-6');
            document.getElementById("footer").classList.add('accent-color-6');

            const custer = document.querySelectorAll('.task');
            for (var i = 0; i < custer.length; i++){
                custer[i].classList.add('accent-color-6');
            }

            const taskIcons = document.querySelectorAll('.task-icon')
            for (var i = 0; i < taskIcons.length; i++){
                taskIcons[i].classList.add('accent-color-6-brightest');
            }

            const buttons = document.querySelectorAll('.button')
            for (var i = 0; i < buttons.length; i++){
                buttons[i].classList.add('button-color-6');
            }

         }

    }

    render() {
        return(
            <div className="content-container">
                <div id="plate-insert" className="dash-header">
                    <div className="dash-header__top">
                        <h2 className="dash-name">Welcome, {this.props.userDetails.firstName}</h2>
                        <p>Something about your life</p>
                    </div>
                    <div className="flex-it flex-just-space dash-header__bottom">
                        <div className="flex-it flex-center left">
                            <p>Lv. {this.props.userDetails.level}</p>
                            <p>Next {levels[this.props.userDetails.level].levelCap - this.props.userDetails.points} pts</p>
                            <p>{levels[this.props.userDetails.level].rank}</p>
                        </div>
                        <div className="right">
                            <Link to="/facts">
                                <div className="flex-it flex-center task-icon">
                                    <FontAwesomeIcon icon={faInfo} size="1x"/>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
                <div id="dash-wrapper-1" className="flex-it dash-wrapper">
                    <this.renderOptions />
                </div>
                <div id="footer" className="flex-it footer-tasks">
                    <div className="flex-it footer-content">
                        <Link to="/dashboard">
                            <div className="flex-it flex-center task-icon">
                                <FontAwesomeIcon icon={faArrowLeft} size="1x" />
                            </div>
                        </Link>
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

export default connect(mapStateToProps)(NavigationComponent);