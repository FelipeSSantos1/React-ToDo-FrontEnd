import React from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import ReactIntl, {IntlProvider, FormattedRelative, IntlMixin} from 'react-intl'

import {markAsDoneOrNot, deleteTask} from './taskActions'
import IconButton from '../template/iconButton';

const mapStateToProps = state => ({list: state.todo.list})
const mapDispatchToProps = dispatch => bindActionCreators({markAsDoneOrNot, deleteTask}, dispatch)

const taskList = props => {
    
    const renderRows = () => {
        const list = props.list || [];

        return list.map(todo => (
            <li key={todo._id}>
                <div className="btn-group">
                    <IconButton icon="check" hide={todo.done} style="primary btn-xs" onClick={() => props.markAsDoneOrNot(todo)} />
                    <IconButton icon="undo" hide={!todo.done} style="warning btn-xs" onClick={() => props.markAsDoneOrNot(todo)} />
                    <IconButton icon="trash-o" hide={!todo.done} style="danger btn-xs" onClick={() => props.deleteTask(todo)} />
                </div>
                <span className={todo.done ? "m-l-xs todo-completed checkTodo text-muted" : "m-l-xs checkTodo"} onClick={() => props.handleCheck(todo)}>{todo.description}</span>
                <IntlProvider locale="pt">
                    <span className="label label-success pull-right"><FormattedRelative value={todo.createdAt} /></span>
                </IntlProvider>
            </li>
        ));
    }

    return (
        <ul className="todo-list m-t ui-sortable">
            {renderRows()}
        </ul>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(taskList)