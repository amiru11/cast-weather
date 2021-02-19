// (0°C × 9/5) + 32 = 32°F
// (32°F − 32) × 5/9 = 0°C
import { useState, useEffect } from 'react';

function calculateColor(temperature: number): string {
  let newColor = '';
  if (temperature >= 44) {
    newColor = `#801109`;
  } else if (temperature >= 40) {
    newColor = `#D64338`;
  } else if (temperature >= 36) {
    newColor = `#FF694B`;
  } else if (temperature >= 32) {
    newColor = `#FF8744`;
  } else if (temperature >= 28) {
    newColor = `#FF9F48`;
  } else if (temperature >= 24) {
    newColor = `#FFB15A`;
  } else if (temperature >= 20) {
    newColor = `#FFC06A`;
  } else if (temperature >= 16) {
    newColor = `#FFD07B`;
  } else if (temperature >= 12) {
    newColor = `#FFE18F`;
  } else if (temperature >= 8) {
    newColor = `#FBE8B6`;
  } else if (temperature >= 4) {
    newColor = `#FDF5DD`;
  } else if (temperature >= 0) {
    newColor = `#ECF5FE`;
  } else if (temperature >= -4) {
    newColor = `#DCE7FE`;
  } else if (temperature >= -8) {
    newColor = `#B9CDFF`;
  } else if (temperature >= -12) {
    newColor = `#93B0FF`;
  } else if (temperature >= -16) {
    newColor = `#7398FF`;
  } else if (temperature >= -20) {
    newColor = `#5B73F5`;
  } else if (temperature >= -24) {
    newColor = `#4952D9`;
  } else if (temperature >= -28) {
    newColor = `#372FC3`;
  } else {
    newColor = `#2306AA`;
  }

  return newColor;
}

export function useTemperatureUnit(units: string, originTemp: number) {
  const [newTemperature, setNewTemperature] = useState<number>(
    Math.round(originTemp),
  );
  const [storeUnits, setStoreUnits] = useState<string>('metric');
  const [castColor, setCastColor] = useState<string>(
    calculateColor(Math.round(originTemp)),
  );

  const calculateTemp = (): void => {
    setStoreUnits(units);
    setNewTemperature(
      units === 'metric'
        ? Math.round(((newTemperature - 32) * 5) / 9)
        : Math.round((newTemperature * 9) / 5 + 32),
    );
  };

  useEffect(() => {
    if (storeUnits !== units) {
      calculateTemp();
    }
  }, [storeUnits, units]);

  return [newTemperature, castColor];
}
