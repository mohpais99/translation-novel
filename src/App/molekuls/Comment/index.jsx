import React from 'react'
import './style.css'

function Comment() {
    return (
        <div className="w-100">
            <div className="h4 mb-0">Comments</div>
            <div className="comment mt-4 text-justify float-left"> 
                <img src="https://i.imgur.com/yTFUilP.jpg" alt="img-logo" className="rounded-circle" width="40" height="40" />
                <h4>Jhon Doe</h4> <span>- 20 October, 2018</span> <br />
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus numquam assumenda hic aliquam vero sequi velit molestias doloremque molestiae dicta?</p>
            </div>
        </div>
    )
}

export default Comment
