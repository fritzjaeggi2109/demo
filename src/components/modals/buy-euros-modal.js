import React from 'react';
import { connect } from 'react-redux';
import { purchase } from '../../actions';
import './buy-euros-modal.css';

class BuyEurosModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            amount: ''
        }
    }

    onInputChange(e) {
        if(e.target.validity.valid) {
            this.setState({
                amount: e.target.value
            });
        };
    }

    handlePurchase() {
        if(this.state.amount !== '') {
            if(parseInt(this.state.amount, 10) > this.props.balance) {
                alert(`You do not have enough money to make this transaction`);
            }else {
                this.props.purchase(this.state.amount);
                this.props.hide();
                this.setState({amount: ''});
            }
        }
    }

    render() {
        return (
            <div className="container">
                <div className="titleContainer">
                    <h3>Euros Purchase Form</h3>
                </div>
                <div className="inputContainer">
                    <input
                        value={this.state.amount}
                        pattern="[0-9]*"
                        className="inputForm" 
                        type="text" 
                        placeholder="Amount to purchase" 
                        onChange={(e)=>this.onInputChange(e)}
                    />
                </div>
                <div className="btnContainer">
                    <button
                        onClick={this.handlePurchase.bind(this)}
                        className="btn"
                    >
                        Purchase
                    </button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    const { balance } = state.transactions;
    return {
        balance
    };
};

export default connect(mapStateToProps, { purchase })(BuyEurosModal);