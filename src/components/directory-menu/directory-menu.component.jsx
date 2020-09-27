import  React from 'react'

import './directory-menu.styles.scss'
import MenuItem from '../menu-item/menu-item.component'

class DirectoryMenu extends React.Component{

    constructor() {
        super()
        this.state = {
            section: [
                {
                    'title': 'Supreme',
                    'image': 'img/supreme.jpg',
                    'id': 1,
                    'linkURL': 'supreme',
                },
                {
                    'title': 'Off White',
                    'image': 'img/off-white.jpg',
                    'id': 2,
                    'linkURL': 'offwhite',
                },
                {
                    'title': 'Stussy',
                    'image': 'img/stussy.jpg',
                    'id': 3,
                    'linkURL': 'stussy',
                },
                {
                    'title': 'Champion',
                    'image': 'img/champion.jpg',
                    'id': 4,
                    'size' : 'large',
                    'linkURL': 'champion',
                },
                {
                    'title': 'Thrasher',
                    'image': 'img/thrasher.jpg',
                    'id': 5,
                    'size': 'large',
                    'linkURL': 'thrasher',
                },
            ]
        }
    }

    render() {
        return(
            <div className="directory-menu">
                {
                    this.state.section.map(({id, ...otherSectionProps}) => {
                        return <MenuItem key={id} {...otherSectionProps} />
                    })
                }
            </div>
        )
    }
}

export default DirectoryMenu