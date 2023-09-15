import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { PageProps } from '@/types';
import Box from '@/Components/Box';
import { Container, FormControl, FormControlLabel, FormLabel, Paper, Radio, RadioGroup, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import Button from '@/Components/Button';

function createData(
  id: string,
  state: string 
) {
  return { id, state };
}

const rows = [
  createData('00000', '済'),
  createData('00001', '未回答'),
  createData('00002', '済'),
];

export default function Dashboard({ auth }: PageProps) {
    return (
      <AuthenticatedLayout
          user={auth.user}
          header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">{auth.user.name}</h2>}
      >
          <Head title="Dashboard" />
          
          <Container>
            <div className="py-12">
              <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div className='flex items-center'>
                  <div className='flex items-center px-4'>
                    <div className='pr-2 font-bold'>回答状況</div>
                    <Box>20%</Box>
                  </div>
                  <div className='flex items-center px-4'>
                    <div className='pr-2 font-bold'>回答数</div>
                    <Box>20名 / 100名</Box>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <FormControl>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="female"
                  name="radio-buttons-group"
                  row
                >
                  <FormControlLabel value="all" control={<Radio />} label="全員" />
                  <FormControlLabel value="no-answer" control={<Radio />} label="未回答" />
                  <FormControlLabel value="answer" control={<Radio />} label="回答済" />
                </RadioGroup>
                <div className='text-center'>
                  <Button>抽出</Button>
                </div>
              </FormControl>
            </div>
            <div className='mt-4'>
              <TableContainer sx={{ maxWidth: 650 }} component={Paper}>
                <Table aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell>NO.</TableCell>
                      <TableCell>従業員ID</TableCell>
                      <TableCell>回答状況</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map((row, index) => (
                      <TableRow
                        key={row.id}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                      >
                        <TableCell scope="row">
                          {index + 1}
                        </TableCell>
                        <TableCell>{row.id}</TableCell>
                        <TableCell className={row.state === '未回答' ? 'bg-main text-main-cont' : ''}>{row.state}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
            <div className='mt-4'>
              <Button>CSVダウンロード</Button>
            </div>
          </Container>
      </AuthenticatedLayout>
    );
}
