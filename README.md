# Notebook

The versatile note-taking app designed for seamless organization, collaboration, and creativity. With flexible notes, robust organization, effortless collaboration, and stringent security, Notebook is your all-in-one digital workspace. Elevate your productivity with [Notebook](https://quick-notebook.netlify.com) today!

## Getting started

- Install the dependencies
  ```
  npm install
  ```
- Run the application
  ```
  npm dev
  ```
- Build the application
  ```
  npm build
  ```
- Run the production build locally
  ```
  npm preview
  ```

### TODO

- [x] install basic dependency and initial setup
- [x] add redux store
  - [x] add note reducer
  - [x] update note reducer
  - [x] delete note reducer
- [x] add components
  - [x] new note
  - [x] notes list
  - [x] note form
  - [x] edit note
- [ ] performance
  - [ ] add useMemo and debounce for editor
  - [ ] add dynamic imports for conditionally rendered components
  - [ ] remove unused packages
- [ ] add tipTap editor
  - [x] add basic editor from tiptap
  - [ ] add css to style editor extentions 
  - [ ] enable md support instead of buttons
- [ ] enable local storage for persistence
- [x] add favicon and logo
- [x] deploy to netlify
