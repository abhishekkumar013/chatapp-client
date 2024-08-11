import { Box, Stack } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import React from 'react'
import Header from './Header'

import Footer from './Footer'
import Message from './Message'

const Conversation = () => {
  const theme = useTheme()
  return (
    <Stack height={'100%'} maxHeight={'100vh'} width={'auto'}>
      {/* chat  header */}
      <Header />
      {/* msg */}
      <Box
        width={'100%'}
        sx={{ flexGrow: 1, height: '100%', overflowY: 'scroll' }}
      >
        <Message menu={true} />
      </Box>
      {/* char footer */}
      <Footer />
    </Stack>
  )
}

export default Conversation
