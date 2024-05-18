import {Formik, Form, Field} from 'formik';

export default function App() {
  return (
    <div style={{
      marginLeft: '30px',
    }}>
      <h3>Registration form</h3>
      <Formik
        initialValues={{
          username: '',
          email: '',
          phone: '',
        }}
        validate={(values) => {
          const errors = {};
          if(!values.username) {
            errors.username = 'Please enter a username';
          }
          if(!values.email) {
            errors.email = 'Please enter a email';
          } else if (!/^\S+@\S+\.\S+$/.test(values.email)) {
            errors.email = "Please enter a valid email";
          }
          if (!values.phone) {
            errors.phone = "Please enter a phone number";
          } else if (values.phone.replace(/\D/g, "").length !== 12) {
            errors.phone = "Please enter a valid 12-digit phone number";
          }
          return errors;
        }}
        onSubmit={(values) => {
          console.log("Sending new user...", values);
        }}
      >
        {
          ({errors, touched}) => (
            <Form style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '5px',
              width: '300px',
            }}>
              <Field type='text' name='username' placeholder='Username' />
              {errors.username && <span style={{color: 'red'}}>{errors.username}</span>}
              <Field type='email' name='email' placeholder='Email' />
              {errors.email && <span style={{color: 'red'}}>{errors.email}</span>}
              <Field type='phone' name='phone' placeholder='Phone' />
              {errors.phone && <span style={{color: 'red'}}>{errors.phone}</span>}
              <button type="submit">Submit</button>
            </Form>
          )
        }
      </Formik>
    </div>
  );
}
