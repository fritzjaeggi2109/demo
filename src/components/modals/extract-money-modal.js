import React from 'react';
import { connect } from 'react-redux';
import { extract } from '../../actions';
import Button from '../button/Button';

class ExtractModal extends React.Component {
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

    handelExtract() {
        if(this.state.amount !== ''){
            const { amount } = this.state;
            const { balance, extractionLimit } = this.props;
            if(parseInt(amount, 10) > extractionLimit){
                alert(`The limit of extraction can not exceed $${this.props.extractionLimit}`);
            }else if(parseInt(amount, 10) > balance ){
                alert(`You do not have enough money to make this transaction`);
            }else{
                this.props.extract(amount);
                this.props.hide();
                this.setState({amount: ''});
            }
        }
    }

    render() {
        return (
            <div className="container">
                <div className="titleContainer">
                    <h3>Money Extract Form</h3>
                </div>
                <div className="inputContainer">
                    <input
                        value={this.state.amount}
                        pattern="[0-9]*"
                        className="inputForm" 
                        type="text" 
                        placeholder="Amount to extract"
                        onChange={(e)=>this.onInputChange(e)} />
                </div>
                <div className="btnContainer">
                    <Button
                        btnText="Extract"
                        onClick={this.handelExtract.bind(this)}
                    />
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    const { balance, extractionLimit } = state.transactions;
    return {
        balance,
        extractionLimit
    };
};

export default connect(mapStateToProps, { extract })(ExtractModal) ;