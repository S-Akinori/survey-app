import { useEffect, FormEventHandler } from 'react';
import GuestLayout from '@/Layouts/GuestLayout';
import Checkbox from '@/Components/Checkbox';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';
import Button from '@/Components/Button';

export default function ClientLogin({ status, canResetPassword }: { status?: string, canResetPassword: boolean }) {
  const { data, setData, post, processing, errors, reset } = useForm({
    client_id: '',
    password: '',
    remember: false,
  });

  const submit: FormEventHandler = (e) => {
    e.preventDefault();
    setData('password', data.client_id)
    post(route('client.login.store'));
  };

  return (
    <GuestLayout title='Cultivate Survey'>
      <Head title="Log in" />

      {status && <div className="mb-4 font-medium text-sm text-green-600">{status}</div>}

      <form onSubmit={submit}>
        <div>
          <InputLabel htmlFor="client_id" value="ID" />

          <TextInput
            id="id"
            name="client_id"
            value={data.client_id}
            className="mt-1 block w-full"
            autoComplete="username"
            isFocused={true}
            onChange={e => setData('client_id', e.target.value)}
            onBlur={e => setData('password', e.target.value)}
          />

          <InputError message={errors.password} className="mt-2" />
        </div>
        <div className="text-center mt-4">
          <Button className="ml-4" disabled={processing}>
            ログイン
          </Button>
        </div>
      </form>
    </GuestLayout>
  );
}
