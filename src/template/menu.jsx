import React from 'react'

export default props => (
    <div className="row border-bottom white-bg">
        <nav className="navbar navbar-static-top" role="navigation">
            <div className="navbar-header">
                <button aria-controls="navbar" aria-expanded="false" data-target="#navbar" data-toggle="collapse" className="navbar-toggle collapsed" type="button">
                    <i className="fa fa-reorder"></i>
                </button>
                <a href="#" className="navbar-brand"><i className="fa fa-check-square-o"></i> ToDo App</a>
            </div>
            <div className="navbar-collapse collapse" id="navbar">
                <ul className="nav navbar-nav">
                    <li>
                        <a aria-expanded="false" role="button" href="#/tasks"><i className="fa fa-tasks"></i> Tasks</a>
                    </li>
                    <li>
                        <a aria-expanded="false" role="button" href="#/about"><i className="fa fa-question-circle"></i> About</a>
                    </li>
                </ul>
                <ul className="nav navbar-top-links navbar-right">
                    <li>
                        <a href="#">
                            <i className="fa fa-sign-out"></i> Log out
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
)