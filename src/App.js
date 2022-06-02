import logo from './logo.svg';
import './App.css';
import {
  useEffect,
  useState
} from "react";
import {hexToColors} from "./helpers/convert-colors";

const App = () => {
  const setMainColorObj = (hex) => {
    setMainColor(hexToColors(hex))
    console.log(hexToColors(hex));
  }

  const calcMinMax = (value, max, min = 0) => {
    let overflow = value;

    if (value < min) overflow = max + value;
    if (value > max) overflow = value - max;

    return value >= min && value <= max ? overflow : calcMinMax(overflow, max)
  }

  const [mainColor, setMainColor] = useState({
    hex: '#eeeeee',
    rgb: {
      r: 238,
      g: 238,
      b: 238
    },
    hsl: {
      h: 0,
      s: 0,
      l: 0.93
    }
  });

  useEffect(() => {
    setMainColorObj('#0000ff');
  }, [])

  return (
      <div>
        <div className="header">
          <input type="color" value={mainColor.hex} onChange={e => setMainColorObj(e.target.value)} />
        </div>
        <div>
          <h1>Complimentary</h1>
          <div className="color-container">
            <div style={{backgroundColor: mainColor.hex}}>
              <strong>{mainColor.hex}</strong>
            </div>
            <div style={
              {
                backgroundColor: `hsl(${calcMinMax(mainColor.hsl.h + 180, 360)},${mainColor.hsl.s}%, ${mainColor.hsl.l}%)`
              }
            }>
              {`hsl(${calcMinMax(mainColor.hsl.h + 180, 360)},${mainColor.hsl.s}%, ${mainColor.hsl.l}%)`}
            </div>
          </div>
        </div>

        <h1>Triad</h1>
        <div className="color-container">
          <div style={{backgroundColor: mainColor.hex}}>
            <strong>{mainColor.hex}</strong>
          </div>
          <div style={
            {
              backgroundColor: `hsl(${calcMinMax(mainColor.hsl.h + 120, 360)},${mainColor.hsl.s}%, ${mainColor.hsl.l}%)`
            }
          }>
            {`hsl(${calcMinMax(mainColor.hsl.h + 120, 360)},${mainColor.hsl.s}%, ${mainColor.hsl.l}%)`}
          </div>
          <div style={
            {
              backgroundColor: `hsl(${calcMinMax(mainColor.hsl.h + 240, 360)},${mainColor.hsl.s}%, ${mainColor.hsl.l}%)`
            }
          }>
            {`hsl(${calcMinMax(mainColor.hsl.h + 240, 360)},${mainColor.hsl.s}%, ${mainColor.hsl.l}%)`}
          </div>
        </div>

        <h1>Square</h1>
        <div className="color-container">
          <div style={{backgroundColor: mainColor.hex}}>
            <strong>{mainColor.hex}</strong>
          </div>
          <div style={
            {
              backgroundColor: `hsl(${calcMinMax(mainColor.hsl.h + 90, 360)},${mainColor.hsl.s}%, ${mainColor.hsl.l}%)`
            }
          }>
            {`hsl(${calcMinMax(mainColor.hsl.h + 90, 360)},${mainColor.hsl.s}%, ${mainColor.hsl.l}%)`}
          </div>
          <div style={
            {
              backgroundColor: `hsl(${calcMinMax(mainColor.hsl.h + 180, 360)},${mainColor.hsl.s}%, ${mainColor.hsl.l}%)`
            }
          }>
            {`hsl(${calcMinMax(mainColor.hsl.h + 180, 360)},${mainColor.hsl.s}%, ${mainColor.hsl.l}%)`}
          </div>
          <div style={
            {
              backgroundColor: `hsl(${calcMinMax(mainColor.hsl.h + 270, 360)},${mainColor.hsl.s}%, ${mainColor.hsl.l}%)`
            }
          }>
            {`hsl(${calcMinMax(mainColor.hsl.h + 270, 360)},${mainColor.hsl.s}%, ${mainColor.hsl.l}%)`}
          </div>
        </div>

        <h1>Analogous</h1>
        <div className="color-container">
          <div style={
            {
              backgroundColor: `hsl(${calcMinMax(mainColor.hsl.h - 40, 360)},${mainColor.hsl.s}%, ${mainColor.hsl.l}%)`
            }
          }>
            {`hsl(${calcMinMax(mainColor.hsl.h - 40, 360)},${mainColor.hsl.s}%, ${mainColor.hsl.l}%)`}
          </div>
          <div style={
            {
              backgroundColor: `hsl(${calcMinMax(mainColor.hsl.h - 20, 360)},${mainColor.hsl.s}%, ${mainColor.hsl.l}%)`
            }
          }>
            {`hsl(${calcMinMax(mainColor.hsl.h - 20, 360)},${mainColor.hsl.s}%, ${mainColor.hsl.l}%)`}
          </div>
          <div style={{backgroundColor: mainColor.hex}}>
            <strong>{mainColor.hex}</strong>
          </div>
          <div style={
            {
              backgroundColor: `hsl(${calcMinMax(mainColor.hsl.h + 20, 360)},${mainColor.hsl.s}%, ${mainColor.hsl.l}%)`
            }
          }>
            {`hsl(${calcMinMax(mainColor.hsl.h + 20, 360)},${mainColor.hsl.s}%, ${mainColor.hsl.l}%)`}
          </div>
          <div style={
            {
              backgroundColor: `hsl(${calcMinMax(mainColor.hsl.h + 40, 360)},${mainColor.hsl.s}%, ${mainColor.hsl.l}%)`
            }
          }>
            {`hsl(${calcMinMax(mainColor.hsl.h + 40, 360)},${mainColor.hsl.s}%, ${mainColor.hsl.l}%)`}
          </div>
        </div>

        <h1>Monochromatic</h1>
        <div className="color-container">
          <div style={
            {
              backgroundColor: `hsl(${mainColor.hsl.h},${mainColor.hsl.s}%, ${calcMinMax(mainColor.hsl.l - 25, 100)}%)`
            }
          }>
            {`hsl(${mainColor.hsl.h},${mainColor.hsl.s}%, ${calcMinMax(mainColor.hsl.l - 25, 100)}%)`}
          </div>
          <div style={
            {
              backgroundColor: `hsl(${mainColor.hsl.h},${calcMinMax(mainColor.hsl.s - 25, 100)}%, ${mainColor.hsl.l}%)`
            }
          }>
            {`hsl(${mainColor.hsl.h},${calcMinMax(mainColor.hsl.s - 25, 100)}%, ${mainColor.hsl.l}%)`}
          </div>
          <div style={{backgroundColor: mainColor.hex}}>
            <strong>{mainColor.hex}</strong>
          </div>
          <div style={
            {
              backgroundColor: `hsl(${mainColor.hsl.h},${mainColor.hsl.s}%, ${calcMinMax(mainColor.hsl.l + 50, 100)}%)`
            }
          }>
            {`hsl(${mainColor.hsl.h},${mainColor.hsl.s}%, ${calcMinMax(mainColor.hsl.l + 50, 100)}%)`}
          </div>
          <div style={
            {
              backgroundColor: `hsl(${mainColor.hsl.h},${calcMinMax(mainColor.hsl.s + 25, 100)}%, ${mainColor.hsl.l}%)`
            }
          }>
            {`hsl(${mainColor.hsl.h},${calcMinMax(mainColor.hsl.s + 25, 100)}%, ${mainColor.hsl.l}%)`}
          </div>
        </div>
      </div>
  );
}

export default App;
