/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { FunctionComponent } from 'react';
import { Formik, FormikHelpers, Form, Field, ErrorMessage } from 'formik';
import { object, string } from 'yup';

import { PageSliceNewsletter } from 'src/models/graphql/page';
import { NewsletterFormValues } from 'src/interfaces';
import { NewsletterFormWrapper } from './styles';

const initialValues = { email: '' };
const validationSchema = object().shape({
  email: string().email().required()
});
const onSubmit = async (
  values: NewsletterFormValues,
  actions: FormikHelpers<NewsletterFormValues>
) => {
  console.log(values);
  actions.setSubmitting(false);
};

const NewsletterForm: FunctionComponent<Pick<PageSliceNewsletter, 'primary'>> = ({ primary }) => {
  const { title, input_placeholder, button_label } = primary;

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
      {({ isSubmitting }) => (
        <Form>
          <NewsletterFormWrapper>
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label
              className="text-center md:text-left inline-block font-secondary font-light text-2xl w-full md:w-7/12 md:pr-5"
              htmlFor="email"
            >
              {title}
            </label>
            <div className="flex items-start justify-center md:justify-end mt-3 md:mt-0 w-full md:w-5/12">
              <div>
                <Field
                  id="email"
                  type="text"
                  name="email"
                  className="email-input"
                  placeholder={input_placeholder}
                />
                <ErrorMessage name="email">
                  {(errMsg) => <small className="block text-center md:text-left">{errMsg}</small>}
                </ErrorMessage>
              </div>

              <button className="submit-input" type="submit" disabled={isSubmitting}>
                {button_label}
              </button>
            </div>
          </NewsletterFormWrapper>
        </Form>
      )}
    </Formik>
  );
};

export default NewsletterForm;
