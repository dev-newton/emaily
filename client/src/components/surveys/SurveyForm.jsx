import React, { Component } from "react";
//import _ from "lodash";
import { reduxForm, Field } from "redux-form";
import { Link } from "react-router-dom";
import SurveyField from "./SurveyField";
import validateEmails from "../../utils/validateEmails";
import formFields from "./formFields";

class SurveyForm extends Component {
  renderFields() {
    // return _.map(FIELDS, ({ label, name }) => {
    //   return (
    //     <Field component={SurveyField} type="text" label={label} name={name} />
    //   );
    // });
    return formFields.map(({ label, name }, i) => {
      return (
        <Field
          key={i}
          component={SurveyField}
          type="text"
          label={label}
          name={name}
        />
      );
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
          {this.renderFields()}
          <Link to="/surveys" className="red btn-flat white-text">
            Cancel
          </Link>
          <button type="submit" className="teal btn-flat right white-text">
            Next <i className="material-icons right">done</i>
          </button>
        </form>
      </div>
    );
  }
}
function validate(values) {
  const errors = {};

  errors.recipients = validateEmails(values.recipients || "");
  // errors.title = validateInput(values.title, "Title");

  formFields.forEach(({ name }) => {
    // errors[name] = validateInput(values[name], name);
    if (!values[name]) {
      errors[name] = "You must provide the " + name;
    }
  });

  return errors;
}

export default reduxForm({
  validate,
  form: "surveyForm",
  destroyOnUnmount: false
})(SurveyForm);
