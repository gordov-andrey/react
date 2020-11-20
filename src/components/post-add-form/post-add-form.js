import React, {Component} from 'react';
import './post-add-form.css';

export default class PostAddForm extends Component {
    constructor(props) {
        super(props);
        this.onValueChange = this.onValueChange.bind();
    }

    onValueChange(e) {
        console.log(e.target.value);
    }

    render () {
        return (
            <form className='bottom-panel d-flex'>
                <input
                    type='text'
                    placeholder='О чем Вы думаете сейчас?'
                    className='form-control new-post-label'
                    onChange={this.onValueChange}
                ></input>
                <button
                    type='submit'
                    className='btn btn-outline-secondary'
                   >
                    Добавить
                </button>
            </form>
        )
    }
}
