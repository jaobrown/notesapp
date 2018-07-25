import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const style = {

};

class NoteForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newNoteContent: "",
        };
        this.handleUserInput = this.handleUserInput.bind(this);
        this.writeNote = this.writeNote.bind(this);
    }

    // When user input changes, set the newNoteContent
    // to the value of whats in the input box.
    handleUserInput = (e) => {
        this.setState({
            newNoteContent: e.target.value, // the value of text input
        })
    };

    writeNote = () => {
        // call method that sets the noteContent for a ntoe to
        // the value of the input
        this.props.addNote(this.state.newNoteContent);

        // Set newNoteContent to empty string to empty text box
        this.setState({
            newNoteContent: '',
        });
    };

    render() {
        return (
            <MuiThemeProvider>
                <TextField
                    floatingLabelText="Add a New Note"
                    hintText="Note..."
                    fullWidth={true}
                    value={this.state.newNoteContent}
                    onChange={this.handleUserInput}
                />
                <RaisedButton
                    label="Add Note"
                    primary={true}
                    onClick={this.writeNote}
                    fullWidth={true}
                    style={style}
                />
            </MuiThemeProvider>
        )
    }
}

export default NoteForm;