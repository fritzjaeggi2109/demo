import React from 'react';
import { connect } from 'react-redux';
import { extract } from '../../actions';

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
            if(parseInt(amount, 10) > this.props.extractionLimit){
                alert(`The limit of extraction can not exceed $${this.props.extractionLimit}`);
            }else{
                this.props.extract(this.state.amount);
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
                    <button
                        onClick={this.handelExtract.bind(this)} 
                        className="btn"
                    >
                        Extract
                    </button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    const { extractionLimit } = state.transactions;
    return {
        extractionLimit
    };
};

export default connect(mapStateToProps, { extract })(ExtractModal) ;