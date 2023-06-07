"use client"

import React, { useState } from 'react'

const AddProvider = ({models, setModels}) => {

    const [messages, setMessages] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [provider, setProvider] = useState('openai');
  
    const handleKeyInputChange = (e) => {
      setInputValue(e.target.value);
    };

    const handleProviderChange = (e) => {
        setProvider(e.target.value);
    };
  
    const handleFormSubmit = async (e) => {
      e.preventDefault();
      if (inputValue.trim() !== '') {
        // setMessages([...messages, inputValue]);
        // setInputValue('');
        console.log(provider);
        console.log(inputValue);
        modelmodel.addProvider(provider, inputValue).then(
            response => {
              console.log(response)
              setModels(response.models)
              modelmodel.models = response.models;
              console.log(modelmodel)
            // setMessages([...messages, response] );
          }
        )
      }
    };
    
    return (
      <>
          <form onSubmit={handleFormSubmit} className="bg-slate-100 flex flex-col p-4">
            <div className='flex flex-none flex-col '>
                <h3 className="flex text-md mb-5">Add Key</h3>
                <select onChange={handleProviderChange} className="rounded-md p-2 mb-2">
                    <option value="openai">OpenAI</option>
                    <option value="anthropic">Anthropic</option>
                </select>
            </div>

            <div className="flex  flex-row w-full" >
                <input
                type="text"
                value={inputValue}
                onChange={handleKeyInputChange}
                placeholder="Paste your key"
                className="flex-grow rounded-l-lg px-4 py-2 border border-gray-300 focus:outline-none focus:ring focus:border-blue-500"
                />
                <button
                type="submit"
                className="bg-blue-500 flex-none float-right hover:bg-blue-600 text-white rounded-r-lg px-4 py-2 ml-2"
                >
                Save
                </button>

            </div>
          </form>
        </>
    )

}

export default AddProvider;