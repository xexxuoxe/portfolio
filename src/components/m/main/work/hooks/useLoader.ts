import { useState, useCallback, useEffect } from 'react';

export const useLoader = () => {
  const [isLoaderDone, setIsLoaderDone] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    if (isLoaderDone) {
      setShowContent(true);
    }
  }, [isLoaderDone]);

  const handleLoaderComplete = useCallback(() => {
    setIsLoaderDone(true);
  }, []);

  return {
    isLoaderDone,
    showContent,
    handleLoaderComplete
  };
};