import Input from "@/components/form/Input";
import Title from "../../components/ui/Title";
import { useFormik } from "formik";
import { loginSchema } from "@/schema/login";
import Link from "next/link";

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
      <form
        className='flex flex-col items-center my-20 md:w-1/2 w-full mx-auto'
        onSubmit={handleSubmit}
      >
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
        <div className='flex flex-col w-full gap-y-4 mt-4'>
          <button className='btn-primary'>Login</button>
          <button className='btn-primary !bg-secondary'>
            <i className='fa fa-github mr-2 text-xl' aria-hidden='true'></i>
            GITHUB
          </button>
          <Link href='/auth/register'>
            <span className='text-sm underline cursor-pointer text-gray-700'>
              Do you no have a account?
            </span>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
