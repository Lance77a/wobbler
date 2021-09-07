import React, { Component } from 'react';
import './Navbar.css';

class Navbar extends Component {
    static defaultProps = {
        onNewRecipe() {}
    }
    render() {
        return (
            <header>
                <h2><a>Wobbler</a></h2>
                <nav>
                    <li><a onClick={this.props.onNewRecipe}>New Recipe</a></li>
                    <li><a>Home</a></li>
                    <li><a>About</a></li>
                    <li><a>Contact Us</a></li>
                </nav>
            </header>
        );
    }
}

export default Navbar;