import React, {useState} from "react";
import AddProvider from "./AddProvider";

"use client"
const Provider = ({provider, onClose, providers, activeModelKey, setProviders}) => {

    return (
        <div>
            <h2 className="text-lg font-bold mb-4 pl-6 pt-6">{provider}</h2>
            <div className="flex flex-col pl-6 pt-6">
                <AddKey provider={provider} setProviders={setProviders} />
            </div>
        </div>
    );
}

const AddKey = ({provider, setProviders}) => {

    const [inputValue, setInputValue] = useState('');
  
    const handleKeyInputChange = (e) => {
      setInputValue(e.target.value);
    };

    const handleFormSubmit = async (e) => {
      e.preventDefault();
      if (inputValue.trim() !== '') {
        modelmodel.addProvider(provider, inputValue).then(
            response => {
                setProviders(response.providers)
              modelmodel.providers = response.providers;
          }
        )
      }
    };
    
    return (
      <>
          <form onSubmit={handleFormSubmit} className="bg-slate-100 flex flex-col p-0">
            <div className="flex flex-row w-full" >
                <input
                type="text"
                value={inputValue}
                onChange={handleKeyInputChange}
                placeholder="Paste here"
                className="w-32 rounded-l-lg px-4 py-2 border border-gray-300 focus:outline-none focus:ring focus:border-blue-500"
                />
                <button
                type="submit"
                className="bg-blue-500 flex-none float-right hover:bg-blue-600 text-white rounded-r-lg px-4 py-2 ml-0"
                >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="M8 11a.5.5 0 0 0 .5-.5V6.707l1.146 1.147a.5.5 0 0 0 .708-.708l-2-2a.5.5 0 0 0-.708 0l-2 2a.5.5 0 1 0 .708.708L7.5 6.707V10.5a.5.5 0 0 0 .5.5z"/>
  <path d="M4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4zm0 1h8a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1z"/>
</svg>
                </button>

            </div>
          </form>
        </>
    )

}


// const ModelCard = ({onClose, setModels, model, modelKey, activeModelKey}) => {

//     const [showAddKey, setShowAddKey] = useState(false);

//     if (model["available"]) {
//         console.log(model)
//         return (
//             <button key={modelKey} onClick={onClose} data-model-key={modelKey} className="w-full h-10 flex flex-col md:w-48 md:h-48 flex md:justify-center items-center border-neutral-200 rounded-md border-solid md:border hover:border-neutral-300" >
//                 <span onClick={onClose} data-model-key={modelKey} className="flex flew-row m-1 items-center"><Checkmark className="m-1" height={16} width={16} color={ modelKey == activeModelKey ? "fill-teal-500": "fill-slate-300"} />{model["name"]}</span>
//                 <span onClick={onClose} data-model-key={modelKey} className="font-light text-neutral-400">by {model["provider"]}</span>
//             </button>
//         )
//     }else{
//         return (
//             <div key={modelKey} data-model-key={modelKey} className="w-full h-10 flex flex-col md:w-48 md:h-48 flex md:justify-center items-center border-neutral-200 rounded-md border-solid md:border hover:border-neutral-300" >
//                 <span onClick={onClose} data-model-key={modelKey} className="m-1">{model["name"]}</span>
//                 <span onClick={onClose} data-model-key={modelKey} className="font-light text-neutral-400">by {model["provider"]}</span>
                
//             </div>
//         )
//     }
// }

// const Checkmark = ({color, height, width, className}) => {
//     return (
//         <svg xmlns="http://www.w3.org/2000/svg" className={className} width={width} height={height} viewBox={"0 0 "+height+" "+width}>
//             <path className={color} d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
//             <path className="" d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"/>
//         </svg>
//     )
// }


export default Provider;