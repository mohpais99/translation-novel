import React from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function ColumnEntry(props) {
    return (
        <div className="col-sm-6 col-md-2 my-3">
            <div className="novel border shadow" style={{borderRadius: "8px"}}>
                <div className="novel_thumb border">
                    <Link to={`/novel/${props.slug}`}>
                        <img src={props.image} alt="poster-novel" />
                    </Link>
                    <div className="hot_box">
                        <span className="hot-label">BEST SALLER</span>
                    </div>
                </div>
                <div className="novel_content text-center">
                    <h6 className="mb-0">
                        <Link to={`/novel/${props.slug}`}>
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
