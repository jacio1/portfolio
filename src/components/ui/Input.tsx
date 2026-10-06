interface InputProps {
  placeholder: string;
  type: string;
}

export default function Input({ placeholder, type }: InputProps) {
  return (
    <input
      className="border-accent border rounded-lg placeholder:text-white text-[16px] p-4"
      placeholder={placeholder}
      type={type}
    />
  );
}
