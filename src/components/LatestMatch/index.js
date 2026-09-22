// Write your code here
import './index.css'

const LatestMatch = props => {
  const {latestMatchDetails} = props
  const {
    umpires,
    result,
    manOfTheMatch,
    date,
    venue,
    competingTeam,
    competingTeamLogo,
    firstInnings,
    secondInnings,
  } = latestMatchDetails

  return (
    <div className="latest-match-container">
      <div className="team-details-logo">
        <div className="team-details">
          <p className="team-name">{competingTeam}</p>
          <p className="date">{date}</p>
          <p className="venue">{venue}</p>
          <p className="result">{result}</p>
        </div>
        <img
          className="competing-team-logo"
          src={competingTeamLogo}
          alt={`latest match ${competingTeam}`}
        />
      </div>
      <hr className="seperator" />
      <div className="match-details">
        <p className="match-title">First Innings</p>
        <p className="match-description">{firstInnings}</p>
        <p className="match-title">Second Innings</p>
        <p className="match-description">{secondInnings}</p>
        <p className="match-title">Man Of The Match</p>
        <p className="match-description">{manOfTheMatch}</p>
        <p className="match-title">Umpires</p>
        <p className="match-description">{umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
