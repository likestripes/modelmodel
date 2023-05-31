"use client"

import React, { useState } from 'react'

const AddProvider = ({models, setModels}) => {

    const [messages, setMessages] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [provider, setProvider] = useState('');
  
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
          <form onSubmit={handleFormSubmit} className="flex p-2">
            <select onChange={handleProviderChange}>
                <option value="openai">OpenAI</option>
                <option value="anthropic">Anthropic</option>
            </select>
            <input
              type="text"
              value={inputValue}
              onChange={handleKeyInputChange}
              placeholder="Paste your key"
              className="flex-1 rounded-l-lg px-4 py-2 border border-gray-300 focus:outline-none focus:ring focus:border-blue-500"
            />
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white rounded-r-lg px-4 py-2 ml-2"
            >
              Send
            </button>
          </form>
        </>
    )

}

export default AddProvider;