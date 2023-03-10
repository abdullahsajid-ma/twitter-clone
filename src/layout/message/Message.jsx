function Message() {
    let profiledata = [
        {
            img: "https://pbs.twimg.com/profile_images/1616058754637627394/D0VYabba_bigger.jpg",
            name: "Eve Arnold",
            tag:"@writes_eve . Jan 20",
            message:"sent a link"
        },
        {
            img: "https://pbs.twimg.com/profile_images/1610728097053282306/S78FchHT_bigger.jpg",
            name: "Eve Arnold",
            tag:"@writes_eve . Jan 20",
            message:"sent a link"
        },
        {
            img: "https://pbs.twimg.com/profile_images/1569598662254141443/i1Oa4ok6_bigger.jpg",
            name: "Eve Arnold",
            tag:"@writes_eve . Jan 20",
            message:"sent a link"
        },
    ]
    return(
        <div className="Mid">
            <div className="explore" style={{height:"100vh"}}>
            <div className="navbar" style={{border:"none"}}>
                <nav className="nav" style={{marginBottom:"1em"}}>
                    <div>
                        <p>Message</p>
                    </div>
                    <div>
                        <svg viewBox="0 0 24 24" aria-hidden="true" class="r-4qtqp9 r-yyyyoo r-z80fyv r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-19wmn03" style={{color: "rgb(239, 243, 244)"}}><g><path d="M10.54 1.75h2.92l1.57 2.36c.11.17.32.25.53.21l2.53-.59 2.17 2.17-.58 2.54c-.05.2.04.41.21.53l2.36 1.57v2.92l-2.36 1.57c-.17.12-.26.33-.21.53l.58 2.54-2.17 2.17-2.53-.59c-.21-.04-.42.04-.53.21l-1.57 2.36h-2.92l-1.58-2.36c-.11-.17-.32-.25-.52-.21l-2.54.59-2.17-2.17.58-2.54c.05-.2-.03-.41-.21-.53l-2.35-1.57v-2.92L4.1 8.97c.18-.12.26-.33.21-.53L3.73 5.9 5.9 3.73l2.54.59c.2.04.41-.04.52-.21l1.58-2.36zm1.07 2l-.98 1.47C10.05 6.08 9 6.5 7.99 6.27l-1.46-.34-.6.6.33 1.46c.24 1.01-.18 2.07-1.05 2.64l-1.46.98v.78l1.46.98c.87.57 1.29 1.63 1.05 2.64l-.33 1.46.6.6 1.46-.34c1.01-.23 2.06.19 2.64 1.05l.98 1.47h.78l.97-1.47c.58-.86 1.63-1.28 2.65-1.05l1.45.34.61-.6-.34-1.46c-.23-1.01.18-2.07 1.05-2.64l1.47-.98v-.78l-1.47-.98c-.87-.57-1.28-1.63-1.05-2.64l.34-1.46-.61-.6-1.45.34c-1.02.23-2.07-.19-2.65-1.05l-.97-1.47h-.78zM12 10.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5c.82 0 1.5-.67 1.5-1.5s-.68-1.5-1.5-1.5zM8.5 12c0-1.93 1.56-3.5 3.5-3.5 1.93 0 3.5 1.57 3.5 3.5s-1.57 3.5-3.5 3.5c-1.94 0-3.5-1.57-3.5-3.5z"></path></g></svg>
                        <svg viewBox="0 0 24 24" aria-hidden="true" class="r-4qtqp9 r-yyyyoo r-z80fyv r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-19wmn03" style={{color: "rgb(239, 243, 244)"}}><g><path d="M1.998 5.5c0-1.381 1.119-2.5 2.5-2.5h15c1.381 0 2.5 1.119 2.5 2.5V12h-2v-1.537l-8 3.635-8-3.635V18.5c0 .276.224.5.5.5H13v2H4.498c-1.381 0-2.5-1.119-2.5-2.5v-13zm2 2.766l8 3.635 8-3.635V5.5c0-.276-.224-.5-.5-.5h-15c-.276 0-.5.224-.5.5v2.766zM19 18v-3h2v3h3v2h-3v3h-2v-3h-3v-2h3z"></path></g></svg>
                    </div>    
                </nav>
            </div>
            <div className="search" style={{border: "1px solid #38444D",borderRadius:"1.2em",margin:"0 1.4em"}}>
                    <div className="search-icon" style={{backgroundColor:"#15202B"}}>
                        <svg viewBox="0 0 24 24" aria-hidden="true" className="r-115tad6 r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-4wgw6l r-f727ji r-bnwqim r-1plcrui r-lrvibr"><g><path d="M10.25 3.75c-3.59 0-6.5 2.91-6.5 6.5s2.91 6.5 6.5 6.5c1.795 0 3.419-.726 4.596-1.904 1.178-1.177 1.904-2.801 1.904-4.596 0-3.59-2.91-6.5-6.5-6.5zm-8.5 6.5c0-4.694 3.806-8.5 8.5-8.5s8.5 3.806 8.5 8.5c0 1.986-.682 3.815-1.824 5.262l4.781 4.781-1.414 1.414-4.781-4.781c-1.447 1.142-3.276 1.824-5.262 1.824-4.694 0-8.5-3.806-8.5-8.5z"></path></g></svg>
                    </div>
                    <input type="text" id="search-twitter" placeholder="Search Twitter" style={{width: "550px",backgroundColor:"#15202B",}}/>
                </div>
            {profiledata.map((data) => {
                return(
                <div className="profiles">
                    <div className="proImg">
                        <img src={data.img} alt="" />
                    </div>
                    <div className="proDetails">
                        <div className="prodata">
                            <p style={{marginRight:".5em",fontSize:"15px",fontWeight:"bold"}}>{data.name}</p>
                            <p style={{fontSize:"15px",color:"#8B98A5"}}>{data.tag}</p>
                        </div>
                        <div className="promess">
                            <p>{data.message}</p>
                        </div>
                    </div>
                </div>
                )
            })}
            </div>
        </div>
    );
}
export default Message;