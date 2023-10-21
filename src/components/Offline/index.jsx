import React, { useEffect, useState } from 'react';

const Offline = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(
    () => {
      console.log("mounted");

      const handleOffline = () => {
        setIsOnline(false);
        console.log("spuštění funkce");
      }

      const handleOnline = () => {
        setIsOnline(true);
        console.log("spuštění funkce");
      }

      window.addEventListener('offline', handleOffline);
      window.addEventListener('online', handleOnline);


      return () => {
        console.log("unmounted");
        window.removeEventListener("offline", handleOffline);
        window.removeEventListener("online", handleOnline);
      }
    }
  );

  if (isOnline) {
    return (
      <p>Všechno v pořádku</p>
    )
  };

  return (
    <p>Jste offline!</p>
  );

};


export default Offline;