import React, {useState} from "react";
import AddProvider from "./Modal/AddProvider";
import Models from "./Modal/Models";
import Provider from "./Modal/Provider";

"use client"
const Modal = ({onClose, activeModelKey, models, setModels, show}) => {

    const [currentView, setCurrentView] = useState('models','');
    const [currentId, setCurrentId] = useState('','');

    const availableProviders = {};
    const modelsByProvider = Object.keys(models).reduce((modelMemo, key) => {
        const model = models[key];
        model.key = key;
        // console.log(model)
        availableProviders[model.provider] = model["available"];
        (modelMemo[model.provider] = modelMemo[model.provider] || []).push(model);
        return modelMemo;
      }, {});


      const navigate = (route) => {
        console.log(route)
        if (route.indexOf("/") > 0) {
            const [page, id] = route.split("/")
            setCurrentView(page)
            setCurrentId(id)
        }else{
            setCurrentView(route)
        }
    }
    //   console.log(modelsByProvider)
      console.log(currentView)
      var viewComponent;
      switch(currentView) {
        case "provider":
            viewComponent = (<Provider navigate={navigate} provider={currentId} availableProviders={availableProviders} onClose={onClose} modelsByProvider={modelsByProvider} activeModelKey={activeModelKey} setModels={setModels} />)
            break;
        default:
            viewComponent = (<Models navigate={navigate} availableProviders={availableProviders} onClose={onClose} modelsByProvider={modelsByProvider} activeModelKey={activeModelKey} />)
      }



    if (show) {
        return (
            <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
                <div className="bg-white fixed right-5 left-5 top-5 bottom-5 rounded-lg shadow-xl">
                    {viewComponent}
                </div>
            </div>
        );
    }
}

{/* <AddKey provider={provider} setModels={setModels} /> */}

const ModelCard = ({onClose, setModels, model, modelKey, activeModelKey}) => {

    const [showAddKey, setShowAddKey] = useState(false);

    if (model["available"]) {
        console.log(model)
        return (
            <button key={modelKey} onClick={onClose} data-model-key={modelKey} className="w-full h-10 flex flex-col md:w-48 md:h-48 flex md:justify-center items-center border-neutral-200 rounded-md border-solid md:border hover:border-neutral-300" >
                <span onClick={onClose} data-model-key={modelKey} className="flex flew-row m-1 items-center"><Checkmark className="m-1" height={16} width={16} color={ modelKey == activeModelKey ? "fill-teal-500": "fill-slate-300"} />{model["name"]}</span>
                <span onClick={onClose} data-model-key={modelKey} className="font-light text-neutral-400">by {model["provider"]}</span>
            </button>
        )
    }else{
        return (
            <div key={modelKey} data-model-key={modelKey} className="w-full h-10 flex flex-col md:w-48 md:h-48 flex md:justify-center items-center border-neutral-200 rounded-md border-solid md:border hover:border-neutral-300" >
                <span onClick={onClose} data-model-key={modelKey} className="m-1">{model["name"]}</span>
                <span onClick={onClose} data-model-key={modelKey} className="font-light text-neutral-400">by {model["provider"]}</span>
                
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

const Lock = ({className}) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className={className}>
            <path d="M8 5a1 1 0 0 1 1 1v1H7V6a1 1 0 0 1 1-1zm2 2.076V6a2 2 0 1 0-4 0v1.076c-.54.166-1 .597-1 1.224v2.4c0 .816.781 1.3 1.5 1.3h3c.719 0 1.5-.484 1.5-1.3V8.3c0-.627-.46-1.058-1-1.224z"/>
        </svg>
    )
}



export default Modal;