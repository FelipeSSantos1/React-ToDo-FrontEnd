import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import Grid from '../template/grid'
import IconButton from '../template/iconButton'
import {changeDescription, search, add, clear, searchLocal} from './taskActions'

const mapStateToProps = state => ({description: state.todo.description})
const mapDispatchToProps = dispatch => bindActionCreators({changeDescription, search, add, clear, searchLocal}, dispatch)


class taskForm extends Component { 
  constructor(props) {
    super(props);
    this.keyHandler = this.keyHandler.bind(this);
  }

  componentWillMount() {
      this.props.search()
  }

  keyHandler(e){
    const {add, search, clear, description} = this.props;
    if (e.key === 'Enter') {
        e.shiftKey ? search() : add(description);
    } else if (e.keyCode == 27 || e.keyCode == 8 || e.keyCode == 46) {
        clear()
    }

  }

  render() {
    const {add, search, description, searchLocal} = this.props
    return (
        <div id="form" className="taskForm">
            <Grid cols="12 9 10">
                <input id="description" className="form-control" 
                    placeholder="Adicione uma Tarefa" 
                    value={description}
                    onKeyUp={this.keyHandler}
                    onChange={this.props.changeDescription} />
            </Grid>
            <Grid cols="12 3 2">
                <IconButton icon="plus" style="primary" onClick={() => add(description)} />
            </Grid>
        </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(taskForm)
