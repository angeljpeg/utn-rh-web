interface props {
  placeholder: string;
  className: string;
  labelStyles: string;
  id: string;
  label: string;
}

export default function InputText({
  placeholder,
  className,
  labelStyles,
  id,
  label,
}: props) {
  return (
    <div>
      <label htmlFor={id} className={labelStyles}>
        {label}
      </label>
      <input
        id={id}
        type="text"
        placeholder={placeholder}
        className={className}
      />
    </div>
  );
}
