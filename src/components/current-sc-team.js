import * as React from "react"

const teamDict = {
    'BUL': ['blue', 'white', 'blue'],
    'CBR': ['#00FF00', 'white', '#00FF00'],
    'DOL': ['red', 'white', 'red'],
    'MEL': ['purple', 'white', 'purple'],
    'MNL': ['#800000', 'white', '#800000'],
    'NEW': ['red', 'blue', 'red'],
    'NZW': ['black', 'grey', 'black'],
    'NQC': ['yellow', 'white', 'blue'],
    'GCT': ['#6fa8dc', 'yellow', '#6fa8dc'],
    'PAR': ['blue', 'yellow', 'blue'],
    'STH': ['green', 'red', 'green'],
    'SYD': ['red', 'white', 'blue'],
    'WST': ['orange', 'white', 'black'],
    'SHA': ['#55ffff', 'white', '#55ffff'],
    'CBR': ['#00FF00', 'white', '#00FF00'],
    'CBR': ['#00FF00', 'white', '#00FF00'],
    
}

const Player = ({name, team, price}) => {
    const teamColours = teamDict[team]
    console.log(team)
    const outerDivStyle = {border: '1px solid black', borderRadius: '8px', width: '180px', overflow:'hidden', display: 'inline-block'}
    const playerNameDivStyle = {backgroundColor: '#494B4C', margin: '0px',  padding:'5px'}
    const playerNameStyle = {margin: '0px', color: 'white', fontFamily:'Arial'}
    const innerDivStyle = {backgroundColor: '#C8C9C9', padding:'10px'}
    const flexBox = {display: 'flex'}
    const teamColourOne = {width: '20px', height: 'auto', backgroundColor: teamColours[0], display: 'inline-block'}
    const teamColourTwo = {width: '20px', height: 'auto', backgroundColor: teamColours[1], display: 'inline-block'}
    const teamColorThree = {width: '20px', height: 'auto', backgroundColor: teamColours[2], display: 'inline-block'}
    const teamNameDivStyle = {display: 'inline-block', paddingLeft: '10px'}
    const teamNameStyle = {margin: '0px', fontFamily:'Arial'}
    const priceStyle = {margin: '0px', fontFamily:'Arial'}

    return (
        <div style={outerDivStyle} >
            <div style={playerNameDivStyle}>
                <p style={playerNameStyle}>{name}</p>
            </div>
            <div style={innerDivStyle}>
                <div style={flexBox}>
                    <div style={teamColourOne}></div>
                    <div style={teamColourTwo}></div>
                    <div style={teamColorThree}></div>
                    <div style={teamNameDivStyle}>
                        <p style={teamNameStyle}>{team}</p>
                        <p style={priceStyle}>{price}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

const Hooker = ({hooker}) => {
    console.log(hooker);
    return (
        <Player name={hooker.name} team={hooker.team} price={hooker.price}/>
    )
}

const CurrentSCTeam = () => {

    const FRF = [{name: 'J. Tapine', team: 'MEL', price: '$ 699, 500'},
                {name: 'T. Faasuamaleaui', team: 'MEL', price: '$ 704, 500'}]
    const HOK = {name: 'H. Grant', team: 'MEL', price: '$816,500'}
    const SRF = [{name: 'I. Papalii', team: 'MEL', price: '$ 831, 700'},
                {name: 'K. Koloamatangi', team: 'MEL', price: '$ 701, 000'},
                {name: 'B. Cartwright', team: 'MEL', price: '$ 234, 800'}]
    const HFB = {name: 'H. Grant', team: 'MEL', price: '$816,500'}
    const FE = {name: 'H. Grant', team: 'MEL', price: '$816,500'}
    const CTW = [{name: 'H. Grant', team: 'MEL', price: '$816,500'},
                {name: 'H. Grant', team: 'MEL', price: '$816,500'},
                {name: 'H. Grant', team: 'MEL', price: '$816,500'},
                {name: 'H. Grant', team: 'MEL', price: '$816,500'}]
    const FLB = {name: 'H. Grant', team: 'MEL', price: '$816,500'}
    const Bench = [{name: 'D. Cook', team: 'STH', price: '$790,700'},
                {name: 'H. Grant', team: 'MEL', price: '$816,500'},
                {name: 'H. Grant', team: 'MEL', price: '$816,500'},
                {name: 'H. Grant', team: 'MEL', price: '$816,500'}]
    const NS = []
    console.log(HOK)
    return (
        <div className="current-sc-team">
        <Hooker hooker={HOK} />
        </div>
    )
}

export default CurrentSCTeam