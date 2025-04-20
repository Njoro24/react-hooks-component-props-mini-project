import React from 'react';

function Article({ title, date = "January 1, 1970", preview, minutes }) {
  // Function to generate reading time indicator
  const getReadingTimeIndicator = (minutes) => {
    if (!minutes) return "";
    
    let emoji = "";
    let count = 0;
    
    if (minutes < 30) {
      // For less than 30 minutes: coffee cup for every 5 minutes (rounded up)
      count = Math.ceil(minutes / 5);
      emoji = "☕️".repeat(count);
    } else {
      // For 30+ minutes: bento box for every 10 minutes (rounded up)
      count = Math.ceil(minutes / 10);
      emoji = "🍱".repeat(count);
    }
    
    return `${emoji} ${minutes} min read`;
  };

  return (
    <article>
      <h3>{title}</h3>
      <small>{date} {minutes && <span>{getReadingTimeIndicator(minutes)}</span>}</small>
      <p>{preview}</p>
    </article>
  );
}

export default Article;