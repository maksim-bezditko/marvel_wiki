import { Component } from "react";

export default class ErrorBoundary extends Component {
	state = {
		error: false
	}

	static getDerivedStateFromError(error) {
		this.setState({
			error: true
		})
	}

	render() {
		if (this.state.error) {
			return <h2>Something went wrong. Please, refresh th page</h2>
		}
		return this.props.children;
	}
}
