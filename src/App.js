import "./App.css";
// import { BiAdjust } from "react-icons/bi";
import { AiFillGoogleCircle } from "react-icons/ai";
import { useEffect, useState } from "react";
import GoogleLogin from "react-google-login";
import { gapi } from "gapi-script";

function App() {
  const clientID =
    "1088649719161-st10u6c0upj4oqak38f9do4a6b9vmavh.apps.googleusercontent.com";

  const [user, setUser] = useState({});

  useEffect(() => {
    const start = () => {
      gapi.auth2.init({
        clientId: clientID,
      });
    };
    gapi.load("client:auth2", start);
  }, []);

  const onSuccess = (response) => {
    setUser(response.profileObj);
  };

  const onFailure = () => {
    console.log("F Something went wrong");
  };

  return (
    <div className="App">
      <GoogleLogin
        clientId={clientID}
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={"single_host_policy"}
        render={(renderProps) => (
          <div className="button-container">
            <button
              onClick={renderProps.onClick}
              disabled={renderProps.disabled}
            >
              <AiFillGoogleCircle />
            </button>
          </div>
        )}
      />
      <br/><br/><br/><br/><br/>
      <div className={user ? "profile" : "hidden"}>
        <img src={user.imageUrl} alt="" />
        <h4>{user.name}</h4>
      </div>
    </div>
  );
}

export default App;
