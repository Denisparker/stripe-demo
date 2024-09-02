export default function Success({className}: {className?: string}) {
  return (
    <svg width="100%" height="100%" viewBox="-30 -30 150 150"
      xmlns="http://www.w3.org/2000/svg">
      <path fill="white" className={className}
        d="M 29.452 78.819 L 1.601 50.968 c -2.134 -2.134 -2.134 -5.595 0 -7.729 l 8.691 -8.691 c 2.134 -2.134 5.595 -2.134 7.729 0 l 13.058 13.058 c 1.236 1.236 3.239 1.236 4.475 0 l 36.425 -36.425 c 2.134 -2.134 5.595 -2.134 7.729 0 l 8.691 8.691 c 2.134 2.134 2.134 5.595 0 7.729 L 37.181 78.819 C 35.046 80.953 31.586 80.953 29.452 78.819 z"
      />
    </svg>
  )
}
