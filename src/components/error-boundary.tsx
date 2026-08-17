import { Component, type ErrorInfo, type ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { TriangleAlert } from 'lucide-react';
import { buttonVariants } from '@/design-system/ui/button';

export interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  error: Error | null;
}

/**
 * Catches render-time errors in the current route (a malformed data object,
 * a missing property, etc.) so one broken page shows a recoverable message
 * instead of crashing the entire app to a blank screen — the nav in Layout
 * sits outside this boundary, so users can still get somewhere else.
 * Resets automatically when the route changes (see `key` on the wrapping
 * usage in Layout), since the error belongs to whatever page threw it.
 */
class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state: ErrorBoundaryState = { error: null };

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { error };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error('Route render error:', error, info.componentStack);
  }

  render() {
    if (this.state.error) {
      return (
        <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
          <TriangleAlert className="w-10 h-10 text-destructive mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-foreground">Something went wrong</h1>
          <p className="text-muted-foreground mt-2">
            This page hit an unexpected error. You can try going back to the homepage.
          </p>
          <Link to="/" className={buttonVariants({ className: 'mt-6' })}>
            Back to Home
          </Link>
        </div>
      );
    }

    return this.props.children;
  }
}

export { ErrorBoundary };
