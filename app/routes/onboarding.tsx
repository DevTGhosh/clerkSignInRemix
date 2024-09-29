import { UserButton } from '@clerk/remix'

export default function Onboarding() {
  return (
    <div className='flex min-h-[100dvh] items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8'>
      <div className='mx-auto w-full max-w-4xl flex flex-col items-center justify-between gap-8'>
        <div className='text-center'>
          <h1 className='text-3xl font-bold tracking-tight text-foreground sm:text-4xl'>
            Welcome to our platform!
          </h1>
          <UserButton />
          <p className='mt-4 text-muted-foreground'>
            Choose to create a new organization or join an existing one.
          </p>
        </div>
        <div className='grid gap-4'>
          <div className='flex flex-col items-center justify-center p-6'>
            <a href='/createOrg' className={'w-full py-4 bg-purple-300 text-center text-slate-800'}>
              Create Organization
            </a>
          </div>
          <div className='flex flex-col items-center justify-center p-6'>
            <a href='/joinOrg' className={'w-full py-4 bg-purple-700 text-center'}>
              Join Organization
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
