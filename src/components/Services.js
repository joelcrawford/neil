import '../assets/sass/services.scss'
import React from 'react'
export default ({ services }) => {
    if (!services || !services.data) {
        return null
    }
    const listedServices = services.data.map(s => {
        return (
            <li key={s.acf.service_title}>
                <i className="fad fa-axe list-icon" />
                <span>{s.acf.service_title}</span>
                <p
                    className="meta-services"
                    dangerouslySetInnerHTML={{
                        __html: s.acf.service_description,
                    }}
                />
            </li>
        )
    })
    return <ul className="list-header">{listedServices}</ul>
}
