import { stats } from '../../data/siteData'
import useScrollReveal from '../../hooks/useScrollReveal'

export default function StatsCounter() {
  const ref = useScrollReveal()

  return (
    <div className="stats-counter-bar" ref={ref}>
      {stats.map((stat, idx) => (
        <div className="stat-card" key={idx}>
          <i className={stat.icon}></i>
          <div className="stat-number">{stat.number}</div>
          <div className="stat-title">{stat.title}</div>
        </div>
      ))}
    </div>
  )
}
