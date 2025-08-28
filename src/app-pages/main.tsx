import { AboutUs } from "@/widgets/about-us";
import { MainHeader } from "@/widgets/main-header";
import { OurQuests } from "@/widgets/quest-list";

export default function MainPage() {
  return (
    <main>
      <MainHeader />
      <AboutUs />
      <OurQuests />
    </main>
  );
}
