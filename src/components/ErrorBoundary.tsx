import { Component, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(_error: Error, _errorInfo: React.ErrorInfo) {
    // Log error to error reporting service in production
    if (import.meta.env.PROD) {
      // In production, you would send this to an error tracking service
      // Example: Sentry, LogRocket, etc.
      // console.error('Error caught by boundary:', _error, _errorInfo);
    }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-black text-white p-4">
          <div className="text-center max-w-md">
            <h1 className="text-4xl font-bold mb-4 text-red-400">
              Something went wrong
            </h1>
            <p className="text-gray-300 mb-6">
              We're sorry, but something unexpected happened. Please try refreshing
              the page.
            </p>
            <button
              onClick={() => {
                window.location.href = '/';
              }}
              className="px-6 py-3 bg-accent-600 text-white rounded-lg hover:bg-accent-500 transition-colors font-semibold">
              Return to Home
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

