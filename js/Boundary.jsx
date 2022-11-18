// This is a simple element to handle errors in components.
class Boundary extends React.Component {
  state = { error: null }
  
  render() {
    if (this.state.error) {
      return <React.Fragment>
        <h1>{this.state.error.name}</h1>
        <pre>{this.state.error.stack}</pre>
        <hr />
        <button onClick={() => this.setState({ error: null })}>Clear error state</button>
      </React.Fragment>
    } else {
      return this.props.children
    }
  }
  componentDidCatch(error) {
    this.setState({ error })
  }
}