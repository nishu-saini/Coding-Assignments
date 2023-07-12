function fetchBlogs() {
  const url = "https://jsonplaceholder.typicode.com/posts";

  // fetch data from url..
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      // select blog div
      const blogs = document.querySelector("#blogs");

      data.forEach((blog) => {
        // create div for every post..
        const blogItem = document.createElement("div");
        blogItem.className = "blogItem";

        blogItem.innerHTML = `
                    <h2>${blog.title}</h2>
                    <p>${blog.body}</p>
                `;

        // add this to parent blog div..
        blogs.appendChild(blogItem);
      });
    })
    .catch((err) => {
      console.log("Something Went Wrong: ", err);
    });
}

fetchBlogs();
