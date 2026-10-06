interface ButtonProps {
  children: string;
  variant?: "primary" | "outline";
  type: string
}

export default function Button({type, children, variant = "primary" }: ButtonProps) {
  return <button className={`bg-accent text-black rounded-[11px] min-w-53.5 min-h-14.5 btn-${variant}`}>{children}</button>;
}
