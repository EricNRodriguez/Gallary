import React from "react";

class SearchBar extends React.Component {

    state = {submission: ""};

    onFormSubmit = e => {
        e.preventDefault();
        this.props.onSubmit(this.state.submission);
        this.setState({submission: ""});
    }

    render() {
        return (
            <div className="ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <label> Pic Search </label>
                        <input
                            type="text"
                            value={this.state.submission}
                            onChange={e => {this.setState({submission: e.target.value});}}
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;