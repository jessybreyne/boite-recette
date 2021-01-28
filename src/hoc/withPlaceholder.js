import React, { Component } from "react";

const withPlaceholder = WrappedComponent => (
    class HOC extends Component {
        render () {
            console.log('HOC')
            return (
                <WrappedComponent
                    placeholder='Nom du Chef'
                    {...this.props}
                />
            )
        }
    }
)

export default withPlaceholder