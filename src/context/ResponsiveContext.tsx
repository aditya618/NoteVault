import { useMediaQuery, useTheme } from '@mui/material';
import React, { createContext, FC, useContext } from 'react';

type ResponsiveContextType = {
    isMobile: boolean;
    isTablet: boolean;
    isDesktop: boolean;
}

const ResponsiveContext = createContext<ResponsiveContextType>({
    isMobile: false,
    isTablet: false,
    isDesktop: true,
});

export const useResponsive = () => useContext(ResponsiveContext);


export const ResponsiveProvider: FC<{children: React.ReactNode}> = ({children}) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));
    const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
    return (
        <ResponsiveContext.Provider value={{isMobile, isTablet, isDesktop}}>
            {children}
        </ResponsiveContext.Provider>
    );
};