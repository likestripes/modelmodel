import React, {useState} from 'react';
import Modal from './Modal'
import './tailwind.css';

const ModelModelWidget = () => {
  const modelmodel = ModelModel()
  const [show, setShow] = useState('', '')
  const [model, setModel] = useState('');

  const showModal = (e) => {
    const modelClick = e.target.getAttribute("data-model");
    if (!!modelClick) {
      setModel(modelClick);
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
      <Modal model={model} onClose={showModal} show={show}/>
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
