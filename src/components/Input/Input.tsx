"use client"
import React, { useRef, useState } from 'react'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import CloseIcon from '@mui/icons-material/Close';
import "@/app/globals.css"
type InputProps = {
    type?: string;
    clearable?: boolean;
}

function Input({ type = "text", clearable = false }: InputProps) {
    const inputRef = useRef<HTMLInputElement | null>(null);
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const handleClear = () => {
        if (inputRef.current) inputRef.current.value = "";
        setIsPasswordVisible(false);
    }

    const handleVisibility = () => {
        setIsPasswordVisible(prev => !prev);
    }

    const inputType = type === "password" && isPasswordVisible ? "text" : type;
    return (
        <div className='input-container'>
            <input placeholder={`Enter your ${type}`} ref={inputRef} type={inputType} />
            {type === "password" && (
                <button className='button-sm' onClick={handleVisibility}>
                    {isPasswordVisible ? < VisibilityOffIcon /> : < RemoveRedEyeIcon />}
                </button>
            )}
            {clearable && <button className='button-sm' onClick={handleClear}><CloseIcon /></button>}

        </div>
    )
}

export default Input;
