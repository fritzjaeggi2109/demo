import React from 'react';
import { connect } from 'react-redux'; 
import { deposit } from '../../actions';
import './menu.css';
import Title from '../title/Title';
import Button from '../button/Button';
import Rodal from 'rodal';
import '../../../node_modules/rodal/lib/rodal.css';
import DepositModal from '../modals/depositModal';
import PayServicesModal from '../modals/payServicesModal';
import BuyEurosModal from '../modals/buy-euros-modal';
import TransferMoneyModal from '../modals/transfer-money-modal';
import ExtractModal from '../modals/extract-money-modal';

class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            action: ''
        }
    }

    show() {
        this.setState({ visible: true });
    }

    hide() {
        this.setState({ visible: false });
    }

    renderForm(action) {
        switch(action){
            case 'extract':
                return <ExtractModal hide={()=>this.hide()}/>;
            case 'deposit':
                return <DepositModal hide={()=>this.hide()}/>;
            case 'pay-service':
                return <PayServicesModal hide={()=>this.hide()}/>;
            case 'buy-euros':
                return <BuyEurosModal hide={()=>this.hide()}/>;
            case 'transfer-money':
                return <TransferMoneyModal hide={()=>this.hide()}/>;
            default:
                return null;
        }
    }

    render() {
        return (
            <div className="menu-container">
                <Title titleText="Your Account" />
                <Button onClick={() => { 
                    this.show(); 
                    this.setState({action:'extract'})  
                    }} 
                    btnText="Extract money" 
                />
                <Button onClick={() => { 
                    this.show(); 
                    this.setState({action:'deposit'})  
                    }} 
                    btnText="Deposit money" 
                />
                <Button onClick={() => { 
                    this.show(); 
                    this.setState({action:'pay-service'})  
                    }} 
                    btnText="Pay services" 
                />
                <Button onClick={() => { 
                    this.show(); 
                    this.setState({action:'buy-euros'})  
                    }} 
                    btnText="Purchase euros" 
                />
                <Button onClick={() => { 
                    this.show(); 
                    this.setState({action:'transfer-money'})  
                    }}  
                    btnText="Transfer money" 
                />
                <Rodal 
                    visible={this.state.visible} 
                    onClose={this.hide.bind(this)}
                >
                    {this.renderForm(this.state.action)}
                </Rodal>
            </div>
        );
    };
};



export default connect(null, { deposit })(Menu);