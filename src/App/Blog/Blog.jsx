import './styles.css';
export const Blog = () => {
  return (
    <div>
      <strong> BLOG</strong>
      <span className="akapit">
        <span>
          <p className="date"> 31-11-2022</p>
          <h1>
            <strong>Why are we so nostalgic for the 1990s?</strong>
          </h1>
        </span>
        <span>
          <p className="text">
            Pop culture used to define a generation, but it seems the cultural,
            music and fashion trends of the 1990s have been recycled, and what
            Generation X considered its rite of passage into adulthood, is being
            discovered and claimed by fledgling grown-ups as their own.
          </p>

          <p className="text">
            {' '}
            There's been the resurgence of vinyl as the trend-setters' choice of
            music consumption rather than the ease of a digital download, and
            now the hipsters have discovered the nostalgic sound of a whirring
            cassette from which to enjoy the dulcet tones of everyone from
            Salt-N-Pepa to Rick Astley.
          </p>
        </span>
        <span>
          <p className="author">
            <strong>Radosław Majdan</strong>
          </p>
          <p className="position">Senior Marketing Specjalist</p>
        </span>
      </span>

      <span className="akapit">
        <span>
          <p className="date"> 31-11-2022</p>
          <h1>
            <strong>I make mistakes!</strong>
          </h1>

          <p className="text">
            “I’m selfish, impatient and a little insecure. I make mistakes, I am
            out of control and at times hard to handle. But if you can’t handle
            me at my worst, then you sure as hell don’t deserve me at my best.”
          </p>

          <p className="author">
            <strong>Radosław Majdan</strong>
          </p>
          <p className="position">Senior Marketing Specjalist</p>
        </span>
      </span>
    </div>
  );
};
