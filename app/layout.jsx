import '@styles/globals.css'

export const metadata = {
    title: "PromptGenius",
    description: "PromptGenius is a tool for writers to generate writing prompts."
}

export const RootLayout = ({children}) => {
  return (
    <html lang="en">
        <body>
            <div className='main'>
                <div className='gradient' />
            </div>
            <main className='app'>
                {children}
            </main>
        </body>
    </html>
  )
}

export default RootLayout;
