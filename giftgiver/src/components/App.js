import React, { Component } from 'react';
import { button } from 'react-bootstrap';

class App extends Component {
    constructor(){
        super();

        this.state = { gifts: [] };
    }

    addGift = () => {
        const { gifts } = this.state; // const gifts = this.state.gifts;

        const ids = gifts.map(gift => gift.id);

        const max_id = ids.length > 0 ? Math.max(...ids) : 0 ; // Math.max(ids[0], ids[1], ids[2], so on)

        gifts.push( {id:max_id + 1});

        this.setState({ gifts }); // this.setState({ gifts: gifts });
    }

    render() {
        return (
            <div>
                <h2>Gift Giver</h2>
                <div className='gift-list'>
                  {
                      this.state.gifts.map(gift => {
                          return (
                              <div key={gift.id}></div>
                          )
                      })
                  }
                </div>
                <button className='btn-add' onClick={this.addGift}>Add Gift</button>
            </div>
        )
    }
}

export default App;