interface IProps {
  label: string;
  type: string;
  name: string;
  placeholder: string;
  className?: string;
  onChange: (value: string, campo: string) => void;
  value: string;
  readOnly?: boolean;
}

const TextFieldV1 = ({
  label,
  type,
  name,
  placeholder,
  className = "form-control",
  onChange,
  value,
  readOnly = false,
}: IProps) => {
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
    </div>
  );
};

export default TextFieldV1;
