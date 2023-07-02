import Feed from "@components/Feed";
function Home() {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Discover & Share 
        <br className="max-md:hidden" />
        <span className="orange_gradient text-center"> 
          &nbsp;AI Powered Prompts
        </span>
      </h1>
      <p className="desc text-center">
        Promptify is an open-source AI prompting tool for modern world AI users to discover,
        create, and share creative AI prompts.
      </p>
      <Feed />
    </section>
  )
}

export default Home