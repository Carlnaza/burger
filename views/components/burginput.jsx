const React = require('react')


function notEaten() {
  return (
    <div className="col-md-4 col-sm-12 mt-2">
      <h6 id="notEaten">Click on a burger to devour it!</h6>
      <ul className="list-group" id="unEaten">
      </ul>
    </div>
  )
}

module.exports = notEaten