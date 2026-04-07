import { useState, useEffect } from "react";
import { Link } from "react-router";
import { blogPosts, categories } from "./blogData";
import usePageMeta from "../../hooks/usePageMeta";

const Blog = () => {
  usePageMeta(
    "Renovation Blog Melbourne | Tips, Costs & Ideas",
    "Renovation blog Melbourne covering kitchen, bathroom, home renovation costs, design ideas, timelines and expert advice."
  );
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 9;

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory =
      selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch = post.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Reset to page 1 when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory, searchQuery]);

  // Calculate pagination
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#2D6B7A] to-[#1e5562] h-[50vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Renovation & Building Insights
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Expert guidance from Melbourne's trusted builders. Discover
              everything you need to know about renovations, design trends, and
              creating your dream space.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div>
            {/* Search Bar */}
            <div className="mb-8">
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full max-w-7xl mx-auto block px-6 py-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#2D6B7A] focus:border-transparent text-lg"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-full font-semibold transition-colors duration-200 cursor-pointer ${
                    selectedCategory === category
                      ? "bg-[#2D6B7A] text-white shadow-lg"
                      : "bg-white text-gray-700 border border-gray-300"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-gray-600 text-xl">
                No articles found. Try adjusting your search or filters.
              </p>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {currentPosts.map((post) => (
                  <div key={post.id}>
                    <Link
                      to={`/blog/${post.slug}`}
                      className="block bg-white rounded-xl overflow-hidden shadow-md h-full cursor-pointer"
                    >
                      {/* Image */}
                      <div className="relative h-56 bg-gray-200 overflow-hidden">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute top-4 right-4 bg-[#2D6B7A] text-white px-3 py-1 rounded-full text-sm font-semibold z-20">
                          {post.category}
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6">
                        <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                          <span className="flex items-center gap-1">
                            <svg
                              className="w-4 h-4"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                                clipRule="evenodd"
                              />
                            </svg>
                            {post.readTime}
                          </span>
                          <span>•</span>
                          <span>
                            {new Date(post.date).toLocaleDateString("en-AU", {
                              year: "numeric",
                              month: "short",
                              day: "numeric",
                            })}
                          </span>
                        </div>

                        <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                          {post.title}
                        </h3>

                        <p className="text-gray-600 line-clamp-3 mb-4">
                          {post.excerpt}
                        </p>

                        <div className="flex items-center text-[#2D6B7A] font-semibold">
                          Read More
                          <svg
                            className="w-5 h-5 ml-1"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M17 8l4 4m0 0l-4 4m4-4H3"
                            />
                          </svg>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex justify-center items-center gap-2 mt-12">
                  {/* Previous Button */}
                  <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className={`px-4 py-2 rounded-lg font-semibold ${
                      currentPage === 1
                        ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                        : "bg-white text-gray-700 border border-gray-300 cursor-pointer"
                    }`}
                  >
                    Previous
                  </button>

                  {/* Page Numbers */}
                  <div className="flex gap-2">
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                      (page) => (
                        <button
                          key={page}
                          onClick={() => handlePageChange(page)}
                          className={`w-10 h-10 rounded-lg font-semibold cursor-pointer ${
                            currentPage === page
                              ? "bg-[#2D6B7A] text-white"
                              : "bg-white text-gray-700 border border-gray-300"
                          }`}
                        >
                          {page}
                        </button>
                      ),
                    )}
                  </div>

                  {/* Next Button */}
                  <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className={`px-4 py-2 rounded-lg font-semibold ${
                      currentPage === totalPages
                        ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                        : "bg-white text-gray-700 border border-gray-300 cursor-pointer"
                    }`}
                  >
                    Next
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Ready to Start Your Renovation?
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              Get expert guidance and a detailed consultation for your project.
            </p>
            <Link to="/contact">
              <button className="bg-[#2D6B7A] text-white px-10 py-4 rounded-lg font-semibold text-lg shadow-lg cursor-pointer">
                Book A Consultation
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
