import React from 'react';
import { Banner } from 'App/components';
import { NovelEntry } from 'App/includes';
import './style.css';

function Home(props) {
    const listnovel = require('../../list-novel').default
    return (
        <>
            <Banner />
            <div className="content_list">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <div className="w-100 border-bottom section_title">
                                <h5>Rekomendasi Novel</h5>
                            </div>
                        </div>
                        <div className="col-12">
                            <NovelEntry {...props} novel={listnovel} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="w-100 border-bottom section_title">
                                <h5>Novel Complete</h5>
                            </div>
                        </div>
                        <div className="col-12">
                            <NovelEntry {...props} novel={listnovel} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
