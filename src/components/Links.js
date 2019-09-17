import React from 'react'
import { iconLibrary } from '../store/utilities'

export default ({ links }) => {
    if (!links || !links.data[0]) {
        return null
    }

    const listedLinks = Object.entries(links.data[0].acf).map(l => {
        let matchedIcon = iconLibrary.find(i => i.id === l[0])
        let url = l[1]
        if (matchedIcon.prefix.length) {
            url = `${matchedIcon.prefix}:${url}`
        }
        return (
            <li key={l[0]}>
                <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`icon style2 ${matchedIcon.icon}`}
                >
                    <span className="label">{l[0]}</span>
                </a>
            </li>
        )
    })

    return <ul className="icons">{listedLinks}</ul>
}
