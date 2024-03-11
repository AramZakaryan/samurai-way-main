import React from "react";
import {log} from "node:util";

type ProfileStatusPropsType = {
    status: string
}

export class ProfileStatus extends React.Component<ProfileStatusPropsType> {

    state = {
        editMode: false
    }


    activateEditModeHandler = () => {
        this.setState({
            editMode: true
        })
    }

    deactivateEditModeHandler = () => {
        this.setState({
            editMode: false
        })
    }

    render() {
        return (
            <div>
                {!this.state.editMode
                    ? <div>
                        <span onDoubleClick={this.activateEditModeHandler}>
                            {this.props.status}
                        </span>
                    </div>
                    : <div>
                        <input value={this.props.status}
                               onBlur={this.deactivateEditModeHandler}
                               autoFocus={true}
                        />
                    </div>
                }
            </div>
        )
    }
}