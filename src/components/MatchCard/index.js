// Write your code here
import './index.css'

const MatchCard = props => {
  const {matchCardDetails} = props
  const {
    result,
    competingTeam,
    competingTeamLogo,
    matchStatus,
  } = matchCardDetails

  let textColor
  if (matchStatus === 'Won') {
    textColor = 'green-color'
  } else {
    textColor = 'red-color'
  }

  return (
    <li className="match-card-container">
      <img
        className="recent-competing-team-logo"
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
      />
      <p className="competing-team">{competingTeam}</p>
      <p className="match-result">{result}</p>
      <p className={`status ${textColor}`}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
