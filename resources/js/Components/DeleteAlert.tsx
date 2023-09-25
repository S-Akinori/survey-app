import React from "react"
import { Box, Modal } from "@mui/material"
import Button from "./Button"
import { Link } from "@inertiajs/react";

interface Props {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  routeName: string;
  data: {[key: string]: string | number};
}

const DeleteAlert = ({ open, setOpen, routeName, data}: Props) => {
  return (
    <Modal
      open={open}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      className='flex justify-center items-center'
    >
      <Box className='p-4 bg-white' sx={{ background: '#fcfcfc' }}>
        <div>
          <h2>削除してよろしいですか？</h2>
          <div className='mt-4 flex justify-end'>
            <Button className="mr-4" onClick={e => setOpen(false)}><Link method="delete" href={route(routeName, data)}>はい</Link></Button>
            <Button className="bg-red-500 text-white" onClick={e => setOpen(false)}>キャンセル</Button>
          </div>
        </div>
      </Box>
    </Modal>
  )
}

export default DeleteAlert