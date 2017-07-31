import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import ImageInput from './ImageInput';
import serializeForm from 'form-serialize';

class CreateContact extends Component{
    submitHandler = (e) => {
        e.preventDefault();
        const value = serializeForm(e.target,{hash:true});
        if(this.props.onCreateContact)
            this.props.onCreateContact(value);
    }
    render(){
        return(
            <div>
                <Link to="/" className="close-create-contact">Close</Link>
                <form onSubmit={this.submitHandler} className="create-contact-form">
                    <ImageInput 
                        className="create-contact-avatar-input"
                        name="avatarURL"
                        maxHeight={64}
                        />
                    <div className="create-contact-details">
                        <input type="text" name="name" placeholder="name" />
                        <input type="text" name="email" placeholder="email" />
                        <button>Add</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default CreateContact