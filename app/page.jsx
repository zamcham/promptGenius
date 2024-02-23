import Feed from '@components/Feed';

const Home = () => {
  return (
    <section className="w-full flex-center-flex-col">
        <h1 className="head_text text_centerx">
            Discover & Share
            <br className="max-md:hidden" />
            <span className="orange_gradient text-center">
                AI-powered writing prompts
            </span>
        </h1>
        <p>
            PromptGenius" is a dynamic app designed for users to collaboratively share and explore creative prompts for AI-generated content. With an intuitive interface, users can submit, discover, and exchange prompts tailored to various AI platforms, fostering a vibrant community of writers, artists, and innovators.
        </p>
        <Feed />
    </section>
  )
}

export default Home