const Button = ({ color, text, textColor }) => {
  return (
    <div>
      <button
        className={`w-60 bg-${color} text-${textColor} h-10 rounded-full text-l italic`}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
