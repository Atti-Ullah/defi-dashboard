import { createContext, useContext, useState, ReactNode, Dispatch, SetStateAction } from 'react';

interface PopupMessageType {
  type: 'success' | 'error' | 'info';
}

interface ConfigContextType {
  loading: boolean;
  setLoading: (value: boolean) => void;
  popupMessage: {message:string | null, type: PopupMessageType | null};
  setPopupMessage: Dispatch<SetStateAction<{ message: string | null; type: PopupMessageType | null; }>>;
}

const ConfigContext = createContext<ConfigContextType | undefined>(undefined);

export function ConfigProvider({ children }: { children: ReactNode }) {
  const [loading, setLoading] = useState(false);
  const [popupMessage, setPopupMessage] = useState<{message:string | null, type: PopupMessageType | null}>({message: null, type: null});

  return (
    <ConfigContext.Provider value={{ loading, setLoading, popupMessage, setPopupMessage }}>
      {children}
    </ConfigContext.Provider>
  );
}

export function useConfig() {
  const context = useContext(ConfigContext);
  if (!context) {
    throw new Error('useConfig must be used within a ConfigProvider');
  }
  return context;
}
