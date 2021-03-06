import React , { Component } from 'react';
import { Form, FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap';

class Gift extends Component {
    constructor(){
        super();
        this.state = {
            person: '',
            present: ''
        }
    }
    render() {
        return (
            <div className="gift">
                <Form>
                    <FormGroup>
                        <ControlLabel>Person</ControlLabel>
                        <FormControl
                         className='input-person'
                         onChange={event => this.setState({person: event.target.value })}
                         >
                         </FormControl>
                    </FormGroup>
                    <FormGroup>
                        <ControlLabel>Present</ControlLabel>
                        <FormControl
                         className='input-present'
                         onChange={event => this.setState({present: event.target.value })}
                         >
                         </FormControl>
                    </FormGroup>
                </Form>
                <button className='btn-remove' onClick={()=> this.props.removeGift(this.props.gift.id)}>Remove Gift</button>
            </div>
        );
    }
}

export default Gift;