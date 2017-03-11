import React from 'react'

import PageHeader from '../template/pageHeader'
import TaskForm from './taskForm'
import TaskList from './taskList'

export default props => (
    <div className="wrapper wrapper-content">
        <div className="container" >
            
            <div className="row ibox-content m-t-sm">
                <h3>Formulário</h3>
                <TaskForm  />

                <span>&nbsp;</span>
                <hr className="hr-line-dashed" />
                    
                <h3>Tarefas</h3>
                <TaskList  />

            </div>

        </div>
    </div>
)