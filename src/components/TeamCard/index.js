// FIX 8: To use Link component, it should be imported
import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {teamDetails} = props
  const {name, id, teamImageURL} = teamDetails

  return (
    // FIX 9: When clicked on TeamCard, page should be navigated to the URL '/team-matches/${id}'
    // FIX 10: "exact" and "path" props are used in Route component to match routes
    // FIX 11: "to" is the prop used to give the URL for navigation to Link component
    <li className="team-item">
      <Link to={`/team-matches/${id}`} className="link-item">
        <img src={teamImageURL} alt={name} className="team-logo" />
        <p className="team-name">{name}</p>
      </Link>
    </li>
  )
}

export default TeamCard
