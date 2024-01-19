/// <reference types="react" />
interface ButtonProps {
    text: string;
    onClick: () => void;
    className?: string;
    disabled?: boolean;
}
export declare const Button: React.FC<ButtonProps>;
export {};
