import React from 'react';
import './modal.css';

export default class Modal extends React.Component {

    state = {
        name: '',
        number: '',
        errName: '',
        errNumber: '',
        showErrorName: false,
        showErrorNumber: false,
        styleNameInput: {border: ''},
        styleNumberInput: {border: ''},
        errIconName: '',
        errIconNumber: ''
    }

    onChangeName = (e) => {
        const name = e.target.value;
        this.setState({
            name
        })
    }

    onChangeNumber = (e) => {
        const number = e.target.value;
        this.setState({
            number
        })
    }

    onBlurName = () => {
        const {name, errName} = this.state;

        if (name.length === 0) {
            this.setState({
                errName: `This field in required`,
                showErrorName: true,
                styleNameInput: {
                    border: '1px solid #E43F3F'
                },
                errIconName: 'fa fa-times-circle fa-10x'
            })
        }

        if (name.replace(/^[A-Za-zА-Яа-яЁё]+$/i, '').length > 0) {
            this.setState({
                errName: `Only letters allowed`,
                showErrorName: true,
                styleNameInput: {
                    border: '1px solid #E43F3F'
                },
                errIconName: 'fa fa-times-circle fa-10x'
            })
        }

        if (errName.length > 1) {
            this.setState({
                showErrorName: true,
                styleNameInput: {
                    border: '1px solid #E43F3F'
                },
                errIconName: 'fa fa-times-circle fa-10x'
            })
        }

        if (name.length > 0 && !name.replace(/^[A-Za-zА-Яа-яЁё]+$/i, '').length > 0) {
            this.setState({
                errName: '',
                showErrorName: false,
                styleNameInput: {
                    border: '1px solid #4BCFA0'
                },
                errIconName: ''
            })
        }
    }

    onBlurNumber = () => {
        const {number, errNumber} = this.state;

        if (number.length !== 12) {
            this.setState({
                errNumber: `Should contain 12 characters`,
                showErrorNumber: true,
                styleNumberInput: {
                    border: '1px solid #E43F3F'
                },
                errIconNumber: 'fa fa-times-circle fa-10x'
            })
        }
        if (number.replace(/^\d+$/, '').length > 0) {
            this.setState({
                errNumber: `Only numbers allowed`,
                showErrorNumber: true,
                styleNumberInput: {
                    border: '1px solid #E43F3F'
                },
                errIconNumber: 'fa fa-times-circle fa-10x'
            })
        }
        if (number.length === 0) {
            this.setState({
                errNumber: `This field in required`,
                showErrorNumber: true,
                styleNumberInput: {
                    border: '1px solid #E43F3F'
                },
                errIconNumber: 'fa fa-times-circle fa-10x'
            })
        }
        if (errNumber.length > 1) {
            this.setState({
                showErrorNumber: true,
                styleNumberInput: {
                    border: '1px solid #E43F3F'
                },
                errIconNumber: 'fa fa-times-circle fa-10x'
            })
        }

        if (number.length > 0 && !number.replace(/^\d+$/, '').length > 0 && number.length === 12) {
            this.setState({
                errNumber: '',
                showErrorNumber: false,
                styleNumberInput: {
                    border: '1px solid #4BCFA0'
                },
                errIconNumber: ''
            })
        }
    }

    onSubmitOrder = (e) => {
        e.preventDefault();
        const {name, number, showErrorName, showErrorNumber} = this.state;

        if (name.length === 0) {
            this.setState({
                errName: `This field in required`,
                showErrorName: true,
                styleNameInput: {
                    border: '1px solid #E43F3F'
                },
                errIconName: 'fa fa-times-circle fa-10x'
            })
        }
        if (number.length === 0) {
            this.setState({
                errNumber: `Should contain 12 characters`,
                showErrorNumber: true,
                styleNumberInput: {
                    border: '1px solid #E43F3F'
                },
                errIconNumber: 'fa fa-times-circle fa-10x'
            })
        }

        if (!showErrorName && !showErrorNumber) {
            const userOrder = {
                name: name,
                number: number
            }
            console.log(userOrder)
        }
    }

    closeModal = () => {
        this.props.onClickCloseModal()
        this.setState({
            name: '',
            number: '',
            errName: '',
            errNumber: '',
            showErrorName: false,
            showErrorNumber: false,
            styleNameInput: {border: ''},
            styleNumberInput: {border: ''},
            errIconName: '',
            errIconNumber: ''
        })
    }

    render() {
        const {card} = this.props;
        const {
            name,
            number,
            errName,
            showErrorName,
            errNumber,
            showErrorNumber,
            styleNameInput,
            styleNumberInput,
            errIconName,
            errIconNumber
        } = this.state;

        if (!card) {
            return null
        }

        return (
            <React.Fragment>
                <div className='modal'>
                    <span className='modal__category'>{card.category}</span>
                    <span className='modal__name'>{card.name}</span>

                    <span>
                    <span className='modal__currency'>$</span>
                    <span className='modal__amount'>{card.price}</span>
                </span>
                    <form className='modal__form'>

                        <i className={errIconName}></i>
                        <input
                            style={styleNameInput}
                            value={name}
                            onChange={this.onChangeName}
                            onBlur={this.onBlurName}
                            name='name'
                            type='text'
                            placeholder='Name'/>
                        <span className='input__err'>{showErrorName ? errName : null}</span>

                        <i className={errIconNumber}></i>
                        <input
                            style={styleNumberInput}
                            value={number}
                            onChange={this.onChangeNumber}
                            onBlur={this.onBlurNumber}
                            name='number'
                            type='tel'
                            placeholder='Number'/>
                        <span className='input__err'>{showErrorNumber ? errNumber : null}</span>

                        <button type='submit' onClick={this.onSubmitOrder}>order<i className="fa fa-arrow-right"></i>
                        </button>
                    </form>
                    <div className='nav__burger rotate' onClick={this.closeModal}>
                        <span></span>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
