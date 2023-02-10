import Tweets from '../Tweets';
import tweetsDetails from '../Tweetsdetail';
function Profile() {
    return (
        <div className="Mid">
            <div className="explore" style={{ height: "100%", borderBottom: "1px solid #15202B" }}>
                <div className="navbar">
                    <nav className="nav" style={{ justifyContent: "flex-start" }}>
                        <div>
                            <svg viewBox="0 0 24 24" aria-hidden="true" class="r-4qtqp9 r-yyyyoo r-z80fyv r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-19wmn03" style={{ color: "rgb(239, 243, 244)" }}>
                                <g><path d="M7.414 13l5.043 5.04-1.414 1.42L3.586 12l7.457-7.46 1.414 1.42L7.414 11H21v2H7.414z"></path></g></svg>
                        </div>
                        <div style={{ margin: "0", padding: "0", marginLeft: "20px" }}>
                            <p style={{ margin: "0", padding: "0", fontSize: "17px" }}>Abdullah</p>
                            <p style={{ margin: "0", padding: "0", fontSize: "12px", color: "#8B98A5" }}>45 Tweets</p>
                        </div>
                    </nav>
                </div>
                <div>
                    <div>
                        <img src="https://pbs.twimg.com/profile_banners/1392494348877672454/1623825033/1080x360" style={{ height: "199px", width: "548px" }} />
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <div style={{ position: "relative" }}>
                            <img src="https://pbs.twimg.com/profile_images/1480188931329204229/8MjGNyZM_400x400.jpg" className="profileimg" />
                        </div>
                        <div style={{ border: "1px solid #8B89A5", marginTop: ".5em", borderRadius: "1em", padding: ".3em 1em", marginRight: ".5em" }}>
                            <a href="" style={{ textDecoration: "none" }}>Edit profile</a>
                        </div>
                    </div>
                    <div style={{ marginTop: "3em", marginLeft: "1.5em", display: "flex", flexDirection: "column" }}>
                        <span style={{ fontSize: "20px", fontWeight: "700" }}>Abdullah</span>
                        <span style={{ fontSize: "15px", color: "#8B98A5", marginTop: "-5px" }}>@aabdullahsajid</span>
                    </div>
                    <div style={{ marginLeft: "1.5em", marginTop: ".7em" }}>
                        <span style={{ fontWeight: "400" }}>Frontend | Reactjs | javascript | C++</span>
                    </div>
                    <div style={{ marginTop: ".5em", marginLeft: "1.5em" }}>
                        <p style={{ color: "#8B98A5" }}>Joined May 2021</p>
                    </div>
                    <div style={{ display: "flex", marginTop: ".5em", marginLeft: "1.5em" }}>
                        <div style={{ marginRight: "1.5em" }}>
                            <span style={{ marginRight: ".3em", fontSize: "14px", fontWeight: "700" }}>160</span>
                            <span style={{ color: "#8B98A5", fontSize: "15px" }}>Following</span>
                        </div>
                        <div>
                            <span style={{ marginRight: ".3em", fontSize: "14px", fontWeight: "700" }}>19</span>
                            <span style={{ color: "#8B98A5", fontSize: "15px" }}>Followers</span>
                        </div>
                    </div>
                    <div style={{ marginTop: "2em", borderBottom: "1px solid #38444D" }}>
                        <div style={{ display: "flex", justifyContent: "space-around", marginBottom: "1.5em" }}>
                            <p style={{ fontSize: "14px", fontWeight: "700" }}>Tweets</p>
                            <p style={{ fontSize: "14px" }}>Tweets & replies</p>
                            <p style={{ fontSize: "14px" }}>Media</p>
                            <p style={{ fontSize: "14px" }}>Likes</p>
                        </div>
                    </div>
                </div>
                {tweetsDetails.map((data) => {
                    return <Tweets img={data.img} name={data.name} mention={data.mention} blog={data.blog} />
                })}
            </div>
        </div>
    );
}
export default Profile;