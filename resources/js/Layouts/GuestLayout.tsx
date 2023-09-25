import ApplicationLogo from '@/Components/ApplicationLogo';

interface Props {
  title: string;
  children: React.ReactNode;
}

export default function Guest({title, children}: Props) {
    return (
        <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-base-cont">
            <div className='text-center'>
              <ApplicationLogo className='mx-auto mb-4' />
              <h2 className='mt-4 text-lg font-bold text-main'>{title}</h2>
            </div>

            <div className="w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">
                {children}
            </div>
        </div>
    );
}
