function Option({ children, color, onClick = () => {}, black = false }) {
  return <button style={{ backgroundColor: color, color: black ? 'black' : 'white' }} onClick={onClick}>{children}</button>
}