# Most GitHub Starred Repo

This project identifies and displays the most-starred repository of a specified GitHub user in last 10 days

## 🚀 Tech Stack
- Frontend: React

- Build Tool: Vite

## 🛠️ Installation

### Clone the Repository:

```
git clone https://github.com/rabbiyasana/most_starred_repo.git cd most_starred_repo
```
### install Dependencies:

```
npm install
```
### ⚙️ Development
```
npm run dev
```
### 📦 Build
```
npm run build
```
### Folder Structure

- components
- contants
- utilities
#### components
- **AllRepos.jsx:** This component will render the list of all fetched repos.
- **loadRepos:**  The function will call the fetchMostStarredRepos method with page params to get the list of current page repo details
- **RepoDetails.jsx:** This component is a single item UI which will take repo as object having fields (user icon, name, dscription, starts and user name)
#### utilities
- **api.jsx:** This will fetch the GitHub most start repos in 10 days using the axis and GitHub public api URL. The funciton will return the list of repos with details and total count of records for current page
#### contants
- **constants.jsx:** It contains all the contant variables like GITHUB_API_URL 

