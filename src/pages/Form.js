import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

export const Form = () => {
  const schema = yup.object().shape({
    fullName: yup.string().required('Your full name is required.'),
    email: yup.string().email().required('Please enter a valid e-mail.'),
    age: yup
      .number()
      .positive()
      .integer()
      .min(18)
      .required('Your age must be over 18.'),
    password: yup.string().min(4).max(20).required(),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref('password'), null], 'Passwords must match')
      .required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="form-div">
      <form className="form-page" onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="Full Name..."
          {...register('fullName')}
        />
        {errors ? <p>{errors.fullName?.message}</p> : ''}
        <input type="text" placeholder="Email..." {...register('email')} />
        {errors ? <p>{errors.email?.message}</p> : ''}
        <input type="number" placeholder="Age..." {...register('age')} />
        {errors ? <p>{errors.age?.message}</p> : ''}
        <input
          type="password"
          placeholder="Password..."
          {...register('password')}
        />
        {errors ? <p>{errors.password?.message}</p> : ''}
        <input
          type="password"
          placeholder="Confirm Password..."
          {...register('confirmPassword')}
        />
        {errors ? <p>{errors.confirmPassword?.message}</p> : ''}
        <input type="submit" />
      </form>
    </div>
  );
};
