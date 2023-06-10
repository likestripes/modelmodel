"use client"

import React, { useState } from 'react'

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
              <input type="text" value={inputValue} onChange={handleKeyInputChange} placeholder="Paste here" className="w-32 rounded-l-lg px-4 py-2 border border-gray-300 focus:outline-none focus:ring focus:border-blue-500" />
              <button type="submit" className="bg-blue-500 flex-none float-right hover:bg-blue-600 text-white rounded-r-lg px-4 py-2 ml-0" >
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

export default AddKey;