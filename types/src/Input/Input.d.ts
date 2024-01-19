import { ForwardRefRenderFunction } from 'react';
export interface InputProps {
    label: string;
    placeholder: string;
    errorMessage?: string;
    variant?: 'enabled' | 'error';
    type?: string;
}
export declare const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps>;
export declare const Input: import("react").ForwardRefExoticComponent<InputProps & import("react").RefAttributes<HTMLInputElement>>;
