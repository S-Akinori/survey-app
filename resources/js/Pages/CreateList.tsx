import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import { PageProps } from '@/types';
import { Box, Button, Container, Modal, Table, TableBody, TableCell, TableHead, TableRow, styled } from '@mui/material';
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
  const [state, setState] = React.useState<'uploading' | 'success' | 'error' | null>(null)
  const { data, setData, post, processing, errors, reset } = useForm<{ file: File | null }>({
    file: null
  });
  const onChange: React.FormEventHandler<HTMLInputElement> = (event) => {
    const files = event.currentTarget.files;
    if (files === null) {
      return;
    }
    const file = files[0];
    
    setData('file', file)
    setOpen(true);

  }
  const handleClose = () => {
    setOpen(false)
    setState(null)
  };

  async function handleUpload() {
    if (!data.file) {
      setState('error');
      return
    }
    post(route('upload'))
  }

  return (
    <AuthenticatedLayout
      user={auth.user}
      header={<h2 className="font-semibold leading-tight">{auth.user.name}</h2>}
    >
      <Head title="従業員リスト登録" />

      <Container className='py-12'>
        <h2 className='mb-4'>従業員リスト(csv)をアップロードしてください。</h2>
        <div className='mb-8'>
          <p className='mb-4'>以下のような形式のcsvファイルをアップロードしてください。</p>
          <Table aria-label="simple table" sx={{width: 400}}>
            <TableHead>
              <TableRow>
                <TableCell className='bg-gray-300'></TableCell>
                <TableCell className='bg-gray-300'>A</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell scope="row" className='bg-gray-300'>1</TableCell>
                <TableCell>ID</TableCell>
              </TableRow>
              <TableRow>
                <TableCell scope="row" className='bg-gray-300'>2</TableCell>
                <TableCell>R0151000</TableCell>
              </TableRow>
              <TableRow>
                <TableCell scope="row" className='bg-gray-300'>3</TableCell>
                <TableCell>R0151001</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
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
        <Box className='p-4 bg-white' sx={{ background: '#fcfcfc' }}>
          {state === null && (
            <div>
              <h2>「{data.file?.name}」をアップロードしますか？</h2>
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
