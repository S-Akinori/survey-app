import { Link, Head } from '@inertiajs/react';
import { PageProps } from '@/types';
import Button from '@/Components/Button';

export default function Welcome({ auth, laravelVersion, phpVersion }: PageProps<{ laravelVersion: string, phpVersion: string }>) {
  return (
    <>
      <Head title="Welcome" />
      <div className="relative sm:flex sm:justify-center sm:items-center min-h-screen bg-dots-darker bg-center bg-gray-100 dark:bg-dots-lighter dark:bg-gray-900 selection:bg-red-500 selection:text-white">
        <div>
          <div className='mb-8 text-center'>
            <Button><Link href={route('login')}>クライアント管理者ログイン</Link></Button>
          </div>
          <div className='text-center'>
            <Button><Link href={route('admin.login')}>管理者ログイン</Link></Button>
          </div>
        </div>
      </div>
    </>
  );
}
