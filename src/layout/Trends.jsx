function Trends({mainTrend,twt}) {
    return(
                <div className="trend-item">
                    <div>
                        <p className="trend-p">Trending</p>
                        <p className="main-trend">{mainTrend}</p>
                        <p className="tweet-count">{twt}</p>
                    </div>
                    <div className="right-dot">
                        <svg
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                        className="r-vlxjld r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-1plcrui r-lrvibr"
                      >
                        <g>
                          <path
                            d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"
                          ></path>
                        </g>
                      </svg>
                    </div>
                </div>
    );
}
export default Trends;