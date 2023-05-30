
import React, {useState, useEffect} from 'react';
import Modal from './Modal'
import './tailwind.css';

"use client"
const ModelModelWidget = ({modelmodel}) => {

  const [show, setShow] = useState('', '');
  const [model, setModel] = useState('');
  const [models, setModels] = useState(modelmodel.models);

  // useEffect(() => {
  //   async function getData() {
  //     const response = await fetch("http://localhost:8001/incr", {credentials: 'include'});
  //     const jsonData = await response.json();
  //     console.log(jsonData);
  //   }
  //   getData();
  // }, [])


  const showModal = (e) => {
    console.log(e)
    const modelClick = e.target.getAttribute("data-model-key");
    console.log(modelClick)
    if (!!modelClick) {
      setModel(modelClick);
      modelmodel.setModel(modelClick);
    }
    setShow(!show);
  };


  return (
    <div>
    { model == "" ? ( 
      <SetupCTA onClick={showModal} />
      ) : (
      <button onClick={showModal} className="items-center justify-center px-4 py-2 bg-white hover:bg-white-600 rounded-lg focus:outline-none border border-solid border-neutral-400">
        {model} <span className="text-teal-500">///</span>
      </button>
    )}
      <Modal model={model} models={models} setModels={setModels} onClose={showModal} show={show}/>
    </div>
  );
  
};

const SetupCTA = ({onClick}) => {
 return (
  <button onClick={onClick} className="items-center justify-center px-4 py-2 bg-white hover:bg-white-600 rounded-lg focus:outline-none border border-solid border-red-400">
    Add API Key <span className="text-red-500">///</span>
  </button>
 )

}

export default ModelModelWidget;
