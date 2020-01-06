# react-profile

This is Profile web app of Ravikiran Gambhire

In this app react js is used as front end
In this app admin panel also included from which user can see all contact requests sent by peoples.
code to update state from child component in parent component

class Parent extends React.Component {
    state = {text: ""}

    updateText = text => {
        this.setState({text: text})
    }

    render () {
        return (<Child updateText={this.updateText}>)
    }
}

class Child extends React.Component {
    render () {
        return (
            <button 
                onClick={
                    () => this.props.updateText("updated state from child component")
                }
            >Update State</button>
        )
    }
}
