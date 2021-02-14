import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

function RowsEntry(props) {
    return (
        <div className="col-sm-6 col-md-4 my-3 grid">
            <div className="row">
                <div className="col-6">
                    <img style={{borderRadius: "8px"}} src={props.image} alt="image"/>
                </div>
                <div className="col-6 shadow py-1" style={{borderRadius: "8px"}}>
                    <Link className="h6 title font-rhd-bold mb-0" to="/">{props.title}</Link>
                    <div className="rating font-12 mb-1">
                        <FontAwesomeIcon className="on" icon={["fa", "star"]} />
                        <FontAwesomeIcon className="on" icon={["fa", "star"]} />
                        <FontAwesomeIcon className="on" icon={["fa", "star"]} />
                        <FontAwesomeIcon className="on" icon={["fa", "star"]} />
                        <FontAwesomeIcon icon={["fa", "star"]} />
                    </div>
                    <div className="w-100 font-12 d-inline-block">
                        {
                            props.genre.map((genre, i) => 
                                <span key={i} className="badge badge-secondary p-1 mr-1 mb-1">{genre}</span>
                            )
                        }
                    </div>
                    <div className="decription mt-3 font-12">
                        {props.description}
                    </div>
                    <ul className="action d-flex">
                        <li>
                            <Link className="btn btn-primary py-1" to="/">
                                <span className="font-12 font-weight-6 text-white">BACA</span>
                            </Link>
                        </li>
                        <li className="wishlist my-auto">
                            <Link className="" to="/">
                                <FontAwesomeIcon icon={["fa", "heart"]} />
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default RowsEntry
