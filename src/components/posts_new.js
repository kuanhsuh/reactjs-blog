import React, { Component } from 'react';
import { Form, Field, reduxForm } from 'redux-form';
import { createPost } from '../actions/index';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';



const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div className={ `${ touched && error && 'has-danger'}`}>
    <label>{label}</label>
    <div>
      <input className='form-control' {...input} placeholder={label} type={type}/>
      {touched && error && <span className="text-help">{error}</span>}
    </div>
  </div>
)

const renderTextField = ({ input, label, type, meta: { touched, error } }) => (
  <div className={ `${ touched && error && 'has-danger'}`}>
    <label>{label}</label>
    <div>
      <textarea rows="10" className="form-control" {...input} placeholder={label} type={type}/>
      {touched && error && <span className="text-help">{error}</span>}
    </div>
  </div>
)

class PostsNew extends Component {



  onSubmit(props){
    this.props.createPost(props)
      .then(()=>{
        this.context.router.history.push('/')
      })
  }
  render() {
    const { handleSubmit, pristine, reset, submitting } = this.props
    return (
      <Form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <h3>Create A New Post</h3>
        <Field name="title" type="text" component={renderField} label="Title"/>
        <Field name="categories" type="text" component={renderField} label="Categories"/>
        <Field name="content" type="textarea" component={renderTextField} label="Content"/>
        <br/>
        <div>
         
        <button type="submit" disabled={pristine || submitting} className="btn btn-primary">Submit</button>
        {' '}
        <button type="button" disabled={pristine || submitting} className="btn btn-warning" onClick={reset}>Clear Values</button>
        {' '}
        <Link to='/' className='btn btn-danger'>Cancel</Link>
        </div>
      </Form>
    );
  }
}

PostsNew.contextTypes = {
  router: PropTypes.object
};

const validate = (values) => {
  const errors = {};

  if(!values.title){
    errors.title= 'Enter a Title'
  }

  if(!values.categories){
    errors.categories= 'Enter a Categories'
  }

  if(!values.content){
    errors.content= 'Enter some content'
  }
  return errors;
}


export default connect(null, {createPost})(reduxForm({
  form: 'PostsNew',
  validate
})(PostsNew));
