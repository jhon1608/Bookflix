import React, { Component } from 'react'

export default class IniciarSesion extends Component {
    render() {
        return (
            <div>
            <div className="col-md-6 offset-md-3 form-login">
            <div className="card card-body bg-dark  text-light " >
                <form >
                    <div className="form-group">
                       <input class="form-control" placeholder="UserName" ></input>
                    </div>
                    <div className="form-group">
                        
                        <input class="form-control" placeholder="Password"></input>
                    </div>
                    <div className="form-group">
                        <button  type="submit" className="btn btn-danger btn-lg btn-block">
                            LOGIN
                        </button>
                    </div>
                </form>
            </div>   
            </div>
            </div>
        )
    }
}
