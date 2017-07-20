# Simple React Todo app

This code is built through a tutorial session, you can find whole tutorial on the
[link](https://kolosek.com/building-simple-react-app-part-1)

1) Setup
2) Start
3) Usage

### Setup

Locate directory in which you cloned this project, install dependencies

```bash
npm install
```

### Start

Setup `json-server` and start

If you haven't installed `json-server` do the following
```bash
npm install -g json-server
```

Start `json-server` in separate terminal window (or tab, screen session, what ever you use)
```bash
json-server -p 9000 --watch db.json
```
Note: If you change port for server, you need to edit `utils/configConstants.js` to point to appropriate port

Start the app

```bash
npm start
```

### Usage

Simple react application written as a tutorial material, you can create new todos,
mark todos as done, or activate again finished ones, and you can delete todos.
There is a filter which enables you filtering todos to see only finished, unfinished or all.