import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { RowsEntry, ColumnEntry } from 'App/includes';
import React, { useState } from 'react';
import './style.css';

function List() {
    const [grid, setGrid] = useState('column')
    const listnovel = require('../../list-novel').default
    return (
        <div className="container-fluid mt-3">
            <div className="row">
                <div className="col-12 mb-2">
                    <div className="row info py-2 mx-2 my-auto border-bottom">
                        <div className="col pl-0">
                            <div className="grid">
                                <div onClick={() => setGrid('column')}  className={`column ${grid === 'column' && 'active'}`}>
                                    <FontAwesomeIcon icon={["fa", "th"]} />
                                </div>
                                <div onClick={() => setGrid('rows')} className={`rows ${grid === 'rows' && 'active'}`}>
                                    <FontAwesomeIcon icon={["fa", "th-list"]} />
                                </div>
                            </div>
                        </div>
                        <div className="col my-auto">
                            <span>Showing 12 Novel of 40 Result</span>
                        </div>
                        <div className="col-auto my-auto pr-0">
                            <button className="btn btn-sm btn-primary text-white">
                                <FontAwesomeIcon icon={["fa", "sliders-h"]} />
                            </button>
                        </div>
                    </div>
                </div>
                <div className="col-12">
                    <div className="row px-2">
                        {/* {
                            listnovel.map((data, i) => 
                                <ColumnEntry key={i} {...data} />
                            )
                        } */}
                        {
                            listnovel.map((data, i) => 
                                grid === 'column' ? 
                                    <ColumnEntry key={i} {...data} />
                                :
                                    <RowsEntry key={i} {...data} />
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default List
