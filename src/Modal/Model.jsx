import React, {useState} from "react";

"use client"

const Model = ({onClose, model, provider, activeModelKey}) => {

    // const [showAddKey, setShowAddKey] = useState(false);

    console.log(model)
    if (provider.available) {
        return (
            <button key={model.key} onClick={onClose} data-model-key={model.key} className="w-full h-10 flex flex-col md:w-48 md:h-48 flex md:justify-center items-center border-neutral-200 rounded-md border-solid md:border hover:border-neutral-300" >
                <span onClick={onClose} data-model-key={model.key} className="flex flew-row m-1 items-center"><CheckmarkIcon className="m-1" height={16} width={16} color={ model.key == activeModelKey ? "fill-teal-500": "fill-slate-300"} />{model["name"]}</span>
                <span onClick={onClose} data-model-key={model.key} className="font-light text-neutral-400">by {provider.name}</span>
            </button>
        )
    }else{
        // console.log(model)
        return (
            <div key={model.key} data-model-key={model.key} className="w-full h-10 flex flex-col md:w-48 md:h-48 flex md:justify-center items-center border-neutral-200 rounded-md border-solid md:border hover:border-neutral-300" >
                <span onClick={onClose} data-model-key={model.key} className="m-1"><LockIcon className="m-1" height={16} width={16} color="fill-teal-500" />{model.name}</span>
                <span onClick={onClose} data-model-key={model.key} className="font-light text-neutral-400">by {provider.name}</span>
                
            </div>
        )
    }
}

const LockIcon = ({color, height, width, className}) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className={className} width={width} height={height} viewBox={"0 0 "+height+" "+width}>
            <path className={color} d="M8 5a1 1 0 0 1 1 1v1H7V6a1 1 0 0 1 1-1zm2 2.076V6a2 2 0 1 0-4 0v1.076c-.54.166-1 .597-1 1.224v2.4c0 .816.781 1.3 1.5 1.3h3c.719 0 1.5-.484 1.5-1.3V8.3c0-.627-.46-1.058-1-1.224z"/>
        </svg>
    )
}


const CheckmarkIcon = ({color, height, width, className}) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className={className} width={width} height={height} viewBox={"0 0 "+height+" "+width}>
            <path className={color} d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
            <path className="" d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"/>
        </svg>
    )
}

export default Model;