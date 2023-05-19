import React from "react";

export default class Modal extends React.Component {
  onClose = e => {
    this.props.onClose && this.props.onClose(e);
  };
  render() {
    if (!this.props.show) {
      return null;
    }
    return (
        <div>
            <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
                <div className="bg-white fixed right-5 left-5 top-5 bottom-5 rounded-lg p-6 shadow-xl">
                    <h2 className="text-lg font-bold mb-4">Pick your model</h2>
                    <div className="flex items-center space-x-5">
                        <button className="w-48 h-48 flex justify-center items-center border-neutral-200 rounded-md border-solid border hover:border-neutral-300" >
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                                <path className="fill-teal-400" d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                <path className="fill-black" d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"/>
                            </svg>
                            <span className="m-1">GPT-3.5</span>
                            <span className="flex font-light text-neutral-400">by OpenAI</span>
                        </button>
                        <button className="w-48 h-48 flex justify-center items-center border-neutral-200 rounded-md border-solid border hover:border-neutral-300" >
                            <span className="m-1">GPT-4</span>
                            <span className="flex font-light text-neutral-400">by OpenAI</span>
                        </button>
                        <button className="w-48 h-48 flex justify-center items-center border-neutral-200 rounded-md border-solid border hover:border-neutral-300" >
                            <span className="m-1">Claude</span>
                            <span className="flex font-light text-neutral-400">by Anthropic</span>
                        </button>
                    </div>



                    <div className="flex justify-end">
                        <button type="button" onClick={this.onClose} className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Close</button>
                        <button type="button" onClick={this.onClose} className="px-4 py-2 text-sm font-medium text-white bg-red-600 hover:bg-red-700 ml-4">Save</button>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}