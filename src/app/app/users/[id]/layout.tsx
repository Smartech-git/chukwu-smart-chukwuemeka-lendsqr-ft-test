import { ReactNode } from "react";

import PageRouteBack from "@/components/common/page-route-back";
import PageTitle from "@/components/common/page-title";
import UserDetailsClientWrapper from "@/components/layouts/user-details-client-wrapper";
import Button from "@/components/ui/button";
import { getUser } from "@/requests/get-user";

interface Props {
  children: ReactNode;
  params: Promise<{ id: string }>;
}

export default async function UserDetailsLayout({ children, params }: Props) {
  const { id } = await params;
  const userDetials = await getUser(id);

  return (
    <>
      <div className='user-details-header'>
        <PageRouteBack route='/app/users' label='Back to users' />
        <div className='user-details-header-title'>
          <PageTitle title='Users details' />
          <div className='users-details-heaader-btns'>
            <Button size='md' variant='outlined'>
              Blacklist User
            </Button>
            <Button size='md' variant='outlined'>
              Activate User
            </Button>
          </div>
        </div>
      </div>

      <UserDetailsClientWrapper userId={id} initialData={userDetials} showProfile={true} />
      <div className='card users-details-layout-children'>{children}</div>
    </>
  );
}
