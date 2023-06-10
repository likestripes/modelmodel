import React, {useState} from "react";
import AddKey from "./AddKey";
import Model from "./Model";
import OpenAISVG from "../OpenAISVG";

"use client"
const OpenAI = ({provider, navigate, onClose, activeModelKey, setProviders}) => {
    console.log(provider)
    return (
        <div>
            <div className="flex flex-col pl-12 pt-12">
            <OpenAISVG color="slate" width="32px" height="32px" />
            <h2 className="text-lg font-bold mb-4 ">Hello, Selmo!</h2>
                <div className="flex flex-row items-center md:space-x-5 md:space-y-0 space-y-5">
                <button className="w-full h-10 flex flex-col md:w-48 md:h-48 flex md:justify-center items-center border-neutral-200 rounded-md border-solid md:border hover:border-neutral-300" >
                    <span className="flex flew-row m-1 items-center"><CheckmarkIcon className="m-1" height={16} width={16} color="fill-slate-300"/>Default</span>
                    <span className="font-light text-neutral-400">Rate-limited</span>
                </button>
                    { Object.values(provider.models).map((model) => (
                        <Model key={model.key} navigate={navigate} model={model} provider={provider} onClose={onClose} activeModelKey={activeModelKey} />
                    ))}
                <button className="w-full h-10 flex flex-col md:w-48 md:h-48 flex md:justify-center items-center border-neutral-200 rounded-md border-solid md:border hover:border-neutral-300" >
                    <span className="flex flew-row m-1 items-center">Fineas Tuned</span>
                    <span className="font-light text-neutral-400 flex flex-row">Billed to you</span>
                </button>
                </div>
                <span className="underline text-blue-500 cursor-pointer">Manage your models</span>
                <span className="underline text-red-500 cursor-pointer">Disconnect this app</span>
            </div>
        </div>
    );
}

const LockIcon = ({color, height, width, className}) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill={color}  width={width} height={height} className={className}  viewBox="0 0 24 24">
            <path className={color} d="M8 5a1 1 0 0 1 1 1v1H7V6a1 1 0 0 1 1-1zm2 2.076V6a2 2 0 1 0-4 0v1.076c-.54.166-1 .597-1 1.224v2.4c0 .816.781 1.3 1.5 1.3h3c.719 0 1.5-.484 1.5-1.3V8.3c0-.627-.46-1.058-1-1.224z"/>
        </svg>
    )
}



const CheckmarkIcon = ({color, height, width, className}) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className={className} width={width} height={height} viewBox="0 0 24 24">
            <path className={color} d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
            <path className="" d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"/>
        </svg>
    )
}

export default OpenAI;