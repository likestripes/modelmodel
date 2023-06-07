import React, {useState} from "react";
import AddProvider from "./AddProvider";

"use client"
const Models = ({onClose, navigate, availableProviders, modelsByProvider, activeModelKey, setModels}) => {

    return (
        <div>
            <h2 className="text-lg font-bold mb-4 pl-6 pt-6">Pick your model</h2>
            <div className="flex flex-col pl-6 pt-6">
                {Object.keys(modelsByProvider).map((provider) => (
                    <div key={provider}>
                        <h3 className="" onClick={() => navigate("provider/"+provider)}>{provider} {availableProviders[provider] ? "Settings" : "Add key"}</h3> 
                        <div className="flex flex-row items-center p-6 md:space-x-5 md:space-y-0 space-y-5">
                        { Object.values(modelsByProvider[provider]).map((model) => (
                            <ModelCard key={model.key} setModels={setModels} model={model} onClose={onClose} activeModelKey={activeModelKey} />
                        ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}


const ModelCard = ({onClose, setModels, model, activeModelKey}) => {

    const [showAddKey, setShowAddKey] = useState(false);

    if (model["available"]) {
        // console.log(model)
        return (
            <button key={model.key} onClick={onClose} data-model-key={modelKey} className="w-full h-10 flex flex-col md:w-48 md:h-48 flex md:justify-center items-center border-neutral-200 rounded-md border-solid md:border hover:border-neutral-300" >
                <span onClick={onClose} data-model-key={model.key} className="flex flew-row m-1 items-center"><Checkmark className="m-1" height={16} width={16} color={ modelKey == activeModelKey ? "fill-teal-500": "fill-slate-300"} />{model["name"]}</span>
                <span onClick={onClose} data-model-key={model.key} className="font-light text-neutral-400">by {model["provider"]}</span>
            </button>
        )
    }else{
        // console.log(model)
        return (
            <div key={model.key} data-model-key={model.key} className="w-full h-10 flex flex-col md:w-48 md:h-48 flex md:justify-center items-center border-neutral-200 rounded-md border-solid md:border hover:border-neutral-300" >
                <span onClick={onClose} data-model-key={model.key} className="m-1">{model["name"]}</span>
                <span onClick={onClose} data-model-key={model.key} className="font-light text-neutral-400">by {model["provider"]}</span>
                
            </div>
        )
    }
}

const Checkmark = ({color, height, width, className}) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className={className} width={width} height={height} viewBox={"0 0 "+height+" "+width}>
            <path className={color} d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
            <path className="" d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"/>
        </svg>
    )
}


export default Models;