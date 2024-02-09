import BlogCard from '../components/Blog'
import Header from '../components/Header'

export const Blog = () => {
    return (
        <main className="bg-black max-h-content">
            <Header />
            <BlogCard />
        </main>
    )
}