import React from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function ColumnEntry(props) {
    return (
        <div className="col-6 col-md-2 my-3">
            <div className="novel">
                <div className="novel_thumb" style={{height: `${props.width < 488 ? '200px': '320px'}`}}>
                    <Link to={`/novel/${props.slug}`}>
                        <img className="shadow" src={props.image} alt="poster-novel" />
                    </Link>
                    <div className="hot_box">
                        <span className="hot-label">BEST SALLER</span>
                    </div>
                </div>
                <div className="novel_content text-center mt-2">
                    <h6 className="mb-0">
                        <Link style={{fontSize: `${props.width < 488 ? '10px': '14px'}`}} to={`/novel/${props.slug}`}>
                            {
                                props.title.length > 25 ?
                                    props.title.substring(0, 25) + '...'
                                :
                                    props.title
                            }
                        </Link>
                    </h6>
                    <div className="rating mb-2">
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
