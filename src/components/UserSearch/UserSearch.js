import React, { useEffect, useRef, useState } from "react";

import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { useHistory } from "react-router-dom";
import useStyles from "components/UserSearch/UserSearchStyles";

const UserSearch = () => {
  const classes = useStyles();
  const [results, setResults] = useState([]);
  const [searchText, setSearchText] = useState("");
  const searchRef = useRef(null);
  const history = useHistory();
  // eslint-disable-next-line consistent-return
  useEffect(() => {
    // if there is search text, send a request after 0.5 second of no typing
    if (searchText) {
      const timer = setTimeout(async () => {
        const response = await fetch(`/users/${searchText}`);
        const data = await response.json();
        setResults(data);
      }, 500);
      return () => clearTimeout(timer);
    }
    setResults([]);
  }, [searchText]);

  const handleSearch = (text) => {
    setSearchText(text);
  };

  const handleUserView = (username) => {
    history.push(`profile/${username}`);
  };

  return (
    <div className={classes.root}>
      <TextField
        required
        inputRef={searchRef}
        onChange={(e) => handleSearch(e.target.value)}
        type="text"
        placeholder="Search for users"
      />
      <List className={classes.userList}>
        {results.map(({ username }, idx) => (
          <div key={username}>
            <ListItem alignItems="flex-start">
              <ListItemText
                className={classes.listItem}
                primary={username}
                onClick={() => handleUserView(username)}
              />
            </ListItem>
            {idx + 1 !== results.length && <Divider />}
          </div>
        ))}
      </List>
    </div>
  );
};

export default UserSearch;
