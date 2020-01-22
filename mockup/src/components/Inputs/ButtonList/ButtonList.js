import React, {Component} from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './ButtonList.scss';
import Button from './Button'

class ButtonList extends Component {
    renderButtons() {
        return (
            <div>
                {this.props.buttons.map(text => {
                        return <Button
                            text={text}
                            onClick={this.props.onClick}
                        />
                    }
                )}
            </div>
        );
    }

    render() {
        return (
            <div className="button-list">
                {this.renderButtons()}
            </div>
        );
    }
}

export default ButtonList;
