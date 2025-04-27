import React from 'react';
import TranslatorBox from './components/TranslatorBox';

export default function App() {
  return (
    <div className=" h-screen py-10 bg-gradient-to-r from-[#186a5e] to-[#053339] text-[#e1eeeb]" >
      <div className="bg-gradient-to-r from-[#0b201d] to-[#021619] rounded-3xl shadow-lg flex-col w-fit mx-auto p-12 gap-4">
      <header className="text-center mb-10">
        <h1 className="font-handjet text-8xl uppercase font-bold">Machine Translator</h1>
        <p className="font-mono">A Statistical Learning project using Transformer architecture</p>
      </header>

      <main className="flex flex-row gap-4 justify-center">
        <TranslatorBox placeholder={"Enter text to translate..."}/>

        <button
          className="bg-[#54a399] hover:bg-[#3c8379] hover:border-[#3c8379] font-handjet text-xl text-white justify-center align-middle py-auto my-auto rounded h-[50px] w-[100px] "
          onClick={() => alert('Translate button clicked!')}
        >Translate</button>

        <TranslatorBox disabled={true}  />
      </main>
      </div>
    </div>
  );
}
