import React, { Component }  from 'react';
import './timer.css';

export default class Timer extends Component {

    state = {
        isActive: false,
    }

    componentDidMount(){
        const {count} = this.props;
        this.setState({
            count: count,
        });
        this.autoStartTimer();

    }


    autoStartTimer = () => {
        if(this.props.autostart){
            this.startTimer();
        }
    }


    startTimer = () => {
        this.setState({
            isActive: true,
        });

        let i = this.props.count/1000;
        this.interval = setInterval(() => {
            this.setState(prevState => {
            return {
                count: prevState.count - this.props.step
            }
        });
        if(i === 1){
            clearInterval(this.interval);
        }
        i--;
        }, this.props.step);


        //Timer started
        if(this.props.timerStart) { this.props.timerStart() }

    };


    pauseTimer = () => {
        this.componentWillUnmount();

        //Timer stopped
        if(this.props.timerStop) {this.props.timerStop()}
    };


    resetTimer = () => {
        const {count} = this.props;
        this.setState({
            count: count
        });

        if(this.props.autostart){
            this.pauseTimer();
            this.startTimer();
        } else {
            this.pauseTimer();
        }

        //Timer restarted
        if(this.props.timerReset) {this.props.timerReset()}
    };


    componentWillUnmount(){
        clearInterval(this.interval);
        this.setState({
            isActive: false
        })
    }


    render() {
        const {count} = this.state
        return (
            <div className="timer-container">
                <div className="timer-box">Current count: {count/1000}</div>
                    <button className="timer-btn" onClick={this.state.isActive ? this.pauseTimer : this.startTimer}>
                        {this.state.isActive ? 'Pause' : 'Start'}
                    </button>
                        <button className="timer-btn" onClick={this.resetTimer}>
                    Reset
                </button>
            </div>
        );
    }
}