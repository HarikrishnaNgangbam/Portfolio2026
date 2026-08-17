import { Link } from 'react-router-dom';
import { buttonVariants } from '@/design-system/ui/button';
import { Seo } from '@/components/seo';

function NotFoundPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
      <Seo title="Page Not Found" description="This page doesn't exist or has moved." noindex />
      <p className="text-primary font-semibold">404</p>
      <h1 className="text-4xl font-bold text-foreground mt-2">Page not found</h1>
      <p className="text-muted-foreground mt-4">
        The page you're looking for doesn't exist or has moved.
      </p>
      <Link to="/" className={buttonVariants({ className: 'mt-8' })}>
        Back to Home
      </Link>
    </div>
  );
}

export { NotFoundPage };
