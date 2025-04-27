export default function TranslatorBox({ text, setText, placeholder, disabled }) {
  return (
      <textarea
        className="w-[400px] h-32 p-2 borderrounded resize-none bg-gradient-to-r from-[#70f5e1] to-[#4df0f8] text-[#021619] font-mono text-lg rounded-md "
        style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder={placeholder}
        disabled={disabled}
      />
  );
}