import React, {useState} from 'react';
import './App.css';

function App() {
  const [userName, setUsername] = useState('');
  const [resData, setResData] = useState('');

  const handleUsernameInput = (event) => {
    setUsername(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(userName);
    
    // Methods of fetching the data
    // - XMLHttpRequest
    // - fetch
    // - axios
    // - async await
    fetch('https://api.github.com/users/' + userName)
    .then(response => response.json())
    .then(data => {
      console.table(data);
      setResData(data);
    });

    setUsername('');

    // fetch('https://wizard-world-api.herokuapp.com/Spells')
    //  .then(response => response.json())
    //  .then(data => console.table(data));

  }
  
  return (
    <>
      <div className='container'>
        <form onSubmit={handleSubmit} className='formInput'>
          <input type="text" onChange={handleUsernameInput} value={userName}/>
          <button className='formButton'>Submit</button>
        </form>

        {/* Conditional rendering */}
        { resData && (
          <div className='userDetailCard'>
            <div className='userImage'>
              <img className='github-image' src="https://i.pinimg.com/originals/b5/1b/78/b51b78ecc9e5711274931774e433b5e6.png" alt="github" />
              <img className='my-image'src={resData.avatar_url} alt="avatar" />
            </div>
            <div className='userInfo'>
              <h4>{resData.name}</h4>
              <em>{resData.login}</em>
              <p>{resData.bio}</p>
            <div className='about'>
              <div className='follower'>
                <p>Followers </p>
                <p>{resData.followers}</p>
              </div>
              <div className='following'>
                <p>Following </p>
                <p>{resData.following}</p>
              </div>
              <div className='repo'>
                <p>Repos </p>
                <p>{resData.public_repos}</p>
              </div>
            </div>
            </div>
          </div>
          )
        }

      </div>
    </>
  );
}

export default App;
