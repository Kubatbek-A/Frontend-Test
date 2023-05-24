import { Orbit } from "../Orbit";
import { SearchBar } from "../SearchBar";

import './index.scss';

export const Hero = () => {
  return (
    <div className="hero">
      <div className="orbit">
        <Orbit />
      </div>

      <div className="wrapper">
        <SearchBar />
        <p className="welcome-text">
          Welcome to CharityRX Telemedicine where you <br/> can get complete online certified medical 
          care and <br/>prescription medication
        </p>
      </div>
    </div>
  )
}