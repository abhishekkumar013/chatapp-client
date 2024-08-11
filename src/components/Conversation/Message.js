import { Box, Stack } from '@mui/material'
import React from 'react'
import { ChatList, Chat_History } from '../../data'
import {
  DocMsg,
  ImgMsg,
  LinkMsg,
  ReplyMsg,
  TextMessage,
  Timeline,
} from './MsgTypes'

const Message = ({ menu }) => {
  return (
    <Box p={3}>
      <Stack spacing={3}>
        {Chat_History.map((chat) => {
          switch (chat.type) {
            case 'divider':
              return <Timeline chat={chat} />
            case 'msg':
              switch (chat.subtype) {
                case 'img':
                  return <ImgMsg chat={chat} menu={menu} />
                case 'doc':
                  return <DocMsg chat={chat} menu={menu} />
                case 'link':
                  return <LinkMsg chat={chat} menu={menu} />
                case 'reply':
                  return <ReplyMsg chat={chat} menu={menu} />

                default:
                  return <TextMessage chat={chat} menu={menu} />
              }
            default:
              return <></>
          }
        })}
      </Stack>
    </Box>
  )
}

export default Message
