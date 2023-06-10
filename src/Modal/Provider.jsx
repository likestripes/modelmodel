import React, {useState} from "react";
import AddKey from "./AddKey";
import Model from "./Model";

"use client"
const Provider = ({provider, navigate, onClose, activeModelKey, setProviders}) => {
    console.log(provider)
    return (
        <div>
            <h2 className="text-lg font-bold mb-4 pl-6 pt-6">{provider.name}</h2>
            <div className="flex flex-col pl-6 pt-6">
                <AddKey provider={provider.key} setProviders={setProviders} />
                <div className="flex flex-row items-center p-6 md:space-x-5 md:space-y-0 space-y-5">
                    { Object.values(provider.models).map((model) => (
                        <Model key={model.key} navigate={navigate} model={model} provider={provider} onClose={onClose} activeModelKey={activeModelKey} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Provider;