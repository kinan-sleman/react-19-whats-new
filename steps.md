### for create fake data
```json
npm i @faker-js/faker
```

### useTransition hook is used for interrupting actions and provide just this 2 properties:
#### - isPending
#### - startTransition

### we can learn everything about react-compiler from this documentation: https://react.dev/learn/react-compiler and install it from this command: 
```json
npm install -D babel-plugin-react-compiler@latest
```
### By convention: any function that used async transition is called "Action"
### the old scenario before (use action) is using (useState & useEffect) when we working on fetching api data and update the state to view this data in our UI
### but the issue that we have in (useEffect hook) that It's caused re-rendering and fetch request can take some time
