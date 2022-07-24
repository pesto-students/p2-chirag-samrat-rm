import React from "react";
import copy from "copy-to-clipboard";

export default function Main() {
  const [link, setLink] = React.useState("");
  const [shortLink, setShortLink] = React.useState("");

  function handleChange(event) {
    let { value } = event.target;
    setLink(value);
  }

  function handleClick() {
    if (link.length === 0) {
      alert("enter link first");
    } else {
      fetch("https://api.shrtco.de/v2/shorten?url=%27" + link)
        .then((response) => response.json())
        .then((response) => {
          console.log(response);
          setShortLink(response.result.short_link);
        });
    }
  }

  function copyTextToKeyborad() {
    copy(shortLink);
  }
  return (
    <>
      <main className="main">
        <div>
          <div className="main--title">
            <h1>More than just shorten Links</h1>
            <h6>
              Build your brand's recognition and get detailed insights on how
              your links are performing
            </h6>
          </div>
          <img src="https://i.pinimg.com/736x/1f/f4/25/1ff425902b6796187e45c57a71e72b11.jpg " />
        </div>
      </main>
      <section className="link--container">
        <div className="shortner">
          <input
            value={link}
            onChange={handleChange}
            placeholder="shorten a link here..."
          ></input>
          <button onClick={handleClick}>Shorten it</button>
        </div>

        <div className="links-container">
          <h5 className="long-link">
            {shortLink ? link : "Old link will display here "}
          </h5>
          <h5 className="short-link">
            {shortLink ? <p>{shortLink}</p> : "New Link will display here"}
          </h5>
          <button onClick={copyTextToKeyborad}> Copy</button>
        </div>
      </section>
    </>
  );
}
