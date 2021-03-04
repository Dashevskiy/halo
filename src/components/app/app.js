import React from 'react';
import Cards from "../cards/cards";
import HaloService from "../../services/halo-service";
import Cheapest from "../cheapest/cheapest";
import './app.css';
import Modal from "../modal/modal";

export default class App extends React.Component {

    haloservice = new HaloService();

    state = {
        cards: [],
        card: {},
        modalVisible: false,
    }

    componentDidMount() {
        this.haloservice.getResources()
            .then((cards) => {
                this.setState({
                    cards
                })
            })
    }

    onClickBuy = (card) => {
        this.setState({
            card,
            modalVisible: true
        })
        return <Modal card={card}/>
    }

    onClickCheapest = () => {
        const {cards} = this.state;
        const min = Math.min(...cards.map((item) => item.price))
        const card = cards.find((item) => item.price === min)
        this.setState({
            card,
            modalVisible: true
        })
    }

    onClickCloseModal = () => {
        this.setState({
            modalVisible: false
        })
    }

    render() {
        const {cards, card, modalVisible} = this.state;
        const modal = modalVisible ? 'modal-visible' : 'modal-none';

        return (
            <div className='app'>
                <Cards cards={cards} onClickBuy={this.onClickBuy}/>
                <Cheapest onClickCheapest={this.onClickCheapest}/>
                <div className={modal}>
                    <Modal card={card} onClickCloseModal={this.onClickCloseModal}/>
                </div>
            </div>
        )
    }
}