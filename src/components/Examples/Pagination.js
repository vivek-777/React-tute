import React, { useState, useEffect } from "react";
import axios from "axios";

const Pagination = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const postsPerPage = 5;

  // Fetch posts from the dummy API
  const fetchPosts = async (page) => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${postsPerPage}`
      );
      setPosts(response.data);

      // Dummy total count (for pagination), since jsonplaceholder doesn't provide total pages
      const totalPosts = 25; // jsonplaceholder has 100 posts
      setTotalPages(Math.ceil(totalPosts / postsPerPage));
    } catch (error) {
      console.error("Error fetching posts:", error);
    } finally {
      setLoading(false);
    }
  };

  // Change page handler
  const handlePageChange = (page) => {
    setCurrentPage(page);
    fetchPosts(page);
  };

  // Load posts on mount and when the page changes
  useEffect(() => {
    fetchPosts(currentPage);
  }, [currentPage]);

  // Generate an array of page numbers for pagination
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <h1>Paginated Posts</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <h3>{post.title}</h3>
              {/* <p>{post.body}</p> */}
            </li>
          ))}
        </ul>
      )}

      {/* Pagination Controls */}
      <div style={{ marginTop: "20px" }}>
        {pageNumbers.map((page) => (
          <button
            key={page}
            onClick={() => handlePageChange(page)}
            style={{
              margin: "0 5px",
              padding: "5px 10px",
              backgroundColor: currentPage === page ? "#007BFF" : "#f1f1f1",
              border: "1px solid #ccc",
              cursor: "pointer",
              borderRadius: "4px",
            }}
          >
            {page}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Pagination;
