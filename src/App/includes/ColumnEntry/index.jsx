import React from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function ColumnEntry(props) {
    return (
        <div className="col-sm-6 col-md-2 my-2">
            <div className="novel border">
                <div className="novel_thumb border">
                    <Link to="">
                        <img src={props.image} alt="poster-novel" />
                    </Link>
                    <div className="hot_box">
                        <span className="hot-label">BEST SALLER</span>
                    </div>
                </div>
                <div className="novel_content text-center">
                    <h6 className="mb-0">
                        <Link to="/">
                            {
                                props.title.length > 25 ?
                                    props.title.substring(0, 25) + '...'
                                :
                                    props.title
                            }
                        </Link>
                    </h6>
                    <div className="rating">
                        <FontAwesomeIcon className="on" icon={["fa", "star"]} />
                        <FontAwesomeIcon className="on" icon={["fa", "star"]} />
                        <FontAwesomeIcon className="on" icon={["fa", "star"]} />
                        <FontAwesomeIcon className="on" icon={["fa", "star"]} />
                        <FontAwesomeIcon icon={["fa", "star"]} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ColumnEntry
