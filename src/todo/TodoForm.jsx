import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import {add, changeDescription, search, clear} from './todoAction'
import Grid from '../template/Grid'
import IconButton from '../template/IconButton'

class TodoForm extends Component {
    constructor(props) {
        super(props)
        this.keyHandler = this.keyHandler.bind(this)
        console.log(this.props)
    }

    componentDidMount(){
        this.props.search()
    }

    keyHandler(e) {
        const { add, clear, search, description } = this.props
        if (e.key === 'Enter') {
            e.shiftKey ? search() : add(description)
        } else if (e.key === 'Escape') {
            clear()
        }
    }
    render(){
        const {add, search, description} = this.props
        return(
            <div role='form' className='todoForm'>
            <Grid cols='12 9 10'>
                <input id='description' className='form-control' placeholder='Adicione uma tarefa' 
                onChange = {this.props.changeDescription}
                onKeyUp={this.keyHandler}
                value = {this.props.description}/>
           </Grid>
            <Grid cols='12 3 2'>
                <IconButton style='primary' icon='plus' onClick={() => add(description)}/>
                <IconButton style='info' icon='search' onClick={() => search()}/>
                <IconButton style='danger' icon='close' onClick={() => this.props.clear()}/>
            </Grid>
        </div>
        )
    }
}

const mapStateToProps = state => ({description: state.todo.description})
const mapDispatchToProps = dispatch => bindActionCreators({ add, changeDescription, search, clear }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(TodoForm)