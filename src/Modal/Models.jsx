import React, {useState} from "react";
import Model from "./Model";

"use client"
const Models = ({onClose, navigate, providers, activeModelKey}) => {

    return (
        <div>
            <h2 className="text-lg font-bold mb-4 pl-6 pt-6">Pick your model</h2>
            <div className="flex flex-col pl-6 pt-6">
                {Object.values(providers).map((provider) => (
                    <div key={provider.key}>
                        <h3 className="" onClick={() => navigate("provider/"+provider.key)}>{provider.name} {provider.available ? "Settings" : "Add key"}</h3> 
                        <div className="flex flex-row items-center p-6 md:space-x-5 md:space-y-0 space-y-5">
                        { Object.values(provider.models).map((model) => (
                            <Model key={model.key} model={model} provider={provider} onClose={onClose} activeModelKey={activeModelKey} />
                        ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}




export default Models;