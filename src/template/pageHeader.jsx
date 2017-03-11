import React from 'react'

export default props => (
    <div className="row wrapper border-bottom white-bg page-heading">
        <div className="col-lg-9">
            <h1>{props.name}</h1>
            <p className="text-muted">{props.small}</p>
        </div>
    </div>
)