const React = require('react')

function Eaten() {
  return (
    <div className="col-md-4 col-sm-12 mt-2">
      <h6 id="isEaten">Burgers Eaten</h6>
      <ul className="list-group" id="eaten">
      </ul>
    </div>
  )
}

module.exports = Eaten