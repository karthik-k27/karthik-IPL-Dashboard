// Write your code here
import {Component} from 'react'
import {Link} from 'react-router-dom'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
import MatchStats from '../MatchStats'

import './index.css'

class TeamMatches extends Component {
  state = {teamMatch: {}, isLoading: true, backGround: ''}

  componentDidMount() {
    this.getTeamMatches()
  }

  getBackgroundColor = id => {
    let bg
    switch (id) {
      case 'RCB':
        bg = 'red'
        break
      case 'KKR':
        bg = 'violet'
        break
      case 'KXP':
        bg = 'pink'
        break
      case 'CSK':
        bg = 'yellow'
        break
      case 'RR':
        bg = 'blue'
        break
      case 'MI':
        bg = 'sky-blue'
        break
      case 'SH':
        bg = 'orange'
        break
      case 'DC':
        bg = 'light-blue'
        break
      default:
        bg = ''
        break
    }
    return bg
  }

  getTeamMatches = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    const formattedRecentMatches = data.recent_matches.map(each => ({
      umpires: each.umpires,
      result: each.result,
      manOfTheMatch: each.man_of_the_match,
      id: each.id,
      date: each.date,
      venue: each.venue,
      competingTeam: each.competing_team,
      competingTeamLogo: each.competing_team_logo,
      firstInnings: each.first_innings,
      secondInnings: each.second_innings,
      matchStatus: each.match_status,
    }))
    const formattedLatestMatch = {
      umpires: data.latest_match_details.umpires,
      result: data.latest_match_details.result,
      manOfTheMatch: data.latest_match_details.man_of_the_match,
      id: data.latest_match_details.id,
      date: data.latest_match_details.date,
      venue: data.latest_match_details.venue,
      competingTeam: data.latest_match_details.competing_team,
      competingTeamLogo: data.latest_match_details.competing_team_logo,
      firstInnings: data.latest_match_details.first_innings,
      secondInnings: data.latest_match_details.second_innings,
      matchStatus: data.latest_match_details.match_status,
    }
    const updatedData = {
      teamBannerUrl: data.team_banner_url,
      latestMatchDetails: formattedLatestMatch,
      recentMatches: formattedRecentMatches,
    }
    const bgColor = this.getBackgroundColor(id)

    this.setState({
      teamMatch: updatedData,
      isLoading: false,
      backGround: bgColor,
    })
  }

  renderTestMatches = () => {
    const {teamMatch, backGround} = this.state
    const {teamBannerUrl, latestMatchDetails, recentMatches} = teamMatch

    return (
      <div className={`team-matches-container ${backGround}`}>
        <Link to="/" className="nav-link">
          <button className="back-button" type="button">
            Back
          </button>
        </Link>
        <img className="team-image" src={teamBannerUrl} alt="team banner" />
        <p className="latest-match-title">Latest Matches</p>
        <div className="latest-match-container">
          <LatestMatch
            latestMatchDetails={latestMatchDetails}
            key={latestMatchDetails.id}
          />
        </div>
        <MatchStats recentMatches={recentMatches} />
        <ul className="recent-matches-container">
          {recentMatches.map(eachMatch => (
            <MatchCard matchCardDetails={eachMatch} key={eachMatch.id} />
          ))}
        </ul>
      </div>
    )
  }

  render() {
    const {isLoading} = this.state

    return isLoading ? (
      <div testid="loader">
        <Loader type="Oval" color="#ffffff" height={50} width={50} />
      </div>
    ) : (
      this.renderTestMatches()
    )
  }
}

export default TeamMatches
