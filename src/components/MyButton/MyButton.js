import './MyButton.css';

function MyButton(props) {
  const { text, type } = props;

  return (
    <button type={type} className="button-style">
      {text}
    </button>
  )
}

export default MyButton;
