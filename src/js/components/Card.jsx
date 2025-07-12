import React from "react";


const Card = () => {
    return (

        <div className="col">
            <div class="card h-100 rounded">
                <img src="https://picsum.photos/200/150?random=1" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title d-flex justify-content-center">Card title</h5>
                    <p className="card-text text-center">This is a random picture number one and his origin is the web page lorem picsum.</p>
                </div>
                <hb></hb>
                <div className="card-footer d-flex justify-content-center">
                    <a className="btn btn-primary btn-lg w-auto text-center fs-6 fw-semibold" href="#" role="button">Find Out More!</a>
                </div>
            </div>
        </div>
    )
}

export default Card;