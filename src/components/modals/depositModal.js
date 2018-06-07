import React from 'react';
import { connect } from 'react-redux';
import { deposit } from '../../actions';
import './deposit-modal.css';

class DepositModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            amount: ''
        }
    }

    onInputChange(e) {
        if(e.target.validity.valid){
          this.setState({
              amount: e.target.value
          });  
        }        
    }

    handelDeposit() {
        if(this.state.amount !== ''){
            this.props.deposit(this.state.amount);
            this.props.hide();
            this.setState({amount: ''});
        }
    }

    render() {
        return (
            <div className="container">
                <div className="titleContainer">
                    <h3>Money Deposit Form</h3>
                </div>
                <div className="inputContainer">
                    <input
                        value={this.state.amount}
                        pattern="[0-9]*"
                        className="inputForm" 
                        type="text" 
                        placeholder="Amount to deposit"
                        onChange={(e)=>this.onInputChange(e)} />
                </div>
                <div className="btnContainer">
                    <button
                        onClick={this.handelDeposit.bind(this)} 
                        className="btn"
                    >
                        Deposit
                    </button>
                </div>
            </div>
        );
    }
}

export default connect(null, { deposit })(DepositModal) ;