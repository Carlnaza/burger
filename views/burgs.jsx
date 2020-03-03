const React = require('react')
const Default = require('./layouts/default.jsx')
const Jumbotron = require('./components/jumbotron.jsx')
const Container = require('./components/container.jsx')
const NotEaten = require('./components/burginput.jsx')
const Eaten = require('./components/devoured.jsx')
const Input = require('./components/input.jsx')

const Burgs = () => {
    return (
        <Default>
            <Jumbotron />
                <Container>
                    <NotEaten />
                    <Input />
                    <Eaten />
                </Container>
        </Default>
    )
}

module.exports = Burgs