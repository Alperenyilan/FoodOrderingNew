import React from "react";
import Input from "../form/Input";
import Title from "../ui/Title";
import { useFormik } from "formik";
import { passwordChangeSchema } from "../../schema/passwordChange";

const Password = () => {
  const onSubmit = async (values, actions) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    actions.resetForm();
  };

  const { values, errors, touched, handleSubmit, handleChange, handleBlur } =
    useFormik({
      initialValues: {
        password: "",
        confirmPassword: "",
      },
      onSubmit,
      validationSchema: passwordChangeSchema,
    });
  const inputs = [
    {
      id: 1,
      name: "password",
      type: "password",
      placeholder: "Your Password",
      value: values.password,
      errorMessage: errors.password,
      touched: touched.password,
    },
    {
      id: 2,
      name: "confirmPassword",
      type: "password",
      placeholder: "Your Confirm Password",
      value: values.confirmPassword,
      errorMessage: errors.confirmPassword,
      touched: touched.confirmPassword,
    },
  ];
  return (
    <form className='lg:p-8 flex-1 lg:mt-0 mt-5' onSubmit={handleSubmit}>
      <Title addClass='text-[40px]'>Password Settings</Title>
      <div className='grid lg:grid-cols-2 grid-cols-1 gap-4 mt-4'>
        {inputs.map((input) => (
          <Input
            key={input.id}
            {...input}
            onBlur={handleBlur}
            onChange={handleChange}
          />
        ))}
      </div>
      <button className='btn-primary  mt-4'>Update</button>
    </form>
  );
};

export default Password;
