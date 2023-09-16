import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import { PageProps } from '@/types';
import { Box, Button, Container, Modal, styled } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const VisuallyHiddenInput = styled('input')`
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  bottom: 0;
  left: 0;
  white-space: nowrap;
  width: 1px;
`;

export default function CreateList({ auth }: PageProps) {
  const [open, setOpen] = React.useState(false);
  const [file, setFile] = React.useState<File | null>(null);
  const [state, setState] = React.useState<'uploading' | 'success' | 'error' | null>(null)
  const { data, setData, post, processing, errors, reset } = useForm<{file: File | null}>({
      file: null
  });
  const onChange: React.FormEventHandler<HTMLInputElement> = (event) => {
    const files = event.currentTarget.files;
    if (files === null) {
      return;
    }
    const file = files[0];
    setFile(file)
    setOpen(true);
    
  }
  const handleClose = () => {
    setOpen(false)
    setState(null)
  };

  async function handleUpload() {
    if(!file) return
    setData('file', file)
    post(route('upload'))
    // try {
    //     const response = await fetch('/api/upload', {
    //         method: 'POST',
    //         body: formData,
    //     });

    //     if (!response.ok) {
    //       setState('error')
    //       throw new Error('Network response was not ok');
    //     }

    //     const data = await response.json();
    //     setState('success')
    // } catch (error) {
    //     console.error('Error uploading file:', error);
    //     setState('error')
    // }
  }
  
  return (
    <AuthenticatedLayout
      user={auth.user}
      header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">{auth.user.name}</h2>}
    >
      <Head title="CreateList" />

      <Container className='py-12'>
        <h2 className='mb-4'>従業員リスト(csv)をアップロードしてください。</h2>
        <Button
          component="label"
          variant="contained"
          startIcon={<CloudUploadIcon />}
          href="#file-upload"
        >
          アップロード
          <VisuallyHiddenInput onChange={onChange} type="file" accept='.csv,.txt' />
        </Button>
      </Container>
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className='flex justify-center items-center'
      >
        <Box className='p-4 bg-white' sx={{background: '#fcfcfc'}}>
          {state === null && (
            <div>
              <h2>「{file?.name}」をアップロードしますか？</h2>
              <div className='mt-4 flex justify-end'>
                <div className='pr-4'>
                  <Button variant="contained" onClick={handleUpload} disabled={processing}>アップロード</Button>
                </div>
                <div>
                  <Button color='error' className='pr-4' variant="contained" onClick={handleClose} disabled={processing}>キャンセル</Button>
                </div>
              </div>
            </div>
          )}
          {state === 'success' && (
            <div>
              <h2>アップロードしましたが完了しました</h2>
              <div className='mt-4 flex justify-end'>
                <div>
                  <Button variant="contained" onClick={handleClose}>
                    <Link href={route('dashboard')} onClick={handleClose}>ダッシュボードへ</Link>
                  </Button>
                </div>
              </div>
            </div>
          )}
          {state === 'error' && (
            <div>
              <h2>アップロードに失敗しました</h2>
              <div className='mt-4 flex justify-end'>
                <div>
                  <Button color='error' className='pr-4' variant="contained" onClick={handleClose}>閉じる</Button>
                </div>
              </div>
            </div>
          )}
        </Box>
      </Modal>
    </AuthenticatedLayout>
  );
}
