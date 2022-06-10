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

    render() {
        return(
            <div className="content-container">
                <div className="dash-header">
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
                <div className="flex-it dash-wrapper">
                    <this.renderOptions />
                </div>
                <div className="flex-it footer-tasks">
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