import React, { createContext, useState, ReactNode, useContext } from 'react';

interface CctvContextType {
  showCctv: boolean;
  setShowCctv: React.Dispatch<React.SetStateAction<boolean>>;
}

const CctvContext = createContext<CctvContextType>({
  showCctv: false,
  setShowCctv: () => {},
});

const CctvProvider = ({ children }: { children: ReactNode }) => {
  const context = useContext(CctvContext);
  const [showCctv, setShowCctv] = useState<boolean>(false);

  if (!context) {
    throw new Error('CctvProvider must be used within a CctvContext');
  }

  return <CctvContext.Provider value={{ showCctv, setShowCctv }}>{children}</CctvContext.Provider>;
};

export { CctvProvider, CctvContext };
