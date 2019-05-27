import React from 'react';
import Modal from '../modal';
import {Link} from 'react-router-dom';
import history from '../../history';
import {connect} from 'react-redux';
import {deleteNote , fetchNote } from '../../actions'
class NoteDelete extends React.Component{
    componentDidMount(){
        this.props.fetchNote(this.props.match.params.id)
    }
    deleteNote = ()=>{
     this.props.deleteNote(this.props.match.params.id);
    }

    renderActions(){
       return(
           /*<React.Fragment> */
           /*<button className="ui negative button">Delete</button>*/
           /*<button className="ui button">Cancel</button>*/
           /*</React.Fragment>*/
           <>
               <button onClick={this.deleteNote} className="ui negative button">Delete</button>
               <Link to="/" className="ui button">Cancel</Link>
           </>
       );
   }
   renderContent(){
        if(!this.props.note){
            return " Are You Sure You Want To Delete Note?"
        }
        return ` Are You Sure You Want To Delete Note with title : ${this.props.note.title}`
   }
    render(){

        return(<div>
            <Modal onDismiss = {()=> history.push('/')} title="Delete Note" content={this.renderContent()} actions={this.renderActions()}/>
        </div>)
    }

};
 const mapStateToProps = (state , ownProps)=>{
     return{
         note: state.notes[ownProps.match.params.id]
     }
 }
export default connect(mapStateToProps , {deleteNote , fetchNote }) (NoteDelete)