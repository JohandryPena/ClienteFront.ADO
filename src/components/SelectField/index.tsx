interface IProps {
  label: string;
  name: string;
  placeholder: string;
  className?: string;
  onChange: (value: string, campo: string) => void;
  options: { value: string | number; label: string }[];
  value: string;
  readOnly?: boolean;
}

const SelectField = ({
  label,
  name,
  placeholder,
  className = "form-control",
  options,
  onChange,
  value,
  readOnly = false,
}: IProps) => {
  return (
    <div className={className}>
      <label>{label}</label>
      <select
        className="form-select"
        aria-label={placeholder}
        value={value}
        onChange={({ target }) => onChange(target.value, name)}
        disabled={readOnly}
      >
        <option value="">{placeholder}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectField;
