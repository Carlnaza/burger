const React = require('react')

const Container = props => {
    return (
        <div className="row ml-2 mr-2">
                {props.children}  
        </div>
    )
}

module.exports = Container