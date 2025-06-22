import { createContext } from 'react';

export type ResponsiveContextType = {
    isMobile: boolean;
    isTablet: boolean;
    isDesktop: boolean;
}

export const ResponsiveContext = createContext<ResponsiveContextType>({
    isMobile: false,
    isTablet: false,
    isDesktop: true,
});

