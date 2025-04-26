import React from 'react';
import TranslatorBox from './components/TranslatorBox';

export default function App() {
  return (
    <div class="bg-gradient-to-r from-emerald-400 via-cyan-400 to-sky-500 h-screen"
>
        <header className="text-center mb-4">
      <h1 className="font-handjet text-8xl uppercase font-bold">Machine Translator</h1>
      <p className="font-mono">A Statistical Learning project using Transformer architecture</p>
    </header>
    
      <main className="flex flex-row gap-4 justify-center">
        
        <div className="gap-4 w-[400px]">
          <TranslatorBox />
        </div>
        <div className="flex flex-col gap-4">

        <button
          className="bg-blue-500 text-white justify-center align-middle py-auto my-auto rounded h-[50px] w-[100px]"
          onClick={() => alert('Translate button clicked!')}
        >Translate</button>
        </div>

        <div className="gap-4 w-[400px]">
          <TranslatorBox />
        </div>
      </main>
    </div>
  );
}
