import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';

class Navbar extends Component {
    state = {
        open: false
    };

    openHandler = () => {
        this.setState({open: true});
    };

    closeHandler = () => {
        this.setState({open: false});
    };

    render() {
        return (
            <div>
                <AppBar
                    title="Pixabay API Search"
                    onLeftIconButtonClick={this.openHandler}
                    zDepth={2}
                />
                <Drawer
                    open={this.state.open}
                    style={{alignContent: 'center'}}
                    zDepth={2}
                >
                    <MenuItem>Menu Item 1</MenuItem>
                    <MenuItem>Menu Item 2</MenuItem>
                    <MenuItem>Menu Item 3</MenuItem>
                    <br/>
                    <RaisedButton
                        primary={true}
                        label="Close Menu"
                        onClick={this.closeHandler}
                        fullWidth={true}
                    />
                </Drawer>
            </div>
        )
    }
}

export default Navbar;