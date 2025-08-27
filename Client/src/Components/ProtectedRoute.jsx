import { useAuth, RedirectToSignIn } from "@clerk/clerk-react";

export const ProtectedRoute = ({ children }) => {
  const { isLoaded, isSignedIn } = useAuth();

  if (!isLoaded) return null;

  if (!isSignedIn) {
    return {
  path: '/home',
  Component: () => (
    <ProtectedRoute>
      <Layout>
        <Home />
      </Layout>
    </ProtectedRoute>
  )
}
  }

  return children;
};
