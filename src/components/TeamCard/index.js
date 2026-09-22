// Write your code here
import {Link} from 'react-router-dom'

import './index.css'

const TeamCard = props => {
  const {teamDetails} = props
  const {id, name, teamImageUrl} = teamDetails

  return (
    <li className="ipl-team">
      <Link to={`/team-matches/${id}`} className="ipl-team-link">
        <div className="ipl-team-container">
          <img className="team-logo" src={teamImageUrl} alt={`${name}`} />
          <p className="team-name">{name}</p>
        </div>
      </Link>
    </li>
  )
}

export default TeamCard
