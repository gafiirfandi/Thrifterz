import React from 'react'
import { withRouter } from "react-router-dom";

import './menu-item.styles.scss'

const MenuItem = ({title, image, size, history, linkURL, match}) => {
    // console.log()
    return(
        <div className={`${size} menu-item`} onClick={() => history.push(`${match.url}${linkURL}`)}>
            
            <div className="background-image" style={{
                backgroundImage: `url(${process.env.PUBLIC_URL}/${image})`,
                visibility:'visible',    
            }}>
            </div>
            <div className="content">
                <h1 className="title">{title.toUpperCase()}</h1>
                <span className="subtitle">THRIFT NOW!</span>
            </div>
            
        </div>
    )
}

export default withRouter(MenuItem)