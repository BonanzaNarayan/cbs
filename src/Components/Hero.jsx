import './Hero.css'

function Hero() {
  return (

    <section
    className=" hero bg-cover bg-center bg-no-repeat"
    >
        <div
            className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
        >
            <div className="">
                <h1 className="text-3xl font-extrabold text-white sm:text-5xl">
                You're Welcome To

                <strong className="block font-extrabold text-blue-600"> CORPORATE BOSS SOLUTIONS </strong>
                </h1>

                <p className="mt-4 max-w-lg text-white sm:text-xl/relaxed">
                Corporate Boss Solutions is a multifaceted organization dedicated to providing high-quality services across 
                four distinct sectors, each tailored to meet the diverse needs of our valued clients. 
                </p>

                <div className="mt-8 flex flex-wrap gap-4 text-center">
                    <a
                    href="/services"
                    className="block w-full rounded bg-blue-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-blue-500 focus:outline-none focus:ring active:bg-blue-700 sm:w-auto"
                    >
                    Get Started
                    </a>

                    <a
                    href="/about"
                    className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-blue-600 shadow hover:text-blue-700 focus:outline-none focus:ring active:text-blue-500 sm:w-auto"
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