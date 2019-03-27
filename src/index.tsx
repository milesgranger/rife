import * as React from 'react';
import * as ReactDOM from 'react-dom';

import Button from 'react-bootstrap/Button'

import { add } from './lib.rs'


interface Props {
    value: number
}

interface AppState {
    count: number
}


class App extends React.Component<Props, AppState> {

    constructor(props: Props) {
        super(props);

        this.state = {
            count: this.props.value
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        let result = add(this.state.count, 1);
        this.setState({count: result});
    };

    render(): React.ReactNode {
        return (
            <div>
                <h1>Aloha!</h1>
                <h5>Click the button to increment using Rust!</h5>
                <p>
                    Current count: {this.state.count}!
                </p>
                <div>
                    <Button onClick={this.handleClick}>Click Here!</Button>
                </div>
            </div>
        )
    }
}

ReactDOM.render(
  <App value={0} />,
  document.getElementById('root'),
);
