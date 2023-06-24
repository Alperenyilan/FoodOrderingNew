import Input from "@/components/form/Input";
import Title from "../../components/ui/Title";
import { useFormik } from "formik";
import { loginSchema } from "@/schema/login";

const Login = () => {
  const onSubmit = async (values, actions) => {
    await new Promise((resolve) => setTimeout(resolve, 4000));
    actions.resetForm();
  };

  const { values, errors, touched, handleSubmit, handleChange, handleBlur } =
    useFormik({
      initialValues: {
        password: "",
        email: "",
      },
      onSubmit,
      validationSchema: loginSchema,
    });

  const inputs = [
    {
      id: 1,
      name: "email",
      type: "email",
      placeholder: "Your Email Address",
      value: values.email,
      errorMessage: errors.email,
      touched: touched.email,
    },
    {
      id: 2,
      name: "password",
      type: "password",
      placeholder: "Your Password",
      value: values.password,
      errorMessage: errors.password,
      touched: touched.password,
    },
  ];
  return (
    <div className='mx-auto container'>
      <div className='flex flex-col items-center my-20 w-1/2 mx-auto'>
        <Title addClass='text-[40px]'>Login</Title>
        <div className='flex flex-col gap-y-2 w-full'>
          {inputs.map((input) => (
            <Input
              key={input.id}
              {...input}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          ))}
        </div>
        <div>
          <button className='btn-primary'>Login</button>
          <button className='btn-primary'>Github</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
