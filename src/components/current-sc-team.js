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

const Player = ({name, team, price, reserve = false}) => {
    const teamColours = teamDict[team]
    console.log(team)
    var playerNameDivStyle = {backgroundColor: '#494B4C', margin: '0px',  padding:'5px'}
    var innerDivStyle = {backgroundColor: '#C8C9C9', padding:'10px'}
    if (reserve === true) {
        playerNameDivStyle['backgroundColor'] = '#660066'
        innerDivStyle['backgroundColor'] = '#d8b2d8'

    }
    const outerDivStyle = {border: '1px solid black', borderRadius: '8px', width: '180px', overflow:'hidden', display: 'inline-block'}
    const playerNameStyle = {margin: '0px', color: 'white', fontFamily:'Arial'}
    
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
    const centreDiv = {margin: 'auto', width: '180px'}
    return (
        <div style={centreDiv}>
            <Player name={hooker.name} team={hooker.team} price={hooker.price}/> 
        </div>
        
    )
}

const FrontRow = ({frontRow}) => {
    const frontRow1 = frontRow[0]
    const frontRow2 = frontRow[1]
    const centreDiv = {margin: 'auto', width: '97%'}
    const rightForward = {display: 'inline-block', float: 'right'}
    return (
        <div style={centreDiv}>
            <Player name={frontRow1.name} team={frontRow1.team} price={frontRow1.price}/>
            <div style={rightForward}><Player name={frontRow2.name} team={frontRow2.team} price={frontRow2.price}/></div>
            
        </div>
    )
}

const SecondRow = ({secondRow}) => {
    const secondRow1 = secondRow[0]
    const secondRow2 = secondRow[1]
    const secondRow3 = secondRow[2]
    const centreDiv = {margin: 'auto'}
    const rightForward = {display: 'inline-block', float: 'right'}
    const lockDiv = {margin: 'auto', width: '180px'}
    return (
        <div style={centreDiv} className='second-row-width' >
            <Player name={secondRow1.name} team={secondRow1.team} price={secondRow1.price}/>
            <div style={rightForward}><Player name={secondRow2.name} team={secondRow2.team} price={secondRow2.price}/></div>
            <div style={lockDiv}>
                <Player name={secondRow3.name} team={secondRow3.team} price={secondRow3.price}/> 
            </div>
        </div>
    )
}

const Halfback = ({halfback}) => {
    
    const leftDiv = {marginLeft: '10%'}
    return (
        <div className="halfback-left">
            <Player name={halfback.name} team={halfback.team} price={halfback.price}/> 
        </div>
        
    )
}

const FiveEight = ({fiveEight}) => {
    
    const rightDiv = {marginLeft: '60%'}
    return (
        <div className="five-eight-right">
            <Player name={fiveEight.name} team={fiveEight.team} price={fiveEight.price}/> 
        </div>
        
    )
}

const CentreWinger = ({centreWinger}) => {
    const centreWinger1 = centreWinger[0]
    const centreWinger2 = centreWinger[1]
    const centreWinger3 = centreWinger[2]
    const centreWinger4 = centreWinger[3]
    const padding = {padding: '10px', paddingTop: '40px'}
    const flexBox = {display: 'flex', flexFlow: 'row wrap', margin: 'auto'}
    return (
        <div style={flexBox} className="centre-winger-width" >
            <div style={padding}><Player name={centreWinger1.name} team={centreWinger1.team} price={centreWinger1.price}/></div>
            <div style={padding}><Player name={centreWinger2.name} team={centreWinger2.team} price={centreWinger2.price}/></div>
            <div style={padding}><Player name={centreWinger3.name} team={centreWinger3.team} price={centreWinger3.price}/></div>
            <div style={padding}><Player name={centreWinger4.name} team={centreWinger4.team} price={centreWinger4.price}/></div>
        </div>
    )
}

const Fullback = ({fullback}) => {
    const centreDiv = {margin: 'auto', width: '180px'}
    return (
        <div style={centreDiv}>
            <Player name={fullback.name} team={fullback.team} price={fullback.price}/> 
        </div>
        
    )
}

const Reserves = ({reserve}) => {
    const reserve1 = reserve[0]
    const reserve2 = reserve[1]
    const reserve3 = reserve[2]
    const reserve4 = reserve[3]
    const padding = {padding: '10px', paddingTop: '40px'}
    const flexBox = {display: 'flex', flexFlow: 'row wrap', margin: 'auto'}
    return (
        <div style={flexBox} className=" reserves-width" >
            <div style={padding}><Player name={reserve1.name} team={reserve1.team} price={reserve1.price} reserve={true}/></div>
            <div style={padding}><Player name={reserve2.name} team={reserve2.team} price={reserve2.price} reserve={true}/></div>
            <div style={padding}><Player name={reserve3.name} team={reserve3.team} price={reserve3.price} reserve={true}/></div>
            <div style={padding}><Player name={reserve4.name} team={reserve4.team} price={reserve4.price} reserve={true}/></div>
        </div>
    )
}

const CurrentSCTeam = () => {

    const FRF = [{name: 'J. Tapine', team: 'CBR', price: '$ 699, 500'},
                {name: 'T. Faasuamaleaui', team: 'GCT', price: '$ 704, 500'}]
    const HOK = {name: 'H. Grant', team: 'MEL', price: '$816,500'}
    const SRF = [{name: 'I. Papalii', team: 'WST', price: '$ 831, 700'},
                {name: 'K. Koloamatangi', team: 'STH', price: '$ 701, 000'},
                {name: 'B. Cartwright', team: 'PAR', price: '$ 234, 800'}]
    const HFB = {name: 'B. Trindall', team: 'SHA', price: '$ 234, 800'}
    const FE = {name: 'C. Munster', team: 'MEL', price: '$ 848, 300'}
    const CTW = [{name: 'V. Holmes', team: 'NQC', price: '$ 724, 600'},
                {name: 'H. Smith-Shields', team: 'CBR', price: '$ 300, 300'},
                {name: 'H. Hunt', team: 'NEW', price: '$ 234, 800'},
                {name: 'B. Wiliame', team: 'NZW', price: '$ 234, 800'}]
    const FLB = {name: 'C. Gutherson', team: 'PAR', price: '$ 717, 300'}
    const Bench = [{name: 'D. Cook', team: 'STH', price: '$790,700'},
                {name: 'D. Brown', team: 'PAR', price: '$ 781, 300'},
                {name: 'C. Allan', team: 'SYD', price: '$ 258, 100'},
                {name: 'S. Keppie', team: 'MNL', price: '$ 274, 800'}]
    const NS = []
    console.log(HOK)

    const flexBox = {display: 'flex', flexFlow: 'row wrap', margin: 'auto'}
    const inlineBlock = {display: 'inline-block'}
    return (
        <div className="current-sc-team" style={flexBox}>
            <div style={inlineBlock} className="team-width">
                <Hooker hooker={HOK} />
                <FrontRow frontRow={FRF} />
                <SecondRow secondRow={SRF} />
                <Halfback halfback={HFB} />
                <FiveEight fiveEight={FE} />
                <CentreWinger centreWinger={CTW} />
                <Fullback fullback={FLB} />
            </div>
            <div style={inlineBlock} ><Reserves reserve={Bench} /></div>
        </div>
    )
}

export default CurrentSCTeam