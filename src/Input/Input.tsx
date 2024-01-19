import { ForwardRefRenderFunction, forwardRef } from 'react';

export interface InputProps {
  label: string;
  placeholder: string;
  errorMessage?: string;
  variant?: 'enabled' | 'error';

  type?: string;
}

const typeInputClasses: { [key: string]: string } = {
  enabled:
    'bg-gray-50 placeholder-gray-900 text-gray-900 border-gray-300 focus:outline-primary',
  error: 'bg-red-500 placeholder-white border-red-300 focus:outline-primary',
};

export const InputBase: ForwardRefRenderFunction<
  HTMLInputElement,
  InputProps
> = (
  { placeholder, errorMessage, type, variant = 'enabled', ...rest },
  ref,
) => {
  return (
    <div className={`flex flex-col w-full `}>
      <div className="relative">
        <input
          {...rest}
          ref={ref}
          type={type}
          className={`${typeInputClasses[variant]} w-full border rounded-2xl p-4 text-tonal-dark-cream-10 focus:outline-primary 
				`}
          placeholder={` ${placeholder}`}
        />
      </div>
      {errorMessage && (
        <div className="flex justify-between">
          <span className="text-red-500 font-medium py-4">{`${errorMessage}`}</span>
        </div>
      )}
    </div>
  );
};

export const Input = forwardRef(InputBase);
