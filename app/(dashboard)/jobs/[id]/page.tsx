import EditJobForm from '@/components/EditJobForm';
import { getSingleJobAction } from '@/utils/actions';
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
  useQuery,
} from '@tanstack/react-query';
import { usePathname } from 'next/navigation';
import React from 'react';

const SingleJobPage: React.FC<{ params: { id: string } }> = async ({
  params,
}) => {
  const { id } = params;
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ['job', id],
    queryFn: () => getSingleJobAction(id),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <EditJobForm jobId={id} />
    </HydrationBoundary>
  );
};

export default SingleJobPage;
