import BlogCard from './BlogCard'
import Hero from './Hero'

function Blogs() {
  return (
    <div>
        <Hero />
        <div className="flex flex-wrap m-10  justify-evenly">
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        </div>
    </div>
  )
}

export default Blogs