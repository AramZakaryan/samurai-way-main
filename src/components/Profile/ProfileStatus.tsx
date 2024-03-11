import React, {RefObject} from "react";

type ProfileStatusPropsType = {
    status: null | string
    updateUserStatus: (status: null | string) => void

}

export class ProfileStatus extends React.Component<ProfileStatusPropsType> {

    componentDidUpdate(prevProps: Readonly<ProfileStatusPropsType>,
                       prevState: Readonly<typeof this.state>) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    state = {
        editMode: false,
        value: this.props.status
    }

    activateEditModeHandler = () => {
        this.setState({
            editMode: true
        })
    }

    // deactivateEditModeHandler = (ev: React.FocusEvent<HTMLInputElement>) => {
    deactivateEditModeHandler = (ev: React.FocusEvent<HTMLInputElement>) => {
        this.setState({
            editMode: false
        })
        // this.props.updateUserStatus(ev.currentTarget.value)
        this.props.updateUserStatus(this.state.value)
    }

    inputOnChangeHangler = (ev: React.FocusEvent<HTMLInputElement>) => {
        this.setState({
            value: ev.currentTarget.value
        })
    }

    render() {
        return (
            <div>
                {!this.state.editMode
                    ? <div>
                        <span onDoubleClick={this.activateEditModeHandler}>
                            {this.props.status || "There is no status"}
                        </span>
                    </div>
                    : <div>
                        {/*<input value={this.state.value?.toString()}*/}
                        <input value={this.state.value?.toString()}
                               onBlur={this.deactivateEditModeHandler}
                               autoFocus={true}
                               onChange={this.inputOnChangeHangler}
                        />
                    </div>
                }
            </div>
        )
    }
}