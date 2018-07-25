import React, {Component} from 'react';
import PropTypes from 'prop-types';
import FlatButton from 'material-ui/FlatButton';
import Divider from 'material-ui/Divider';


class Note extends Component {
    constructor(props) {
        super(props);
        this.noteContent = props.noteContent;
        this.noteId = props.noteId;
        this.handleRemoveNote = this.handleRemoveNote.bind(this);
    }

    handleRemoveNote = (id) => {
        this.props.removeNote(id);
    };

    render(props) {
        return (
            <div>
                    <p
                        className="noteContent"
                        style={{padding: 16}}
                    >
                        {this.noteContent}
                    </p>
                    <Divider/>
                    <FlatButton
                        label="Completed!"
                        secondary={true}
                        onClick={() => this.handleRemoveNote(this.noteId)}
                    />
            </div>
        )
    }
}

Note.propTypes = {
    noteContent: PropTypes.string
};

export default Note;