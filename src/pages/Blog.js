import React, { useState } from "react";
import "../styles/styles.css"; // Ensure correct path

import blog1 from "../assets/images/wedding_blog.jpg";
import blog2 from "../assets/images/baby_blog.jpg";
import blog3 from "../assets/images/prewedding_blog.jpg";
import blog4 from "../assets/images/event_blog.jpg";

const blogPosts = [
  {
    id: 1,
    title: "Capturing Timeless Wedding Moments",
    content:
      "Wedding photography is more than just capturing moments; it’s about preserving emotions that last a lifetime...",
    fullContent: `Wedding photography requires a mix of skill, patience, and creativity. 
    Understanding lighting, angles, and the couple's emotions is key. 
    Always focus on candid shots to capture real emotions. 
    \n\nHere are some tips:
    - Plan ahead with the couple to understand their preferences.
    - Use natural light for soft and beautiful tones.
    - Capture spontaneous moments instead of forced poses.
    - Invest in a good camera and prime lenses for better quality.
    \n\nBy following these, you can ensure that every wedding shoot tells a beautiful story!`,
    image: blog1,
  },
  {
    id: 2,
    title: "The Magic of Baby Photography",
    content:
      "Discover how to create adorable and heartwarming baby portraits with soft lighting and natural expressions...",
    fullContent: `Baby photography is all about capturing innocence. 
    Using natural light and soft tones makes the pictures more magical. 
    \n\nSome key tips:
    - Be patient and let the baby be comfortable.
    - Use props like blankets and soft toys.
    - Capture genuine expressions rather than forced smiles.
    - Adjust lighting to avoid harsh shadows.
    \n\nFollowing these simple steps can result in breathtaking baby portraits!`,
    image: blog2,
  },
  {
    id: 3,
    title: "Pre-Wedding Photoshoots: A Growing Trend",
    content:
      "Pre-wedding photoshoots allow couples to celebrate their love before the big day. Explore the best locations and themes...",
    fullContent: `Pre-wedding shoots have become a must-have for couples. 
    Choosing the right location, coordinating outfits, and using natural lighting all play a role in capturing stunning pre-wedding shots. 
    \n\nSome tips:
    - Pick a scenic location that complements the couple’s story.
    - Choose outfits that contrast well with the background.
    - Use wide-angle shots for dreamy landscapes.
    - Encourage natural interactions instead of stiff poses.
    \n\nThese will create a perfect pre-wedding album that reflects love and chemistry!`,
    image: blog3,
  },
  {
    id: 4,
    title: "Event Photography Tips & Tricks",
    content:
      "From birthdays to corporate events, capturing the right moments is crucial. Learn how to get the best shots at events...",
    fullContent: `Event photography requires quick reflexes and a keen eye. 
    Always stay prepared for action shots, capture guest interactions, and use proper lighting to make every picture shine. 
    \n\nHere are some key tricks:
    - Use a fast shutter speed to capture moving subjects.
    - Focus on natural moments rather than staged ones.
    - Get wide shots to show the event atmosphere.
    - Keep an eye out for small details that make the event special.
    \n\nMastering these techniques will help you take dynamic event photos!`,
    image: blog4,
  },
];

const Blog = () => {
  const [selectedPost, setSelectedPost] = useState(null);

  const handleReadMore = (post) => {
    setSelectedPost(post);
  };

  const handleBack = () => {
    setSelectedPost(null);
  };

  return (
    <div className="blog-page">
      {selectedPost ? (
        /* Full Page Blog View */
        <div className="full-blog">
          <img src={selectedPost.image} alt={selectedPost.title} className="full-blog-image" />
          <h1>{selectedPost.title}</h1>
          <p>{selectedPost.fullContent}</p>
          <button onClick={handleBack}>Back to Blogs</button>
        </div>
      ) : (
        /* Blog Card List */
        <div className="blog-list">
          {blogPosts.map((post) => (
            <div key={post.id} className="blog-card">
              <img src={post.image} alt={post.title} className="blog-image" />
              <h2>{post.title}</h2>
              <p>{post.content}</p>
              <button onClick={() => handleReadMore(post)}>Read More</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Blog;
