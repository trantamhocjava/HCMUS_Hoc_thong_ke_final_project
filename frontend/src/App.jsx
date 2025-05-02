import { useState, useEffect } from 'react';
import React from 'react';
import TranslatorBox from './components/TranslatorBox';
import axios from 'axios';

export default function App() {
  const [text, setText] = useState('');
  const [translatedText, setTranslatedText] = useState('');
  const [loading, setLoading] = useState(false);

  const client = axios.create({
    baseURL: 'http://localhost:5000'
  });

  const submit = async(text) => {
    try {
      setLoading(true); // Set loading to true before API call
      const response = await client.post('/translate', {
        text: text
      });
      setTranslatedText(response.data.translated_text);
      console.log(response.data);
    } catch (error) {
      console.error('Error during translation:', error);
    } finally {
      setLoading(false); // Set loading to false after API call completes
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(text);
    submit(text);

  };

  return (
    
    <div className=" h-screen py-10 bg-gradient-to-r from-[#186a5e] to-[#053339] text-[#e1eeeb] min-w-[700px]" >

      <div className="bg-gradient-to-r from-[#0b201d] to-[#021619] rounded-3xl shadow-lg flex-col w-[70%] mx-auto p-12 gap-4">
      <header className="text-center mb-10">
        <h1 className="font-handjet text-8xl uppercase font-bold">Machine Translator</h1>
        <p className="font-mono">A Statistical Learning project using Transformer architecture</p>
      </header>

      <main className="flex flex-col gap-4 justify-center">
        <form className="flex justify-center align-middle  flex-col md:flex-row gap-4 w-[100%]" onSubmit={handleSubmit}>

        <TranslatorBox text={text} setText={setText} placeholder={"Enter text to translate..."}/>

        <button
          className="bg-[#54a399] hover:bg-[#3c8379] hover:border-[#3c8379] font-handjet text-xl text-white justify-center align-middle py-auto my-auto rounded h-[50px] w-[100px] mx-auto" type="submit" disabled={loading}
        >{loading ? 'Loading...' : 'Translate'}</button>
        
        
        <TranslatorBox text={translatedText} disabled={true}  />
        </form>
      </main>
      </div>
    </div>
  );
}
