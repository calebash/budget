import Form from "@/components/Form/Form";
import FormInput from "@/components/Form/Input";
import InputGroup from "@/components/Form/InputGroup";
import FormLabel from "@/components/Form/Label";
import SubmitButton from "@/components/Form/SubmitButton";
import { ChangeEvent, MouseEvent, useState } from "react";

function Register() {
  const [user, setUser] = useState({
    username: "",
    password: "",
    email: "",
  });

  const updateField = (e: ChangeEvent<HTMLInputElement>) => {
    const fieldName: string = e.target.name;
    const fieldValue: string = e.target.value;

    setUser((user) => {
      return {
        ...user,
        [fieldName]: fieldValue,
      };
    });
  };

  const register = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    try {
      const request = await fetch("/api/auth/register", {
        method: "POST",
        body: JSON.stringify({ user }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const response = await request.json();

      console.log(response);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <a href="/">Go back home</a>

      <Form>
        <InputGroup id="username">
          <FormLabel>Username</FormLabel>
          <FormInput onChange={updateField} />
        </InputGroup>

        <InputGroup id="email">
          <FormLabel>Email</FormLabel>
          <FormInput onChange={updateField} />
        </InputGroup>

        <InputGroup id="password">
          <FormLabel>Password</FormLabel>
          <FormInput onChange={updateField} />
        </InputGroup>

        <SubmitButton onClick={register} />
      </Form>
    </div>
  );
}

export default Register;
