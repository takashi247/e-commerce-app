import { useForm, SubmitHandler } from 'react-hook-form';

type MyFormData = {
  firstName: string;
  lastName: string;
  category: string;
};

export default function Form1() {
  const { register, handleSubmit, formState: { errors }, } = useForm<MyFormData>();
  const onSubmit: SubmitHandler<MyFormData> = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('firstName', { required: true })} placeholder=" First Name " />
      {errors.firstName && <div> Please type in your first name </div>}
      <input {...register('lastName', { required: true })} placeholder=" Last Name " />
      {errors.lastName && <div> Please type in your last name </div>}
      <select {...register('category', { required: true })}>
        <option value=""> Please select... </option>
        <option value="A"> Category A </option>
        <option value="B"> Category B </option>
      </select>
      {errors.category && <div> Please select the category </div>}
      <input type="submit" />
    </form>
  );
};