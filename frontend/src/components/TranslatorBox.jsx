export default function TranslatorBox({ text, setText, placeholder, disabled }) {
  return (
    <div className="flex flex-col justify-center align-middle w-[80%] md:w-[45%] mx-auto my-auto">
      <label className="text-center font-mono text-2xl pb-2 text-[#e1eeeb] bg-[#192f2b] rounded-md rounded-b-none shadow-lg border-[#70f5e1] border-2 border-b-0" style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}>
        {disabled ? 'Tiếng Việt' : 'English'}
      </label>  
      <textarea
        className="w-[100%] h-32 borderrounded resize-none bg-gradient-to-r from-[#70f5e1] to-[#4df0f8] text-[#021619] font-mono text-lg rounded-md mx-auto rounded-t-none shadow-lg border-[#70f5e1] border-2 border-t-0"
        style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder={placeholder}
        disabled={disabled}
      />
    </div>
  );
}