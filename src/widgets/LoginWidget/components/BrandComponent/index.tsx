import { Box, Typography } from "@mui/material";

function BrandComponent() {
  return (
    <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <Box sx={{display: 'flex', gap: '10px'}}>
            <Typography sx={{fontFamily: 'Inter'}} variant="h4">NoteVault —</Typography>
            <Typography sx={{fontFamily: 'Inter'}} variant="h4" className="typewriter">Fast and Simple</Typography>
        </Box>
        <Typography color="secondary" variant="h4">Your thoughts, locked and loaded.</Typography>
    </Box>
  )
}

export default BrandComponent