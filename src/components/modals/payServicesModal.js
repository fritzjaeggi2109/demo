import React from 'react';
import { connect } from 'react-redux';
import { payService } from '../../actions';
import './pay-services-modal.css';
import Button from '../button/Button';

class PayServicesModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            amount: ''
        };
    }

    onInputChange(e) {
        if(e.target.validity.valid){
            this.setState({
                amount: e.target.value
            });
        }
    }

    handlePayment() {
        if(this.state.amount !== ''){
            if(parseInt(this.state.amount,10) > this.props.balance) {
                alert(`You do not have enough money to make this transaction`);
            }else{
                this.props.payService(this.state.amount);
                this.props.hide();
                this.setState({amount: ''});
            }
        }
    }

    render() {
        return (
            <div className="container">
                <div className="titleContainer">
                    <h3>Pay Services Form</h3>
                </div>
                <div>
                    <select className="modalSelect">
                        <option value="">Select a service</option>
                        <option value="water">Water</option>
                        <option value="gas">Gas</option>
                        <option value="light">Light</option>
                    </select>
                    <div className="inputContainer">
                        <input
                            value={this.state.amount}
                            pattern="[0-9]*"
                            className="inputForm" 
                            type="text" 
                            placeholder="Amount to pay"
                            onChange={(e)=>this.onInputChange(e)}
                        />
                    </div>
                </div>
                <div className="btnContainer">
                    <Button 
                        btnText="Pay"
                        onClick={this.handlePayment.bind(this)}
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
    }
};

export default connect(mapStateToProps, { payService })(PayServicesModal);