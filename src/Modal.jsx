import React from "react";
import AddProvider from "./AddProvider";

"use client"
const Modal = ({onClose, model, models, setModels, show}) => {



    if (show) {
        return (
            <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
                <div className="bg-white fixed right-5 left-5 top-5 bottom-5 rounded-lg p-6 shadow-xl">
                    <h2 className="text-lg font-bold mb-4">Pick your model</h2>
                    <div className="flex items-center space-x-5">
                        {Object.keys(models).map((key) => (
                        <button key={key} onClick={onClose} data-model-key={key} className="w-48 h-48 flex justify-center items-center border-neutral-200 rounded-md border-solid border hover:border-neutral-300" >
                            { models[key]["available"] ? ( <Checkmark color={ key == model ? "fill-teal-500": "fill-slate-300"} /> ) : ""  }
                            <span className="m-1">{models[key]["name"]}</span>
                            <span className="flex font-light text-neutral-400">by {models[key]["provider"]}</span>
                        </button>
                        ))}
                    </div>
                    <div>
                        <AddProvider models={models} setModels={setModels} />
                    </div>
                </div>
            </div>
        );
    }
}

const Checkmark = ({color}) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
            <path className={color} d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
            <path className="" d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"/>
        </svg>
    )
}

export default Modal;