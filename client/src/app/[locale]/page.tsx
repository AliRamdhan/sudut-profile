import { redirect } from "next/navigation";

const Page = ({ params }: { params: { locale: string } }) => {
  redirect(`/${params.locale}/h`);
  return null;
};

export default Page;
