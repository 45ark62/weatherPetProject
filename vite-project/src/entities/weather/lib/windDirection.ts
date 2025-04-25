const getWindDirection = (degree: number) => {
    if (degree >= 337.5 || degree < 22.5) return "Северный (N)";
    if (degree >= 22.5 && degree < 67.5) return "Северо-восточный (NE)";
    if (degree >= 67.5 && degree < 112.5) return "Восточный (E)";
    if (degree >= 112.5 && degree < 157.5) return "Юго-восточный (SE)";
    if (degree >= 157.5 && degree < 202.5) return "Южный (S)";
    if (degree >= 202.5 && degree < 247.5) return "Юго-западный (SW)";
    if (degree >= 247.5 && degree < 292.5) return "Западный (W)";
    if (degree >= 292.5 && degree < 337.5) return "Северо-западный (NW)";
    return "Неизвестное направление";
};

export default getWindDirection;