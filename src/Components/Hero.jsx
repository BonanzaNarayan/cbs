import './Hero.css'

function Hero() {
  return (

    <section className=" hero bg-gray-50">
        <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
            <div className="mx-auto max-w-xl text-center">
            <h1 className="text-3xl font-extrabold sm:text-5xl text-white">
                You're Welcome To
                <strong className="font-extrabold text-blue-700 sm:block"> Corporate Boss Solutions</strong>
            </h1>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
                <a
                className="block w-full rounded bg-blue-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-blue-700 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
                href="/services"
                >
                Get Started
                </a>

                <a
                className="block w-full rounded px-12 bg-white py-3 text-sm font-medium text-blue-600 shadow hover:blue-red-700 focus:outline-none focus:ring active:text-gray-200 sm:w-auto"
                href="/about"
                >
                Learn More
                </a>
            </div>
            </div>
        </div>
        </section>
  )
}

export default Hero