import "./InputField.scss";
import { ErrorMessage, Field } from "formik";
import { Props } from "./Type";
import { CgAsterisk } from "react-icons/cg";

const InputField = ({
  id,
  name,
  placeholder,
  className,
  labelClassName,
  fieldClassName,
  errorMessageClassName,
  label,
  error,
  type = "text",
  mandatory,
}: Props) => {
  const handleClassName = `input ${className ? className : ""}`;
  const handleLabelClassName = `label ${labelClassName ? labelClassName : ""}`;
  const handleFieldClassName = `field ${error ? "error" : ""} ${
    fieldClassName ? fieldClassName : ""
  }`;
  const handleErrorMessageClassName = `error-message ${
    errorMessageClassName ? errorMessageClassName : ""
  }`;

  return (
    <div className={handleClassName}>
      <label className={handleLabelClassName} htmlFor={name}>
        {label}
        {mandatory && (
          <span style={{ marginLeft: "2px", color: "rgb(219, 39, 119)" }}>
            <CgAsterisk />
          </span>
        )}
      </label>
      <Field
        id={id}
        name={name}
        placeholder={placeholder}
        className={handleFieldClassName}
        type={type}
      />

      <div className={handleErrorMessageClassName}>
        <ErrorMessage name={name} component={"span"} />
      </div>
    </div>
  );
};

export default InputField;
