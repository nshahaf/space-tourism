import { useState, useEffect } from 'react';

const breakpoints = {
    mobile: 380,
    tablet: 768,
    desktop: 1200,
};

const useBreakpoint = () => {
    const [breakpoint, setBreakpoint] = useState(getCurrentBreakpoint());

    function getCurrentBreakpoint() {
        const width = window.innerWidth;
        if (width < breakpoints.tablet) return 'mobile';
        if (width < breakpoints.desktop) return 'tablet';
        return 'desktop';
    }

    useEffect(() => {
        const handleResize = () => {
            setBreakpoint(getCurrentBreakpoint());
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return breakpoint;
};

export default useBreakpoint;