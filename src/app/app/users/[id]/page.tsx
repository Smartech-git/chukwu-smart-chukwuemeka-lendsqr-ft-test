import UserDetailsClientWrapper from "@/components/layouts/user-details-client-wrapper";
import { getUser } from "@/requests/get-user";

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const userDetials = await getUser(id);

  return <UserDetailsClientWrapper userId={id} initialData={userDetials} showGeneralDetails={true} />;
}
