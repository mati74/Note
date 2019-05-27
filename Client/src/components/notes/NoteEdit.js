import React from 'react';
import {connect} from 'react-redux';
import {fetchNote , editNote} from "../../actions";
import NoteForm from './NoteForm';
import _ from 'lodash'


class NoteEdit extends React.Component{
    componentDidMount(){
        this.props.fetchNote(this.props.match.params.id)
    }
    onSubmit=(formValues)=>{
        this.props.editNote(this.props.match.params.id , formValues)
    }


    render(){
        if(!this.props.note){
            return <div>...loading</div>
        }
        // return(<StreamForm initialValues={this.props.stream}/>)

        // return(<StreamForm onSubmit={this.onSubmit} initialValues={{title : this.props.stream.title , description : this.props.stream.description}}/>)
        return(
            <div>
                <h3>Edit Stream</h3>
                <NoteForm onSubmit={this.onSubmit} initialValues={_.pick(this.props.note , 'title' , 'description')}/>
            </div>)

    }
}


const mapStateToProps= (state , ownProps)=>{
    return{
        note : state.notes[ownProps.match.params.id]
    }
}
export default connect(mapStateToProps , {fetchNote , editNote})(NoteEdit)