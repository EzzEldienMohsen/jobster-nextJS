'use client';

import React from 'react';
import { useSearchParams } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';
import { getAllJobsAction } from '@/utils/actions';
import JobCard from './JobCard';
import Pagination from './Pagination';

const JobsList: React.FC = () => {
  const params = useSearchParams();
  const search = params.get('search') || '';
  const [currentPage, setCurrentPage] = React.useState(
    Number(params.get('page')) || 1
  ); // Local state
  const jobStatus = params.get('jobStatus') || 'all';

  const { data, isPending } = useQuery({
    queryKey: ['jobs', search, jobStatus, currentPage], // Ensure the currentPage is used here
    queryFn: () => getAllJobsAction({ search, jobStatus, page: currentPage }),
  });

  const jobs = data?.jobs || [];
  const totalPages = data?.totalPages || 0;
  const count = data?.count || 0;

  React.useEffect(() => {
    setCurrentPage(Number(params.get('page')) || 1);
  }, [params]);

  if (isPending)
    return (
      <div className="loading loading-spinner text-primary loading-lg"></div>
    );
  if (jobs.length === 0) {
    return <h2 className="text-xl">No Jobs Found....</h2>;
  }

  return (
    <>
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-xl font-semibold capitalize ">
          {count} jobs found
        </h2>
        {totalPages < 2 ? null : (
          <Pagination currentPage={currentPage} totalPages={totalPages} />
        )}
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        {jobs.map((job) => {
          return <JobCard key={job.id} job={job} />;
        })}
      </div>
    </>
  );
};

export default JobsList;
