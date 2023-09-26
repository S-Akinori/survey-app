import React, { useEffect, FormEventHandler } from 'react';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@mui/material/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';
import AdminAuthenticatedLayout from '@/Layouts/AdminAuthenticatedLayout';
import { PageProps } from '@/types';
import { Container, FormControl, IconButton, InputAdornment, OutlinedInput, TextField } from '@mui/material';
import Button from '@/Components/Button';
import { Visibility, VisibilityOff } from '@mui/icons-material';

const inputs: InputProps[] = [
  {
    id: 'company',
    name: 'company',
    type: 'text',
    label: '会社名',
  },
  {
    id: 'department',
    name: 'department',
    type: 'text',
    label: '部署名',
  },
  {
    id: 'name',
    name: 'name',
    type: 'text',
    label: '担当者名',
  },
  {
    id: 'email',
    name: 'email',
    type: 'text',
    label: '担当者ID(メールアドレス)',
  },
  {
    id: 'password',
    name: 'password',
    type: 'password',
    label: 'パスワード',
  },
  {
    id: 'start_date',
    name: 'start_date',
    type: 'date',
    label: '開始日',
  },
  {
    id: 'end_date',
    name: 'end_date',
    type: 'date',
    label: '終了日',
  },
]

interface InputProps {
  id: string;
  name: 'company' | 'department' | 'name' | 'email' | 'password' | 'start_date' | 'end_date';
  type: string;
  label: string;
}

interface InputNameProps {
  company: string;
  department: string;
  name: string;
  email: string;
  password: string;
  start_date: string;
  end_date: string;
}

export default function Register({ auth }: PageProps) {
  const { data, setData, post, processing, errors, reset } = useForm<InputNameProps>({
    name: '',
    company: '',
    department: '',
    start_date: '2023-10-1',
    end_date: '2023-11-1',
    email: '',
    password: '',
  });

  useEffect(() => {
    return () => {
      reset('password');
    };
  }, []);

  const submit: FormEventHandler = (e) => {
    e.preventDefault();

    post(route('admin.client.register'));
  };

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  console.log(data)

  return (
    <AdminAuthenticatedLayout
      user={auth.user}
      header={<h2 className="font-semibold leading-tight">{auth.user.name}</h2>}
    >
      <Head title="Register" />

      <Container className='py-12'>
        <form onSubmit={submit}>
          {inputs.map((input) => (
            <div key={input.id} className="mt-4">
              {input.type === 'password' && (
                <FormControl variant="outlined" fullWidth>
                  <InputLabel htmlFor={input.id}>Password</InputLabel>
                  <OutlinedInput
                    id={input.id}
                    type={showPassword ? 'text' : 'password'}
                    name={input.name}
                    value={data[input.name]}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                    label={input.label}
                    onChange={(e) => setData(input.name, e.target.value)}
                    fullWidth
                  />
                </FormControl>
              )}
              {input.type !== 'password' && (
                <TextField
                  id={input.id}
                  type={input.type}
                  name={input.name}
                  value={data[input.name]}
                  variant='outlined'
                  label={input.label}
                  onChange={(e) => setData(input.name, e.target.value)}
                  fullWidth
                />
              )}
              <InputError message={errors[input.name]} className="mt-2" />
            </div>
          ))}
          <div className="text-center mt-4">
            <Button className="ml-4" disabled={processing}>
              登録して個別質問へ
            </Button>
          </div>
        </form>
      </Container>
    </AdminAuthenticatedLayout >
  );
}
