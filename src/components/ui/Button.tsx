interface ButtonProps {
  children: string;
  variant?: "primary" | "outline";
  type?: "submit";
  disabled?: boolean;
  className?: string
}

export default function Button({
  type,
  children,
  disabled,
  className
}: ButtonProps) {
  return (
    <button
    disabled={disabled}
      type={type}
      className={`bg-accent text-black rounded-[11px] min-w-53.5 min-h-14.5 ${className} hover:opacity-90`}
    >
      {children}
    </button>
  );
}
