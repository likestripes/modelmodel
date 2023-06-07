import React, {useState} from "react";
import AddProvider from "./Modal/AddProvider";
import Models from "./Modal/Models";
import Provider from "./Modal/Provider";

"use client"
const Modal = ({onClose, activeModelKey, providers, setProviders, show}) => {

    const [currentView, setCurrentView] = useState('models','');
    const [currentId, setCurrentId] = useState('','');

    const navigate = (route) => {
        if (route.indexOf("/") > 0) {
            const [page, id] = route.split("/")
            setCurrentView(page)
            setCurrentId(id)
        }else{
            setCurrentView(route)
        }
    }

    var viewComponent;
    switch(currentView) {
    case "provider":
        viewComponent = (<Provider navigate={navigate} provider={currentId} providers={providers} setProviders={setProviders} onClose={onClose} activeModelKey={activeModelKey} />)
        break;
    default:
        viewComponent = (<Models navigate={navigate} providers={providers} onClose={onClose} activeModelKey={activeModelKey} />)
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

export default Modal;