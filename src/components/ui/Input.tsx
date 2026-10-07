interface InputProps {
  placeholder: string;
  type: string;
  className?: string;
  name: string;
  required?: boolean;
}

export default function Input({
  placeholder,
  type,
  className = "",
  name,
  required,
}: InputProps) {
  return (
    <input
      name={name}
      className={`border-accent border rounded-lg placeholder:text-white text-[16px] p-4 bg-transparent outline-none ${className}`}
      placeholder={placeholder}
      type={type}
      required={required}
    />
  );
}
