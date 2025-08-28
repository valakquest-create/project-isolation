import { franchisingRepository } from "@/entities/franchising";

import "./franchising.scss";

export async function Franchising() {
  const franchising = await franchisingRepository.readFranchising();

  return (
    <main>
      {franchising ? (
        <section className="franchising">
          <div className="franchising__wrapper">
            <h1 className="franchising__title">{franchising.title}</h1>
            <div className="franchising__description">
              {franchising.description}
            </div>
          </div>
        </section>
      ) : (
        <section className="franchising">
          <div className="franchising__wrapper">
            <h1 className="franchising__title">В разработке</h1>
            <div className="franchising__description">В разработке</div>
          </div>
        </section>
      )}
    </main>
  );
}
