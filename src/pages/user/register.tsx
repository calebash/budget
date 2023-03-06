import Form from "@/components/Form/Form";
import FormInput from "@/components/Form/Input";
import InputGroup from "@/components/Form/InputGroup";
import FormLabel from "@/components/Form/Label";

function Register() {
  return (
    <div>
      <a href="/">Go back home</a>

      <Form>
        <InputGroup id="text">
          <FormLabel>Text</FormLabel>
          <FormInput />
        </InputGroup>
      </Form>
    </div>
  );
}

export default Register;
