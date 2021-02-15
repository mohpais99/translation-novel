import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Comment } from 'App/molekuls';
import React from 'react'
import { Link } from 'react-router-dom'
import './style.css';

function DetailEntry(detail) {
    return (
        <div className="col-12 px-4" style={{borderRadius: "12px"}}>
            <div className="row">
                <div className="col-12 col-md-9 mb-3">
                    <div className="row">
                        <div className="col-sm-12 col-md-3">
                            <img className="w-100 shadow" src={detail.image} alt="poster-image" style={{borderRadius: "11px"}} />
                            <div className="w-100 font-12 mt-3 d-inline-block">
                                <div className="other-name mb-2">
                                    <div className="h6 mb-1"><b>Nama Lain</b></div>
                                    <span className="font-16">To be a power in The Shadows!</span>
                                </div>
                                <div className="type mb-2">
                                    <div className="h6 mb-1"><b>Tipe</b></div>
                                    <Link className="font-14" to='/'>Web Novel (JP)</Link>
                                </div>
                                <div className="genre mb-2">
                                    <div className="h6 mb-1"><b>Genre</b></div>
                                    {
                                        detail.genre.map((genre, i) => 
                                            <span key={i} className="badge badge-secondary p-1 mr-1 mb-1">{genre}</span>
                                        )
                                    }
                                </div>
                                <div className="author mb-2">
                                    <div className="h6 mb-1"><b>Penulis</b></div>
                                    <span className="font-16">Fuse</span>
                                </div>
                                <div className="novel-year mb-2">
                                    <div className="h6 mb-1"><b>Tahun Terbit</b></div>
                                    <span className="font-16">2013</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-9">
                            <div className="h4">{detail.title}</div>
                            <div className="rating">
                                <FontAwesomeIcon className="on" icon={["fa", "star"]} />
                                <FontAwesomeIcon className="on" icon={["fa", "star"]} />
                                <FontAwesomeIcon className="on" icon={["fa", "star"]} />
                                <FontAwesomeIcon className="on" icon={["fa", "star"]} />
                                <FontAwesomeIcon icon={["fa", "star"]} />
                                <span className="text-dark ml-1">4.0</span>
                            </div>
                            
                            <hr className="mt-1"/>
                            <div className="description px-2" style={{textAlign: "justify"}}>
                                Ideal for cold-weather training or work outdoors, the Chaz Hoodie promises superior warmth with every wear. Thick material blocks out the wind as ribbed cuffs and bottom band seal in body heat.Ideal for cold-weather training or work outdoors, the Chaz Hoodie promises superior warmth with every wear. Thick material blocks out the wind as ribbed cuffs and bottom band seal in body heat.Ideal for cold-weather training or work outdoors, the Chaz Hoodie promises superior warmth with every wear. Thick material blocks out the wind as ribbed cuffs and bottom band seal in body heat.Ideal for cold-weather training or work outdoors, the Chaz Hoodie promises superior warmth with every wear. Thick material blocks out the wind as ribbed cuffs and bottom band seal in body heat.
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-3">
                    <div className="row">
                        <div className="col-12">
                            <div className="w-100 bg-primary text-white p-2">
                                <div className="h6 mb-0"><b>Daftar Chapter</b></div>
                            </div>
                            <div className="w-100 chapter-list bg-light">
                                <ul className="border p-0">
                                    <Link to="/">
                                        <li className="py-2 px-3 border-bottom">
                                            Chapter 01
                                        </li>
                                    </Link>
                                    <Link to="/">
                                        <li className="py-2 px-3 border-bottom">
                                            Chapter 02
                                        </li>
                                    </Link>
                                    <Link to="/">
                                        <li className="py-2 px-3 border-bottom">
                                            Chapter 03
                                        </li>
                                    </Link>
                                    <Link to="/">
                                        <li className="py-2 px-3 border-bottom">
                                            Chapter 04
                                        </li>
                                    </Link>
                                    <Link to="/">
                                        <li className="py-2 px-3 border-bottom">
                                            Chapter 05
                                        </li>
                                    </Link>
                                    <Link to="/">
                                        <li className="py-2 px-3 border-bottom">
                                            Chapter 06
                                        </li>
                                    </Link>
                                    <Link to="/">
                                        <li className="py-2 px-3 border-bottom">
                                            Chapter 07
                                        </li>
                                    </Link>
                                    <Link to="/">
                                        <li className="py-2 px-3 border-bottom">
                                            Chapter 08
                                        </li>
                                    </Link>
                                    <Link to="/">
                                        <li className="py-2 px-3 border-bottom">
                                            Chapter 09
                                        </li>
                                    </Link>
                                    <Link to="/">
                                        <li className="py-2 px-3 border-bottom">
                                            Chapter 10
                                        </li>
                                    </Link>
                                    <Link to="/">
                                        <li className="py-2 px-3 border-bottom">
                                            Chapter 11
                                        </li>
                                    </Link>
                                    <Link to="/">
                                        <li className="py-2 px-3 border-bottom">
                                            Chapter 12
                                        </li>
                                    </Link>
                                    <Link to="/">
                                        <li className="py-2 px-3 border-bottom">
                                            Chapter 13
                                        </li>
                                    </Link>
                                    <Link to="/">
                                        <li className="py-2 px-3 border-bottom">
                                            Chapter 14
                                        </li>
                                    </Link>
                                    <Link to="/">
                                        <li className="py-2 px-3 border-bottom">
                                            Chapter 15
                                        </li>
                                    </Link>
                                    <Link to="/">
                                        <li className="py-2 px-3 border-bottom">
                                            Chapter 16
                                        </li>
                                    </Link>
                                    <Link to="/">
                                        <li className="py-2 px-3 border-bottom">
                                            Chapter 16
                                        </li>
                                    </Link>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetailEntry
