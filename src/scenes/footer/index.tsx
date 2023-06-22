import Logo from "@/assets/Logo.png"

const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="md:flex mx-auto w-5/6 gap-16">
        {/* LOGO */}
        <div className="mt-16 md:mt-0 basis-1/2">
          <img alt="Logo" src={Logo}/>
          <p className="my-5">
            Looking for a gym that's all about fun and fitness? Look no further than Ecogym! Our gym is the perfect place to get fit and have a blast doing it.
          </p>
          <p>© Evogym All Rights Reserved.</p>
        </div>
        {/* LINKS */}
        <div className="flex flex-col mt-16 md:mt-0 basis-1/4">
          <h4 className="font-bold">Links</h4>
          <a className="mt-5" href="https://twitter.com">Visit Our Twitter</a>
          <a className="mt-5" href="https://www.instagram.com">Visit Our Instagram</a>
          <a className="mt-5" href="https://discord.com">Visit Our Discord</a>
        </div>
        {/* CONTACT */}
        <div className="mt-16 md:mt-0 basis-1/4">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">(333)7777-9999</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer