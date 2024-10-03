import type { MetaFunction, LoaderFunction } from '@remix-run/node'
import {
	Links,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
} from '@remix-run/react'
import { ClerkApp } from '@clerk/remix'

// Import rootAuthLoader
import { rootAuthLoader } from '@clerk/remix/ssr.server'

export const meta: MetaFunction = () => [
	{
		charset: 'utf-8',
		title: 'New Remix App',
		viewport: 'width=device-width,initial-scale=1',
	},
]

// Export as the root route loader
export const loader: LoaderFunction = (args) => {
	return rootAuthLoader(args, ({ request }) => {
		const { sessionId, userId, getToken } = request.auth
		// Add logic to fetch data
		return { yourData: 'here' }
	})
}

export function Layout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<head>
				<Meta />
				<Links />
			</head>
			<body>
				{children}
				<ScrollRestoration />
				<Scripts />
			</body>
		</html>
	)
}

function App() {
	return <Outlet />
}

export default ClerkApp(App)
