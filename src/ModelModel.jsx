import React, {useState} from 'react';
import Modal from './Modal'
import './tailwind.css';

const ModelModel = () => {

  const [show, setShow] = useState('', '')
  const [model] = useState('');

  const showModal = (e) => {
    console.log("model")
    console.log(model)
    setShow(!show);
  };


  if (model === "") {
    return (
      <div>
        <SetupCTA onClickHandler={showModal} />
        <Modal onClose={showModal} show={show}/>
      </div>
    );
  }else{
    return (
      <div>
        <button onClick={showModal} className="items-center justify-center px-4 py-2 bg-white hover:bg-white-600 rounded-lg focus:outline-none border border-solid border-neutral-400">
          GPT-3 <span className="text-teal-500">///</span>
        </button>
        <Modal onClose={showModal} show={show}/>
      </div>
    );
  }
};

const SetupCTA = ({onClickHandler}) => {
 return (
  <button onClick={onClickHandler} className="items-center justify-center px-4 py-2 bg-white hover:bg-white-600 rounded-lg focus:outline-none border border-solid border-red-400">
    Add API Key <span className="text-red-500">///</span>
  </button>
 )

}


export default ModelModel;
