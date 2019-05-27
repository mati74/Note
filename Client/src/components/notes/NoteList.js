import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom'
import {fetchNotes} from '../../actions'

class NoteList extends React.Component{

    componentDidMount() {
    this.props.fetchNotes();
    }



    renderAdmin(note){
        if(note.userId === this.props.currentUserId){
            return(<div className="right floated content">
                <Link to={`/notes/edit/${note.id}`} className="ui button primary">Edit</Link>
                <Link to={`/notes/delete/${note.id}`} className="ui button negative">Delete</Link>
            </div>)
        }
    }
    renderList(){
        return this.props.notes.map(note =>{
            return(<div className="item" key={note.id}>
                {this.renderAdmin(note)}
                <i className="large middle aligned icon camera"/>
                <div className="content">
                    <Link to={`/notes/${note.id}`}> {note.title}</Link>
                    <div className="description">
                        {note.description}
                    </div>
                </div>
            </div>)
        })
    }

    renderCreate(){
        if(this.props.isSignedIn){
            return(
                <div style={{textAlign : 'right'}}>
                    <Link to="/notes/new" className="ui button primary">Create Note</Link>
                </div>
            )
        }
    }

    render(){
        return(<div>
        <h2>Notes</h2>
            <div className="ui celled list">
                {this.renderList()}
            </div>
            {this.renderCreate()}
        </div>)
    }
}
const mapStateToProps = (state)=>{
    return{
        notes : Object.values(state.notes) ,
        currentUserId : state.auth.userId ,
        isSignedIn : state.auth.isSignedIn
    }
}
export default connect(mapStateToProps, {fetchNotes})(NoteList)