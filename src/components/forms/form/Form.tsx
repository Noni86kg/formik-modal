import "./Form.scss";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { InputField, AbstractFormikButton } from "../../index";
import { Props } from "./Type";

const SimpleForm = ({ formRef, onClose }: Props) => {
  const initialValues = {
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
  };

  const onSubmit = (values: any) => {
    console.log(values);
    alert(JSON.stringify(values, null, 2));
    onClose();
  };

  const validationSchema = Yup.object({
    firstname: Yup.string().required("Firstname is required"),
    lastname: Yup.string().required("Lastname is required"),
    phone: Yup.string().required("Phone is required").min(8, "Too Short!"),
    email: Yup.string()
      .required("Email is required")
      .email("Inalid email address"),
  });

  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {({ errors, touched }) => (
          <Form>
            <div className="flex gap">
              <InputField
                id="firstname"
                name="firstname"
                placeholder="First name"
                error={!!(errors.firstname && touched.firstname)}
                label={"First name"}
                mandatory
              />
              <InputField
                id="lastname"
                name="lastname"
                placeholder="Last name"
                error={!!(errors.lastname && touched.lastname)}
                label={"Last name"}
                mandatory
              />
            </div>
            <InputField
              id="email"
              name="email"
              placeholder="Email"
              label={"Email"}
              error={!!(errors.email && touched.email)}
              mandatory
            />
            <InputField
              id="phone"
              name="phone"
              placeholder="e.g. 064 555 333"
              error={!!(errors.phone && touched.phone)}
              label={"Phone"}
              type="number"
              mandatory
            />
            <AbstractFormikButton abstractRef={formRef} />
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SimpleForm;
