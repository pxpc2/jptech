export default function Button({ msg, buttonStyles }) {
  return (
    <button
      className={`h-[38px] rounded-sm
    text-sm  border-indigo-500 border-[1px] ${buttonStyles} hover:cursor-pointer`}
    >
      {msg}
    </button>
  );
}
