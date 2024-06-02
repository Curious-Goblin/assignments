import { RecoilRoot } from "recoil"
import "./App.css"
function App() {

  return (
    <RecoilRoot>
      <ProfileComponent />
    </RecoilRoot>
  )
}

function ProfileComponent() {
  return <div id="parentdiv">
    <div id="mainDiv">
      <img id="coverImage" src="https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGNvdmVyJTIwcGhvdG98ZW58MHx8MHx8fDA%3D" alt="CoverPhoto"></img>
      <img id="profileImage" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHByb2ZpbGUlMjBwaG90b3xlbnwwfHwwfHx8MA%3D%3D" alt="profilePhoto"></img>
      <div id="name">
        <h1 id="username">Suzain</h1>
      </div>
      <div id="line"></div>
      <div id="userStats">
        <div id="followers">
          <h1 className="numbers">200M</h1>
          <h2 className="property">Followers</h2>
        </div>
        <div id="likes">
          <h1 className="numbers">400M</h1>
          <h2 className="property">Likes</h2>
        </div>
        <div id="photos">
          <h1 className="numbers">200M</h1>
          <h2 className="property">Photos</h2>
        </div>
      </div>
    </div>
  </div>
}

export default App
