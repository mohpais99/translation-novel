import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import './style.css';

function Sidebar(props) {
    const history = useHistory()
    const dispatch = useDispatch()

    const handleSidebar = () => {
        dispatch({type: "SIDEBAR_SHOW", payload: false})
    }

    const handleHistory = (link) => {
        handleSidebar()
        history.push(link)
    }
    return (
        <div className={`sidebar--overlay ${props.status && 'active'}`}>
            <div className="sidenav">
                <div className="w-100 sideheader">
                    <div className="row">
                        <div className="col-8">
                            <span className="d-block font-14 mb-2" style={{fontWeight: "500"}}>Sign Up Now for Free Access</span>
                            <button className="side-btn side-outline mb-2">SIGN UP</button>
                            <span className="text-white font-12">
                                Already a member? &nbsp;
                                <Link className="text-white" to="/">Login here</Link>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="w-100 sidemenu border-bottom px-2 mb-2">
                    <div className="icon">
                        <FontAwesomeIcon icon={["fa", "sign-in-alt"]} />
                    </div>
                    <div className="menu my-auto">
                        <span>Sign In</span>
                        <span className="text-success ml-1">FREE</span>
                    </div>
                </div>
                <div onClick={() => handleHistory('/')} className="w-100 sidemenu border-bottom px-2">
                    <div className="icon">
                        <FontAwesomeIcon icon={["fa", "home"]} />
                    </div>
                    <div className="menu my-auto">
                        <span>Beranda</span>
                    </div>
                </div>
                <div onClick={() => handleHistory('/daftar-novel')} className="w-100 sidemenu border-bottom px-2">
                    <div className="icon">
                        <FontAwesomeIcon icon={["fa", "clipboard-list"]} />
                    </div>
                    <div className="menu my-auto">
                        <span>Daftar Novel</span>
                    </div>
                </div>
                <div className="w-100 sidemenu border-bottom px-2">
                    <div className="icon">
                        <FontAwesomeIcon icon={["fa", "fire-alt"]} />
                    </div>
                    <div className="menu my-auto">
                        <span>Hot Novel</span>
                    </div>
                </div>
                <div className="w-100 sidemenu border-bottom px-2">
                    <div className="icon">
                        <FontAwesomeIcon icon={["fa", "plus-square"]} />
                    </div>
                    <div className="menu my-auto">
                        <span>Novel Terbaru</span>
                    </div>
                </div>
                <div onClick={handleSidebar} className="close"><span>X</span></div>
            </div>
        </div>
    )
}

export default Sidebar
