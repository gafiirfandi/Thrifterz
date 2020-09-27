import React from "react";
import './homepage.styles.scss'
import DirectoryMenu from '../../components/directory-menu/directory-menu.component'

export const HomePage = ({ history , match}) => {
    console.log(match)
    return(
        <div className="homepage">
            <h1 style={{
                fontFamily: 'Changa',
                color: 'white',
            }}>Thrifterz</h1>
            <DirectoryMenu />
        </div>
    )
}