import React from 'react';
import { connect } from 'react-redux';
import './infoContainer.css';

class InfoContainer extends React.Component {
    render(){
        return (
            <div className="info-container">
                <div className="account-info">
                    <p>Balance in your account</p>
                    <h3 id="account-balance">${this.props.balance}</h3>
                    <p id="extraction-limit">Your extraction limit is: ${this.props.extractionLimit}</p>
                </div>
            </div>
        );
    }
};

const mapStateToProps = state => {
    const { balance, extractionLimit } = state.transactions;
    return {
        balance,
        extractionLimit
    };
};

export default connect(mapStateToProps)(InfoContainer);