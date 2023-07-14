export default function Button({ width, msg, bgStyle, textColor }) {
  return (
    <button
      className={`w-[${width}px] h-[38px] rounded-sm
    text-sm bg-${bgStyle} border-indigo-500 border-[1px] text-${textColor}`}
    >
      {msg}
    </button>
  );
}
