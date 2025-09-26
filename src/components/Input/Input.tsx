"use client"
import React, { useRef } from 'react'

type InputProps = {
    type?: string,
    clearable?: boolean,
}

function Input({ type = "text", clearable = false }: InputProps) {
    const inputRef = useRef<HTMLInputElement | null>(null);
    const handleClear = () => {
        if (inputRef.current)
            inputRef.current.value = ""
    }
    const handleVisibility = () => {
        if (!inputRef.current) {
            return
        }
        if (inputRef.current.type === "password") {
            inputRef.current.type = "text"
        }
        else {
            inputRef.current.type = type
        }
    }
    return (
        <div>
            <input ref={inputRef} type={type}></input>
            {clearable ? <button className='button-sm' onClick={() => handleClear()}>X</button> : null}
            {type === "password" ? <button className='button-sm' onClick={() => handleVisibility()}>O</button> : null}
        </div>
    )
}

export default Input