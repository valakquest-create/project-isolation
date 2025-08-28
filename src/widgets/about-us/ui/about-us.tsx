import { mainPageRepository } from "@/entities/main-page";
import "./about-us.scss";

export async function AboutUs() {
  const mainPage = await mainPageRepository.getMainPage();

  return (
    mainPage && (
      <section className="about-us" id="about">
        <div className="about-us__wrapper-first-block-text">
          <p className="about-us__description_plain">{mainPage.about}</p>
        </div>
      </section>
    )
  );
}
