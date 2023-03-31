import * as React from "react"

const Player = ({name, team}) => {
    const outerDivStyle = {border: '1px solid black', borderRadius: '8px', width: '180px', overflow:'hidden', display: 'inline-block'}
    const playerNameDivStyle = {backgroundColor: '#494B4C', margin: '0px',  padding:'5px'}
    const playerNameStyle = {margin: '0px', color: 'white', fontFamily:'Arial'}
    const innerDivStyle = {backgroundColor: '#C8C9C9', padding:'10px'}
    const flexBox = {display: 'flex'}
    const teamColourOne = {width: '20px', height: 'auto', backgroundColor: '#00FF00', display: 'inline-block'}
    const teamColorTwo = {width: '20px', height: 'auto', backgroundColor: 'white', display: 'inline-block'}
    const teamColorThree = {width: '20px', height: 'auto', backgroundColor: '#00FF00', display: 'inline-block'}
    const teamNameDivStyle = {display: 'inline-block', paddingLeft: '10px'}
    const teamNameStyle = {margin: '0px', fontFamily:'Arial'}
    const priceStyle = {margin: '0px', fontFamily:'Arial'}

    return (
        <div class="player" style={outerDivStyle} >
            <div style={playerNameDivStyle}>
                <p style={playerNameStyle}>H. Smith-Shields</p>
            </div>
            <div style={innerDivStyle}>
                <div style={flexBox}>
                    <div style={teamColourOne}></div>
                    <div style={teamColorTwo}></div>
                    <div style={teamColorThree}></div>
                    <div style={teamNameDivStyle}>
                        <p style={teamNameStyle}>CBR</p>
                        <p style={priceStyle}>$ 300, 300</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

const Hooker = () => {

    return (
        <Player />
    )
}

const CurrentSCTeam = () => {
  

  return (
    <div className="current-sc-team">
      <Hooker />
    </div>
  )
}

export default CurrentSCTeam