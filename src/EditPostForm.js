import React, { Component } from 'react';

class EditPostForm extends Component {

    constructor(props) {
        super(props)

        this.state = {
            title: this.props.postData.title,
            description: this.props.postData.description,
            body: this.props.postData.body
        }

        this.handleCancel = this.handleCancel.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleCancel() {
        this.props.setIsEditingFalse()
    }
    
    handleSubmit(evt) {
        evt.preventDefault();
        const newEditPost = { ...this.state, comments: this.props.comments}
        this.props.triggerUpdatePost(this.props.postData.id, newEditPost);
        this.setState({
            title: "",
            description: "",
            body: ""
        });
        this.props.setIsEditingFalse();
    }

    handleChange(evt){
        this.setState({
            [evt.target.name]: evt.target.value
        });
    }

    render() {
        return (
            
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="title">Title:</label>
                <input id="title" 
                       name="title" 
                       value={this.state.title}
                       onChange={this.handleChange}
                       />
                <br />
                <label htmlFor="description">Description:</label>
                <input id="description" 
                       name="description" 
                       value={this.state.description}
                       onChange={this.handleChange}
                       />
                <br />
                <label htmlFor="body">Body:</label>
                <input id="body" 
                       type="textarea" 
                       name="body" 
                       value={this.state.body}
                       onChange={this.handleChange}
                       />
                <br />
                <button type="submit">Save</button>
                <button onClick={this.handleCancel}>Cancel</button>
            </form>
            
        );
    }
}

export default EditPostForm;