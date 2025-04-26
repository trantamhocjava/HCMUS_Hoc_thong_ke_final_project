export default function TranslatorBox({ text, setText }) {
  return (
    <div className="flex flex-col gap-4">
      <textarea
        className="w-full h-32 p-2 border border-gray-300 rounded"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter text to translate..."
      />
      {/* <button
        className="bg-blue-500 text-white py-2 px-4 rounded"
        onClick={() => alert("Translate button clicked!")}
      >
        Translate
      </button> */}
    </div>
  );
}