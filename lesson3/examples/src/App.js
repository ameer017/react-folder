
import './App.css';
import WeatherApp  from './WeatherApp';
import WeatherWidget from './WeatherWidgetClass';
import WeatherFunction from './WeatherWidgetFunction';

function App() {
  return (
    <div className="App">
      <WeatherApp />
      <WeatherWidget location = {Location}/>
      <WeatherFunction />
    </div>
  );
}

export default App;
