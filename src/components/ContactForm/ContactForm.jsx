import { Formik, Form, Field, ErrorMessage } from "formik";
import { nanoid } from 'nanoid';
import * as Yup from "yup";
import css from './ContactForm.module.css'


const UserPhoneSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too short,min 2 letters")
    .max(15, "Too long,max 15 letters")
    .required("This field is required"),
  number: Yup.string()
    .min(9, 'Invalid format, must be: "123-45-67"')
    .matches(/^\d{3}(-\d{2}){0,2}$/, 'Invalid format, must be: "123-45-67"')
    .required("This field is required"),
});


export default function ContactForm({onAdd}) {
    const userInfo = {
        name: '',
        number: '',
    }
    const nameId = nanoid();
  const numberId = nanoid();
  
  function handleSubmit(values, actions) {
    onAdd({
      name: values.name,
      number: values.number,
      id : nanoid()
    })
    actions.resetForm();
  }

    return (
      <Formik
        initialValues={userInfo}
        onSubmit={handleSubmit}
        validationSchema={UserPhoneSchema}
      >
        <Form className={css.form}>
          <label htmlFor={nameId}>Name</label>
          <Field type="text" name="name" id={nameId} className={css.input} />
          <ErrorMessage
            name="name"
            component="span"
            className={css.errMessageName}
          />
          <label htmlFor={numberId}>Namber</label>
          <Field
            type="text"
            name="number"
            id={numberId}
            className={css.input}
          />
          <ErrorMessage
            name="number"
            component="span"
            className={css.errMessageNumber}
          />
          <button type="submit" className={css.button}>
            Add contact
          </button>
        </Form>
      </Formik>
    );
}