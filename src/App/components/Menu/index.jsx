import React, { useState, useRef, useEffect } from 'react';
import logo from 'Assets/Images/logo/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';
import './style.css';

function Header() {
    const genre = require('../../genre.json')
    const [isSticky, setSticky] = useState(false)
    const element = useRef(null)
    const handleScroll = () => {
        window.scrollY > element.current.getBoundingClientRect().top ?
            setSticky(true)
        :
            setSticky(false)
    }
    useEffect(()=> {
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener("scroll", () => handleScroll)
        }
    })
    const dispatch = useDispatch()
    const handleSidebar = () => {
        dispatch({type: "SIDEBAR_SHOW", payload: true})
    }
    return (
        <div className="menu--header">
            <div className="container-fluid bg-primary">
                <div className="row py-1">
                    <div className="col-5">
                        <div className="row">
                            <div className="col logo">
                                <Link to="/">
                                    <img src={logo} alt="my-logo"/>
                                </Link>
                            </div>
                            <div className="col-auto my-auto menu active">
                                <Link to="/">
                                    <FontAwesomeIcon className="mr-2" icon={["fa", "home"]} />
                                    Home
                                </Link>
                            </div>
                            <div className="col-auto my-auto menu">
                                <Link to="/daftar-novel">
                                    <FontAwesomeIcon className="mr-2" icon={["fa", "clipboard-list"]} />
                                    Daftar Novel
                                </Link>
                            </div>
                            <div className="col-auto my-auto menu">
                                <Link to="/daftar-novel">
                                    <FontAwesomeIcon className="mr-2" icon={["fa", "fire-alt"]} />
                                    Hot Novel
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-auto my-auto menu-right ml-auto text-white">
                        <button className="text-center mr-2">
                            <FontAwesomeIcon icon={["fa", "search"]} />
                        </button>
                        <button onClick={handleSidebar} className="text-center">
                            <FontAwesomeIcon icon={["fa", "user"]} />
                        </button>
                    </div>
                </div>
            </div>
            <div ref={element} className={`container-fluid ${isSticky && 'sticky'}`}>
                <div className="row bg-light">
                    <div className="col-12">
                        <Swiper
                            style={{zIndex: "99"}}
                            className="pb-2"
                            slidesPerView={10}
                            spaceBetween={5}
                            scrollbar={{ draggable: true }}>
                                {
                                    genre.map((data, i) =>
                                        <SwiperSlide key={i} className="font-14 py-1 text-center">
                                            <Link className="text-secondary " to="/" style={{fontWeight: "600"}}>
                                                {data}
                                            </Link>
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

export default Header
