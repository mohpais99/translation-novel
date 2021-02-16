import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Swiper, SwiperSlide } from 'swiper/react';
import './style.css';

function NovelEntry(props) {
    return (
        <Swiper
            className="pb-4"
            spaceBetween={20}
            slidesPerView={
                props.width > 488 ? 6 : 2
            }
            scrollbar={{ draggable: true }}>
                {
                    props.novel.map((data, i) => 
                        <SwiperSlide key={i} className="novel">
                            <div className="novel_thumb border" style={{height: `${props.width > 488 ? '320px' : '200px'}`}}>
                                <Link to="">
                                    <img src={data.image} alt="poster-novel"/>
                                </Link>
                                <div className="hot_box">
                                    <span className="hot-label">BEST SALLER</span>
                                </div>
                            </div>
                            <div className="novel_content text-center">
                                <h6 className="mb-0">
                                    <Link style={{fontSize: `${props.width < 488 ? '10px': '14px'}`}} to="/">
                                        {
                                            data.title.length > 25 ?
                                                data.title.substring(0, 25) + '...'
                                            :
                                                data.title
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
                        </SwiperSlide>
                    )
                }
                
        </Swiper>
        // <div className="novel col-sm-6 col-md-2">
        //     <div className="novel_thumb border">
        //         <Link to="">
        //             <img src={props.image} alt="poster-novel" />
        //         </Link>
        //         <div className="hot_box">
        //             <span className="hot-label">BEST SALLER</span>
        //         </div>
        //     </div>
        //     <div className="novel_content text-center">
        //         <h6 className="mb-0">
        //             <Link to="/">
        //                 {props.title}
        //             </Link>
        //         </h6>
        //         <div className="rating">
        //             <FontAwesomeIcon className="on" icon={["fa", "star"]} />
        //             <FontAwesomeIcon className="on" icon={["fa", "star"]} />
        //             <FontAwesomeIcon className="on" icon={["fa", "star"]} />
        //             <FontAwesomeIcon className="on" icon={["fa", "star"]} />
        //             <FontAwesomeIcon icon={["fa", "star"]} />
        //         </div>
        //     </div>
        // </div>
    )
}

export default NovelEntry
