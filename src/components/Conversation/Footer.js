import {
  Box,
  Fab,
  IconButton,
  InputAdornment,
  Stack,
  Tooltip,
} from '@mui/material'
import { useTheme } from '@mui/material/styles'
import React, { useState } from 'react'
import StyledInput from '../StyledInput'

import data from '@emoji-mart/data'
import Picker from '@emoji-mart/react'
import {
  Link,
  Camera,
  File,
  Image,
  LinkSimple,
  PaperPlaneTilt,
  Smiley,
  Sticker,
  User,
} from 'phosphor-react'

const Actions = [
  {
    color: '#4da5fe',
    icon: <Image size={24} />,
    y: 102,
    title: 'Photo/Video',
  },
  {
    color: '#1b8cfe',
    icon: <Sticker size={24} />,
    y: 172,
    title: 'Stickers',
  },
  {
    color: '#0172e4',
    icon: <Camera size={24} />,
    y: 242,
    title: 'Image',
  },
  {
    color: '#0159b2',
    icon: <File size={24} />,
    y: 312,
    title: 'Document',
  },
  {
    color: '#013f7f',
    icon: <User size={24} />,
    y: 382,
    title: 'Contact',
  },
]

const ChatInput = ({ setOpenPicker }) => {
  const [openAction, setOpenAction] = useState(false)
  return (
    <StyledInput
      fullWidth
      placeholder="write a message.."
      variant="filled"
      InputProps={{
        disableUnderline: true,
        startAdornment: (
          <Stack sx={{ width: 'max-content' }}>
            {openAction && (
              <Stack sx={{ position: 'relative' }}>
                {Actions.map((el) => (
                  <Tooltip title={el.title} placement="right">
                    <Fab
                      sx={{
                        position: 'absolute',
                        top: -el.y,
                        backgroundColor: el.color,
                      }}
                    >
                      {el.icon}
                    </Fab>
                  </Tooltip>
                ))}
              </Stack>
            )}
            <InputAdornment>
              <IconButton onClick={() => setOpenAction(!openAction)}>
                <Link />
              </IconButton>
            </InputAdornment>
          </Stack>
        ),
        endAdornment: (
          <InputAdornment>
            <IconButton onClick={() => setOpenPicker((prev) => !prev)}>
              <Smiley />
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  )
}
const Footer = () => {
  const theme = useTheme()
  const [openPicker, setOpenPicker] = useState(false)
  return (
    <Box
      p={2}
      sx={{
        //   height: 100,
        width: '100%',
        backgroundColor:
          theme.palette.mode === 'light'
            ? '#F8FAFF'
            : theme.palette.background.paper,
        boxShadow: '0px 0px 2px rgba(0,0,0,0.25)',
      }}
    >
      <Stack direction={'row'} alignItems={'center'} spacing={3}>
        {/* style input */}
        <Stack sx={{ width: '100%' }}>
          {openPicker && (
            <Box sx={{ zIndex: 10, position: 'fixed', bottom: 81, right: 100 }}>
              <Picker
                theme={theme.palette.mode}
                data={data}
                onEmojiSelect={console.log}
              />
            </Box>
          )}
          <ChatInput setOpenPicker={setOpenPicker} />
        </Stack>
        <Box
          sx={{
            height: 48,
            width: 48,
            backgroundColor: theme.palette.primary.main,
            borderRadius: 1.5,
          }}
        >
          <Stack
            sx={{ height: '100%', width: '100%' }}
            alignItems={'center'}
            justifyContent={'center'}
          >
            <IconButton>
              <PaperPlaneTilt color="#fff" />
            </IconButton>
          </Stack>
        </Box>
      </Stack>
    </Box>
  )
}

export default Footer
