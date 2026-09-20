export interface NavItem {
  label: string;
  href: string;
  isActive?: boolean;
}

export type ButtonVariant = 'white-pill' | 'primary-gradient' | 'glass-dark' | 'see-how-it-works';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  children: React.ReactNode;
}
