import Image from "next/image";
import { ctoF } from "../services/converters";
import styles from "./MainCard.module.css";

export const MainCard = ({
  city,
  country,
  description,
  iconName,
  systemUsed,
  weatherData,
}) => {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.location}>
        {city}, {country}
      </h1>
      <p className={styles.description}>{description}</p>
      <Image
        className={styles.image}
        src={`/icons/${iconName}.svg`}
        alt="weatherIcon"
      />
      <h1 className={styles.temperature}>
        {systemUsed == "metric"
          ? Math.round(weatherData.main.temp)
          : Math.round(ctoF(weatherData.main.temp))}
        °{systemUsed == "metric" ? "C" : "F"}
      </h1>
      <p>
        Feels like{" "}
        {systemUsed == "metric"
          ? Math.round(weatherData.main.feels_like)
          : Math.round(ctoF(weatherData.main.feels_like))}
        °{systemUsed == "metric" ? "C" : "F"}
      </p>
    </div>
  );
};