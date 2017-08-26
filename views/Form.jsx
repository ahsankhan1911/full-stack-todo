import React from 'react'

export default class Forms extends React.Component {
    state = {
        firstName: '',
        lastName: '',
        username: '',
        email: '',
        password: '',

    }

render() {
    return (
        <form>

            <input   placeholder="First Name "value = {this.state.firstName}/>
        </form>
    )
}
}