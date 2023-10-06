import { Link, Head } from '@inertiajs/react';
import { PageProps } from '@/types';
import Button from '@/Components/Button';
import ApplicationLogo from '@/Components/ApplicationLogo';

export default function Welcome({ auth, laravelVersion, phpVersion }: PageProps<{ laravelVersion: string, phpVersion: string }>) {
  return (
    <>
      <Head title="Welcome" />
      <div className="relative flex justify-center items-center min-h-screen bg-dots-darker bg-center bg-base-cont dark:bg-dots-lighter dark:bg-gray-900 selection:bg-red-500 selection:text-white">
        <div>
          <div className='text-center mb-4'>
            <ApplicationLogo width={100} height={100} className='mx-auto' />
            <h1 className='font-bold text-xl'>Key Culture Survey</h1>
          </div>
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
