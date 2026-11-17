import { createFileRoute, Navigate } from '@tanstack/react-router'
export const Route = createFileRoute('/products/$productId')({ component: LegacyProductRedirect })
function LegacyProductRedirect() {
  return <Navigate to="/courses" replace />
}
