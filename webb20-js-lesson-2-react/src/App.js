import React from 'react'
import './App.css';
import Tweet from './components/Tweet.jsx'

function App() {

  const tweetList = [
    {
      "imageURL": "https://images.unsplash.com/photo-1518806118471-f28b20a1d79d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      "content": "My Awesome tweet",
      "author": "John",
      "date": "2020-12-03"
    },
    {
      "imageURL": "https://images.unsplash.com/photo-1497316730643-415fac54a2af?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      "content": "It smells like christmas",
      "author": "Jane",
      "date": "2020-12-02"
    },
    {
      "imageURL": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      "content": "T-22 days until christmas",
      "author": "Eliza",
      "date": "2020-12-02"
    },
    {
      "imageURL": "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      "content": "Dressing up like Santa Claus tomorrow",
      "author": "Eliza",
      "date": "2020-12-01"
    }
  ]
  return (
    <div className='container'>
      {tweetList.map((item, index) => {
        return <Tweet
        key={index}
        author={item.author} 
        content={item.content}
        date={item.date}
        imageURL={item.imageURL}
          />
      })}
      {/* <Tweet author={tweetList[0].author} content={tweetList[0].content} date={tweetList[0].date} imageURL={tweetList[0].imageURL} />
      <Tweet author={tweetList[1].author} content={tweetList[1].content} date={tweetList[1].date} imageURL={tweetList[1].imageURL} />
      <Tweet author={tweetList[2].author} content={tweetList[2].content} date={tweetList[2].date} imageURL={tweetList[2].imageURL} />
      <Tweet author={tweetList[3].author} content={tweetList[3].content} date={tweetList[3].date} imageURL={tweetList[3].imageURL} /> */}
    </div>
  );
}

export default App;
