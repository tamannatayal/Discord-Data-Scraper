import PulseLoader from 'react-spinners/PulseLoader'
import React from 'react'

const override = {
    display: 'block',
    margin: '40px auto',
}

const Spinner = ({ loading }) => {
    return (
        < PulseLoader
            color='#fff'
            loading={loading}
            cssOverride={override}
            size={10}
        />
    )
}

export default Spinner
