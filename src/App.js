import React, {Component} from 'react';
import Navbar from './components/Navbar/Navbar';
import Note from './components/Note/Note'
import NoteForm from './components/NoteForm/NoteForm';
import {DB_CONFIG} from "./Config/config";
import firebase from 'firebase/app';
import 'firebase/database';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import AppBar from 'material-ui/AppBar';
import Paper from 'material-ui/Paper';
import './App.css';

class App extends Component {

    constructor(props) {
        super(props);
        this.addNote = this.addNote.bind(this);
        this.removeNote = this.removeNote.bind(this);

        this.app = firebase.initializeApp(DB_CONFIG);
        this.database = this.app.database().ref().child('notes');

        // set up react state of our component
        this.state = {
            notes: [],
        }
    }

    componentWillMount = () => {
        const previousNotes = this.state.notes;
        // data snapshot
        this.database.on('child_added', snap => {
            previousNotes.push({
                id: snap.key,
                noteContent: snap.val().noteContent,
            });
            this.setState({
                notes: previousNotes
            })
        });

        this.database.on('child_removed', snap => {
            for (let i = 0; i < previousNotes.length; i++) {
                if (previousNotes[i].id === snap.key) {
                    previousNotes.splice(i, 1);
                }
            }

            this.setState({
                notes: previousNotes
            })
        })
    };

    addNote(note) {
        this.database.push().set({noteContent: note});
    };

    removeNote = (noteId) => {
        this.database.child(noteId).remove();
    };

    render() {
        return (
            <MuiThemeProvider>
                <Navbar/>
                <div className="notesBody">
                    {
                        this.state.notes.map((note) => {
                            return (
                                <Paper zDepth={1}>
                                    <Note
                                        noteContent={note.noteContent}
                                        noteId={note.id}
                                        key={note.id}
                                        removeNote={this.removeNote}
                                    />
                                </Paper>
                            )
                        })
                    }
                </div>
                <div className="footer">
                    <NoteForm addNote={this.addNote}/>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default App;
