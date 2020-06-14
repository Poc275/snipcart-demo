import React, { Component } from "react"
import { CSSTransition  } from "react-transition-group"
import styles from './news-ticker.css'

class NewsTicker extends Component {
    constructor (props) {
        super (props)

        this.state = { 
            isTickitVisible: false,
            data: [
                'Summer 2020 Collection Now in store!',
                'Free delivery on all orders',
                'Opening hours 9AM - 4.30PM'
            ],
            counter: 0,
            duration: 2000,
        }
    }

    draw = () => {
        setInterval(() => {
            this.setState({
                isTickitVisible: !this.state.isTickitVisible,
            })
        }, this.state.duration)
    }

    getNextMessage = () => {
        this.setState({
            counter: (this.state.counter + 1) % this.state.data.length
        })
    }

    componentDidMount = () => {
        this.intervalId = setInterval(() => {
            this.setState({
                isTickitVisible: !this.state.isTickitVisible,
            })
        }, this.state.duration)
    }

    componentWillUnmount = () => {
        // clear interval
        clearInterval(this.intervalId)
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col news-ticker">
                        Latest News:&nbsp;
                        <CSSTransition in={this.state.isTickitVisible} timeout={this.state.duration} classNames="ticker" onEnter={this.getNextMessage}>
                            <div className="ticker-text">{this.state.data[this.state.counter]}</div>
                        </CSSTransition>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsTicker