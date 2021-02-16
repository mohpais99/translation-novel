import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import './style.css'

function Comment() {
    const [state, setstate] = useState({
        comment: '',
        rate: ''
    })
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(state);
    }
    return (
        <div className="w-100 bg-light fbcomment">
            <div className="header_comment pb-2">
                <div className="row">
                    <div className="col-md-6 text-left">
                    <span className="count_comment">264235 Comments</span>
                    </div>
                    <div className="col-md-6 text-right">
                    <span className="sort_title">Sort by &nbsp;</span>
                    <select className="sort_by">
                        <option>Top</option>
                        <option>Newest</option>
                        <option>Oldest</option>
                    </select>
                    </div>
                </div>
            </div>
            <div className="body_comment">
                <div className="row">
                    <div className="avatar_comment col-md-1 d-none d-lg-block">
                        <img src="https://static.xx.fbcdn.net/rsrc.php/v1/yi/r/odA9sNLrE86.jpg" alt="avatar"/>
                    </div>
                    <div className="box_comment col-12 col-md-11">
                        <form onSubmit={handleSubmit}>
                            <textarea onChange={(e) => setstate({...state, comment: e.target.value})} className="commentar" placeholder="Add a comment..."></textarea>
                            <div className="box_post">
                                <div className="pull-left">
                                    <FontAwesomeIcon className="mr-1 rate" icon={["fa", "star"]} />
                                    <select onChange={(e) => setstate({...state, rate: e.target.value})} className="sort_by">
                                        <option disabled>-- Rate --</option>
                                        <option>5</option>
                                        <option>4</option>
                                        <option>3</option>
                                        <option>2</option>
                                        <option>1</option>
                                    </select>
                                </div>
                                <div className="pull-right">
                                    <span className="d-md-none d-sm-block">
                                        <img src="https://static.xx.fbcdn.net/rsrc.php/v1/yi/r/odA9sNLrE86.jpg" alt="avatar" />
                                        <span className="ml-1 pt-1">Panjelo</span>
                                    </span>
                                    <button type="submit">Post</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="row">
                    <ul id="list_comment" className="col-md-12">
                        <li className="box_result row">
                            <div className="avatar_comment col-md-1 d-none d-md-block">
                                <img src="https://static.xx.fbcdn.net/rsrc.php/v1/yi/r/odA9sNLrE86.jpg" alt="avatar"/>
                            </div>
                            <div className="result_comment col-md-11">
                                <h4>Nath Ryuzaki</h4>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.</p>
                                <div className="tools_comment">
                                    <a className="like" href="#">Like</a>
                                        <span aria-hidden="true"> · </span>
                                    <a className="replay" href="#">Reply</a>
                                    <span aria-hidden="true"> · </span>
                                    <i className="fa fa-thumbs-o-up"></i> <span className="count">1</span> 
                                    <span aria-hidden="true"> · </span>
                                    <span>26m</span>
                                </div>
                                <ul className="child_replay">
                                    <li className="box_reply row">
                                        <div className="avatar_comment col-md-1 mr-1  d-none d-md-block">
                                            <img src="https://static.xx.fbcdn.net/rsrc.php/v1/yi/r/odA9sNLrE86.jpg" alt="avatar"/>
                                        </div>
                                        <div className="result_comment col-md-10">
                                            <h4>Sugito</h4>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.</p>
                                            <div className="tools_comment">
                                                <a className="like" href="#">Like</a>
                                                <span aria-hidden="true"> · </span>
                                                <a className="replay" href="#">Reply</a>
                                                <span aria-hidden="true"> · </span>
                                                <i className="fa fa-thumbs-o-up"></i> <span className="count">1</span> 
                                                <span aria-hidden="true"> · </span>
                                                <span>26m</span>
                                            </div>
                                            <ul className="child_replay"></ul>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="box_result row">
                            <div className="avatar_comment col-md-1 d-none d-md-block">
                                <img src="https://static.xx.fbcdn.net/rsrc.php/v1/yi/r/odA9sNLrE86.jpg" alt="avatar"/>
                            </div>
                            <div className="result_comment col-md-11">
                                <h4>Gung Wah</h4>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.</p>
                                <div className="tools_comment">
                                    <a className="like" href="#">Like</a>
                                    <span aria-hidden="true"> · </span>
                                    <a className="replay" href="#">Reply</a>
                                    <span aria-hidden="true"> · </span>
                                    <i className="fa fa-thumbs-o-up"></i> <span className="count">1</span> 
                                    <span aria-hidden="true"> · </span>
                                    <span>26m</span>
                                </div>
                                <ul className="child_replay"></ul>
                            </div>
                        </li>
                    </ul>
                    <button className="show_more" type="button">Load 10 more comments</button>
                </div>
            </div>
        </div>
    )
}

export default Comment
