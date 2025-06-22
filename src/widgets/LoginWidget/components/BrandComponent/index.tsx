import { Box, Typography } from "@mui/material";
import { useResponsive } from "../../../../hooks/useResponsive";

function BrandComponent() {
  const {isMobile} = useResponsive();
  return (
    <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <Box sx={{display: 'flex', gap: '10px'}}>
            <Typography sx={{fontFamily: 'Inter'}} variant={isMobile ? 'h6' : 'h4'}>NoteVault —</Typography>
            <Typography sx={{fontFamily: 'Inter'}} variant={isMobile ? 'h6' : 'h4'} className={!isMobile ? "typewriter" : ""}>Fast and Simple</Typography>
        </Box>
        <Typography color="secondary" variant={isMobile ? 'h6' : 'h4'}>Your thoughts, locked and loaded.</Typography>
    </Box>
  )
}

export default BrandComponent