import React from 'react'

export default function CartColumns () {
    return (
        <div className="container-fluid text-center d-none d-lg-block">
            <div className="row">
                <div className="col-10 mx-auto col-lg-2">
                    <p className="lead text-uppercase">produts</p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p className="lead text-uppercase">name of product</p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p className="lead text-uppercase">price</p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p className="lead text-uppercase">quantity</p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p className="lead text-uppercase">remove</p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p className="lead text-uppercase">total</p>
                </div>
            </div>
        </div>
    )
}
