import { useEffect, useState } from "react";
import "./App.css";

// 1. 앱이 실행되자마자, 현재위치기반의 날씨가 보인다
// 2. 날씨 정보에는 도시, 섭씨, 화씨 날씨 상태
// 3. 5개의 버튼이 있음(1개는 현재위치, 4개는 다른 도시)
// 4. 도시버튼을 클릭할 때 마다 도시별 날씨가 나온다.
// 5. 현재 위치 버튼을 누르면 다시 현재 위치 기반의 날씨가 나옴
// 6. 데이터를 들고 오는 동안 로딩 스피너가 돈다.

function App() {
  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      getWeatherByCurrentLocation(lat, lon);
    });
  };

  const getWeatherByCurrentLocation = async (lat, lon) => {
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=a69980b44af3586a24a167213e15b6d0`;
    let response = await fetch(url);
    let data = await response.json();
    console.log("데이터는", data);
  };

  useEffect(() => {
    getCurrentLocation();
  }, []);

  return <div></div>;
}

export default App;
