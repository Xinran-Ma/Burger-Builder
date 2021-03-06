import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom'
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary'
import { connect } from 'react-redux'
import ContactData from './ContactData/ContactData'

class Checkout extends Component {

    checkoutCancelledHandler = () => {
        this.props.history.goBack();
    }

    checkoutContinuedHandler = () => {
        this.props.history.replace('/checkout/contact-data')
    }

    render () {
        let summary = <Redirect to="/" />
        
        if(this.props.ings) {
            const purchasedRedirect = this.props.purchased ? <Redirect to='/' /> : null;
            summary = (
                <div>
                    {purchasedRedirect}
                    <CheckoutSummary 
                        ingredients={this.props.ings}
                        checkoutCancelled={this.checkoutCancelledHandler}
                        checkoutContinued={this.checkoutContinuedHandler} />
                    <Route 
                        path={this.props.match.path + '/contact-data'} 
                        component={ContactData} /> 

                    {/* 
                        The following code can't pass props to the child component. So instead of using 'component' in the router,
                        we can also use 'render' to render a component with passing props.
                    
                    <Route 
                        path={this.props.match.path + '/contact-data'} 
                        component={ContactData} />  */}
                </div>
            )
        }
        return (
            <div>
                {summary}
                
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        ings: state.burgerBuilder.ingredients,
        purchased: state.order.purchased
    }
}

export default connect( mapStateToProps )(Checkout);