import MyButton from "../../../../components/MyButton/MyButton";
import { useState } from "react";

function MailForm() {
  const [inputsValue, setInputsValue] = useState({ name: '', email: '' });

  const handleChangeInputs = event => {
    setInputsValue({ ...inputsValue, [event.target.name]: event.target.value });
  }

  const handleSubmit = event => {
    event.preventDefault();
    console.log(inputsValue);
  }

  const MyInput = {
    padding: "10px 20px",
    border: "1px solid #DFDFDF"
  }

  return (
    <section style={{ backgroundColor: "#faf9f7" }} className="flex flex-col items-center md:px-56 py-32 px-3">
      <p className="text-2xl font-medium mb-6 text-center">Are you a parent without a nanny and looking to share?</p>
      <p className="mb-10 text-center">Leave us your name and email and we’ll update you as soon as a share becomes available in your area!</p>

      <form onSubmit={handleSubmit} className="grid md:grid-flow-col gap-3 w-full md:w-max">
        <input type="text"
               onChange={handleChangeInputs}
               placeholder="Your name"
               style={MyInput}
               name="name"
               value={inputsValue.name} />
        <input type="text"
               onChange={handleChangeInputs}
               placeholder="Your email"
               style={MyInput}
               name="email"
               value={inputsValue.email} />
        <MyButton text="Send" type="submit" />
      </form>
    </section>
  )
}

export default MailForm;
