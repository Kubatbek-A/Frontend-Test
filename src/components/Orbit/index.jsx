import SpermSVG from '../../assets/icons/sperm.svg'
import InfectionSVG from '../../assets/icons/infection.svg'
import CovidSVG from '../../assets/icons/covid.svg'
import LashSVG from '../../assets/icons/lash.svg'
import StomachSVG from '../../assets/icons/stomach.svg'

import './index.scss';

export const Orbit = () => {
  return (
    <div id="circle-orbit-container">
      <div className="inner-orbit">
        <img src={StomachSVG} className="inner-orbit__stomach-icon" alt="" />
        <img src={CovidSVG} className="inner-orbit__covid-icon" alt="" />
      </div>

      <div className="middle-orbit">
        <img src={LashSVG} className="middle-orbit__lash-icon" alt="" />
      </div>

      <div className="outer-orbit">
        <img src={SpermSVG} className="outer-orbit__sperm-icon" alt="" />
        <img src={InfectionSVG} className="outer-orbit__infection-icon" alt="" />
      </div>
    </div>
  )
}