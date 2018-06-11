import React from 'react';
import { connect } from "react-redux";
import { transfer } from '../../actions';
import './buy-euros-modal.css';
import Button from '../button/Button';

class TransferMoneyModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            amount: '',
            account: ''
        };
    }

    onInputChange(e) {
        if(e.target.validity.valid) {
            this.setState({
                amount: e.target.value
            });
        };
    }

    onSelectChange(e) {
        this.setState({
            account: e.target.value
        });
    }

    handleTransfer() {
        if(this.state.amount !== '' && this.state.account !== '') {
            if(parseInt(this.state.amount, 10) > this.props.balance) {
                alert(`You do not have enough money to make this transaction`);
            }else{
                this.props.transfer(this.state.amount);
                this.props.hide();
                this.setState({
                    amount: '',
                    account: ''
                });
            }
        }
    }

    render() {
        return (
            <div className="container">
                <div className="titleContainer">
                    <h3>Transfer Form</h3>
                </div>
                <div>
                    <select
                        onChange={(e)=>this.onSelectChange(e)} 
                        className="modalSelect"
                        value={this.state.account}
                    >
                        <option value="">Select an account</option>
                        <option value="account1">123465789</option>
                        <option value="account2">987654321</option>
                    </select>
                    <div className="inputContainer">
                        <input
                            value={this.state.amount}
                            pattern="[0-9]*"
                            className="inputForm" 
                            type="text" 
                            placeholder="Amount to transfer"
                            onChange={(e)=>this.onInputChange(e)}
                        />
                    </div>
                </div>
                <div className="btnContainer">
                    <Button 
                        btnText="Transfer"
                        onClick={this.handleTransfer.bind(this)}
                    />
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

export default connect(mapStateToProps, { transfer })(TransferMoneyModal);