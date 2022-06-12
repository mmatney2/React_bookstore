import React from 'react'
import EditProfileForm from '../forms/EditProfileForm'
import {Paper, Typography} from '@mui/material'
import {useTheme} from '@mui/material/styles'

export default function Edit() {
    const theme = useTheme()

  return (
      <Paper sx={{m:5, p:5, justifyContent:"center", backgroundColor: theme.palette.background.paper, backgroundImage:theme.palette.background.paper}}>
        <Typography variant="h4">Edit</Typography>
        <EditProfileForm/>
      </Paper>
  )
}
