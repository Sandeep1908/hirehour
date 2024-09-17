import { createContext, ReactNode, useContext, useState } from 'react';

 
type HeaderContextTypes = {
  isDashboardOpen: boolean;
  setIsDashBoardOpen: (e: boolean) => void;
};

 
type HeaderContextProviderProps = {
  children: ReactNode;
};

 
const headerContext = createContext<HeaderContextTypes | undefined>(undefined);

export const HeaderContextProvider: React.FC<HeaderContextProviderProps> = ({ children }) => {
 
  const [isDashboardOpen, setIsDashBoardOpen] = useState<boolean>(true);
  

  return (
   
    <headerContext.Provider value={{ isDashboardOpen, setIsDashBoardOpen }}>
      {children}
    </headerContext.Provider>
  );
};

// Custom hook to use the HeaderContex
 const useHeaderContext = () => {
  // Get the context value
  const context = useContext(headerContext);

  // If context is undefined, throw an error
  if (!context) {
    throw new Error('useHeaderContext must be used within a HeaderContextProvider');
  }

  return context;
};

export default useHeaderContext;