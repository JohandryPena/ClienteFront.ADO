import { useState } from "react";

interface IProps {
  label: string;
  name: string;
  placeholder: string;
  className?: string;
  onChange: (value: string, campo: string) => void;
  value: string;
  readOnly?: boolean;
}

const TextFieldPassword = ({
  label,
  name,
  placeholder,
  className = "form-control",
  onChange,
  value,
  readOnly = false,
}: IProps) => {
  const [type, setType] = useState("password");

  const handleType = () => {
    if (type === "password") {
      setType("text");
    } else {
      setType("password");
    }
  };

  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        name={name}
        className={className}
        id={name}
        value={value}
        onChange={({ target }) => onChange(target.value, name)}
        placeholder={placeholder}
        readOnly={readOnly}
      />
      <span
        className="icon-eye icon"
        style={{ fontSize: "13px" }}
        onClick={() => handleType()}
      />
    </div>
  );
};

export default TextFieldPassword;
