import React from 'react'
import PropTypes from 'prop-types'

function index(name) {
    return (
        <div>
            <h1 className='webdesign'>WEB DESIGN, {name}</h1>
        </div>
    )
}

index.propTypes = {
    name: PropTypes.string
}

export default index

