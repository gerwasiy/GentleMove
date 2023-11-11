import React from 'react';
import { useRouter } from 'next/router';


const PrivateRouter = ({ children }) => {
  
  const router = useRouter();


  if (!user) {
    router.push('/Authentication');
    return null;
  }
  return <>{children}</>;
};

export default PrivateRouter;
