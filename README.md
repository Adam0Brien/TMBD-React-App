# Assignment 2 - Web API.

Name: Adam O'Brien (20093460)

## Features.

[A bullet-point list of the ADDITIONAL features/endpoints you have implemented in the API **THAT WERE NOT IN THE LABS** ]. 

 + Feature 1 - I've added new API Routes for the pages

 + Feature 2 - Mongo Integration for top,upcoming and in cinema movies


## Installation Requirements

```bat
git clone https://github.com/Adam0Brien/TMBD-React-App.git
```

followed by installation

```bat

cd moviesAPI
npm install
cd app
npm install

```

## API Configuration
Describe any configuration that needs to take place before running the API. For example, creating an ``.env`` and what variables to put in it. Give an example of how this might be structured/done.
**REMEMBER: DON'T PUT YOUR OWN USERNAMES/PASSWORDS/AUTH KEYS IN THE README OR ON GITHUB,** just placeholders as indicated below:

The .env should look something like the following and the tmdb api key:

```bat
NODE_ENV=development
PORT=8080
HOST=localhost
MONGO_DB=mongodb+srv://<MONGODB-USERNAME:<SECRET>@<ClusterName>.gridgga.mongodb.net/?retryWrites=true&w=majority
SECRET=<password>
SEED_DB=True
TMDB_KEY=80c07a94e81a6142e7dd02eaef22d442

```

## API Design

|  |  GET | POST | PUT | DELETE
| -- | -- | -- | -- | -- 
| /api/movies |Gets a list of movies | N/A | N/A |
| /api/movies/{movieid} | Get a Movie | N/A | N/A | N/A
| /api/movies/{movieid}/reviews | Get all reviews for movie | Create a new review for Movie | N/A | N/A  
| /api/upcomming | Gets upcoming movies | N/A | N/A | N/A
| /api/top | Gets top movies | N/A | N/A | N/A
| /api/now-playing | Gets movies that are now in cinema | N/A | N/A | N/A
| /api/users | Gets users | user log in | N/A | N/A
| /api/users?action=register | N/A | registering a user | N/A | N/A


## Security and Authentication
Give details of authentication/ security implemented on the API(e.g. passport/sessions). Indicate which routes are protected. 

Json Web Tokens are used to authenticate users. 

All routes outlined in the index.js file of the src folder should be private aside from the sign up and login routes.

**REMEMBER: DON'T PUT YOUR OWN USERNAMES/PASSWORDS/AUTH KEYS IN THE README OR ON GITHUB**

## Integrating with React App

Describe how you integrated your React app with the API. Perhaps link to the React App repo and give an example of an API call from React App: 

~~~Javascript
export const login = (username, password) => {
    return fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({username: username, password:password }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));
};

export const signup = (username, password) => {
    return fetch('/api/users?action=register', {
        method: 'POST',
        body: JSON.stringify({username: username, password: password }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));
}

export const getMovies = () => {
    return fetch(
       '/api/movies',{headers: {
         'Authorization': window.localStorage.getItem('token')
      }
    }
    ).then(res => res.json());
  };

export const getGenres = () => {
    return fetch(
       '/api/genres',{headers: {
         'Authorization': window.localStorage.getItem('token')
      }
    }
    ).then(res => res.json());
  };


export const getTopMovies = () => {
    return fetch(
       '/api/top',{headers: {
         'Authorization': window.localStorage.getItem('token')
      }
    }
    ).then(res => res.json());
  };

export const getUpcomingMovies = () => {
    return fetch(
       '/api/upcomming',{headers: {
         'Authorization': window.localStorage.getItem('token')
      }
    }
    ).then(res => res.json());
  };

export const getInCinema = () => {
    return fetch(
       '/api/now-playing',{headers: {
         'Authorization': window.localStorage.getItem('token')
      }
    }
    ).then(res => res.json());
  };
~~~

## Extra features

None

## Independent learning.

None
