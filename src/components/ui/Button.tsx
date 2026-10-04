interface ButtonProps {
  children: string;
  variant?: "primary" | "outline";
}

export default function Button({ children, variant = "primary" }: ButtonProps) {
  return <button className={`btn btn-${variant}`}>{children}</button>;
}
