import React from 'react';

const JobInfo: React.FC<{ icon: React.ReactNode; text: string }> = ({
  icon,
  text,
}) => {
  return (
    <div className="flex gap-x-2 items-center">
      {icon}
      {text}
    </div>
  );
};

export default JobInfo;
