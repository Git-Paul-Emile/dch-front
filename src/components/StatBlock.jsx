import CountUp from './CountUp.jsx'

export default function StatBlock({ end, prefix = '', suffix = '', label }) {
  return (
    <div className="text-center">
      <p className="text-3xl sm:text-4xl font-heading font-extrabold text-accent">
        <CountUp end={end} prefix={prefix} suffix={suffix} />
      </p>
      <p className="text-sm text-primary-100 mt-1">{label}</p>
    </div>
  )
}
