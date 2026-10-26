import HomeView, { homeMetadata } from "@/views/HomeView";

export const metadata = homeMetadata("uk");

export default function Page() {
  return <HomeView lang="uk" />;
}
