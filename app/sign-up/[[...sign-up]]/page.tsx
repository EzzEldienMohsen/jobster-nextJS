import { SignUp } from '@clerk/nextjs';
import React from 'react';

const SingUpPage: React.FC = () => {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <SignUp />;
    </div>
  );
};

export default SingUpPage;
