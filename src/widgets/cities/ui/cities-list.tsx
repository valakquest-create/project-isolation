import { cityRepository, CityItem } from "@/entities/city/";
import { DeleteCityWrapper } from "./delete-city-wrapper";

export async function CitiesList() {
  const cities = await cityRepository.getAllCities();

  return (
    <div>
      {cities.length ? (
        <div className="grid grid-cols-2 gap-5">
          {cities.map(({ id, name, map }) => (
            <CityItem key={id} id={id} name={name} map={map}>
              <DeleteCityWrapper id={id} />
            </CityItem>
          ))}
        </div>
      ) : (
        "Городов не найдено"
      )}
    </div>
  );
}
