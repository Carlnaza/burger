const React = require('react')

const Input = () => {
    return (
        <form className="col-lg-4 col-sm-12 mt-2">
            <div className="form-group m-2">
                <textarea className="form-control" id="textInput" rows="3" placeholder="Burger Names"></textarea>
            </div>
            <div className="text-center">
                <button type="button" className="btn btn-primary center" id="submit">Submit</button>
            </div>
        </form>
    )
}

module.exports = Input