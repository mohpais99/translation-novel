import { DetailEntry } from 'App/includes';
import React, { useState, useEffect } from 'react';

const filterData = (params) => {
    const listnovel = require('App/list-novel').default
    const filteredElements = listnovel.filter(e => e.slug.includes(params))
    return filteredElements
}

function Detail(props) {
    const [loading, setLoading] = useState(true)
    const [detail, setdetail] = useState()
    useEffect(() => {
        const {params} = props.match.params
        const unsubscribe = filterData(params)
        if(unsubscribe.length > 0 ) {
            setLoading(false)
            return setdetail(unsubscribe[0])
        }
        return () => unsubscribe
    }, [])
    return (
        <div className="container-fluid mt-3">
            <div className="row">
                {
                    loading ?
                        <div className="col-12 py-5 text-center">
                            <div className="spinner-border text-primary" role="status">
                                <span className="sr-only">Loading...</span>
                            </div>
                            <div className="spinner-border text-primary" role="status">
                                <span className="sr-only">Loading...</span>
                            </div>
                            <div className="spinner-border text-primary" role="status">
                                <span className="sr-only">Loading...</span>
                            </div>
                        </div>
                    :
                        <DetailEntry {...detail} />
                }
            </div>
        </div>
    )
}

export default Detail
