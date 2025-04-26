import React from 'react';
import TranslatorBox from './components/TranslatorBox';

export default function App() {
  return (
    <>
      <main className="flex flex-row gap-4 ">
        <div className="flex flex-col gap-4 w-full">
          <h1 className="text-2xl font-bold">Text Translator</h1>
          <TranslatorBox />
        </div>
        <div className="flex flex-col gap-4">
        <button
          className="bg-blue-500 text-white justify-center align-middle py-auto my-auto rounded h-[50px] w-[100px]"
          onClick={() => alert('Translate button clicked!')}
        >Translate</button>
        </div>
        <div className="flex flex-col gap-4 w-full">
          <h1 className="text-2xl font-bold">Text Translator</h1>
          <TranslatorBox />
        </div>
      </main>
    </>
  );
}
