import React from 'react';
import { ButtonHTMLAttributes } from 'react';

const Button = ({ className = '', disabled, children, ...props }: ButtonHTMLAttributes<HTMLButtonElement>) => {
    return (
        <button
            {...props}
            className={
                `inline-flex items-center px-4 py-2 bg-main text-main-cont rounded-full hover:opacity-90 transition duration-300 ${
                    disabled && 'opacity-25'
                } ` + className
            }
            disabled={disabled}
        >
            {children}
        </button>
    );
}

export default Button;