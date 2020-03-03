const React = require('react')

const Jumbotron = () => {
    return (
        <div className="jumbotron jumbotron-fluid bg-warning">
            <div className="container d-flex justify-content-center">
                <h1 className="display-4">BOIGAS</h1>
            </div>
            <div className="container d-flex justify-content-center">
              <img src="./assets/images/burger-vector.png" width="250" height="250" alt="burger"/>                
            </div>
        </div>
    )
}

module.exports = Jumbotron