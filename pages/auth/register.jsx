import Input from "@/components/form/Input";
import Title from "../../components/ui/Title";
import { useFormik } from "formik";
import Link from "next/link";
import { registerSchema } from "../../schema/register";

const Register = () => {
  const onSubmit = async (values, actions) => {
    await new Promise((resolve) => setTimeout(resolve, 4000));
    actions.resetForm();
  };

  const { values, errors, touched, handleSubmit, handleChange, handleBlur } =
    useFormik({
      initialValues: {
        confirmPassword: "",
        password: "",
        email: "",
        fullName: "",
      },
      onSubmit,
      validationSchema: registerSchema,
    });

  const inputs = [
    {
      id: 1,
      name: "fullName",
      type: "text",
      placeholder: "Your Full Name",
      value: values.fullName,
      errorMessage: errors.fullName,
      touched: touched.fullName,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Your Email Address",
      value: values.email,
      errorMessage: errors.email,
      touched: touched.email,
    },
    {
      id: 3,
      name: "password",
      type: "password",
      placeholder: "Your Password",
      value: values.password,
      errorMessage: errors.password,
      touched: touched.password,
    },
    {
      id: 4,
      name: "confirmPassword",
      type: "password",
      placeholder: "Your Password Again ",
      value: values.confirmPassword,
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
        <Title addClass='text-[40px]'>Register</Title>
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
          <button className='btn-primary'>Register</button>

          <Link href='/auth/login'>
            <span className='text-sm underline cursor-pointer text-gray-700'>
              Do you no have a account?
            </span>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Register;
