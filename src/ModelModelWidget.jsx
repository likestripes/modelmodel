
import React, {useState, useEffect} from 'react';
import Modal from './Modal'
import OpenAISVG from './OpenAISVG'
import './tailwind.css';

"use client"
const ModelModelWidget = ({modelmodel}) => {

  const [show, setShow] = useState('', '');
  const [activeModelKey, setActiveModelKey] = useState('');
  const [activeModel, setActiveModel] = useState({});
  const [providers, setProviders] = useState(modelmodel.providers);

  const showModal = (e) => {
    e.preventDefault();
    const modelKey = e.target.getAttribute("data-model-key");
    if (!!modelKey) {
      setActiveModelKey(modelKey);
      modelmodel.setModel(modelKey);
      setActiveModel(modelmodel.getModel(modelKey));
    }
    setShow(!show);
  };


  return (
    <div>
      
    { activeModelKey == "" ? ( 
      <SetupCTA onClick={showModal} />
      ) : (
      <button onClick={showModal} className="flex flex-row items-center justify-center px-4 py-2 bg-white hover:bg-white-600 rounded-lg focus:outline-none border border-solid border-neutral-400">
        <OpenAISVG color="slate" width="24px" height="24px" className="mr-2"/> {activeModel.name}
      </button>
    )}
      <Modal setActiveModelKey={activeModelKey} providers={providers} setProviders={setProviders} onClose={showModal} show={show}/>
    </div>
  );
  
};

const SetupCTA = ({onClick}) => {
 return (
  <button onClick={onClick} className="group flex flex-col px-4 py-2 bg-white hover:bg-white-600 rounded-lg focus:outline-none border border-solid border-slate-400">
    
    <span className='flex flex-row'>
      <OpenAISVG color="slate"  width="24px" height="24px" className=""/>
      <span className="hidden group-hover:inline text-right ml-2"> Powered by GPT-3.5</span>
    </span>
    <span className="hidden group-hover:inline text-right">
        <span className="underline text-blue-500">Sign in to OpenAI</span> to use your own model.
    </span>
  </button>
 )

}

export default ModelModelWidget;
