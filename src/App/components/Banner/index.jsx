import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { NewNovelEntry } from 'App/includes';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
import './style.css';

function Banner() {
    const novelentry = require('../../new-novel').default
    return (
        <div className="home">
            <div className="container-fluid d-none d-md-block" style={{zIndex: "2"}}>
                <div className="row">
                    <div className="col-12 mt-4">
                        <h4 className="font-rhd-bold text-dark text-uppercase">Novel Terbaru</h4>
                    </div>
                    <div className="col-12">
                        <Swiper
                            spaceBetween={20}
                            slidesPerView={3}
                            autoplay={{ delay: 3000 }}
                            pagination={{ clickable: true }}>
                            {
                                novelentry.map((data, i) => 
                                    <SwiperSlide key={i} className="card novel-terbaru">
                                        <div className="card-body">
                                            <div className="row">
                                                <div className="col-6">
                                                    <img src={data.image} alt="poster-novel" className="w-100" />
                                                </div>
                                                <div className="col-6 pl-1">
                                                    <Link to="/" className="title font-rhd-bold mb-0">{data.title}</Link>
                                                    <div className="rating font-12">
                                                        <FontAwesomeIcon className="on" icon={["fa", "star"]} />
                                                        <FontAwesomeIcon className="on" icon={["fa", "star"]} />
                                                        <FontAwesomeIcon className="on" icon={["fa", "star"]} />
                                                        <FontAwesomeIcon className="on" icon={["fa", "star"]} />
                                                        <FontAwesomeIcon icon={["fa", "star"]} />
                                                    </div>
                                                    <div className="w-100 font-12 d-inline-block">
                                                        {
                                                            data.genre.map((genre, i) => 
                                                                <span key={i} className="badge badge-secondary p-1 mr-1">{genre}</span>
                                                            )
                                                        }
                                                    </div>
                                                    <div className="decription mt-3 font-12">
                                                        {data.description}
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
                                    </SwiperSlide>
                                )
                            }
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner
