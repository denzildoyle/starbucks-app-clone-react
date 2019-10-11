import React, {Component} from "react";
import { string } from "prop-types";

export default class Greeting extends Component {
    state = {
        greeting: string
    }

    setGreeting() {
        setTimeout(() => {
            this.getGreeting()
        }, 1000)
    }

    getGreeting(){
        var today = new Date()
        var hour = today.getHours()

        if (hour < 12) {
            this.setState({
                greeting: 'morning'
            })
        } else if (hour >= 12 && hour <= 17) {
            this.setState({
                greeting: 'afternoon'
            })
        } else if (hour === 18) {
            this.setState({
                greeting: 'evening'
            })
        } else if (hour >= 19 && hour <= 24) {
            this.setState({
                greeting: 'night'
            })
        } else {
            this.setState({
                greeting: 'greetings'
            })
        }
    }

    componentDidMount() {
        this.getGreeting();
    }

    render() {
        return (
            <div className="greeting-info">
                <p>{this.state.greeting}</p>
            </div>
        )
    }
}