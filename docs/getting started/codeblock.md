--- 
title: Codeblocks
sidebar_position: 6
---

```jsx title="Codeblock"
function Greeting(props) { 
    return <p>Welcome, {props.userName}!</p>
}

export default Greeting;
```

```jsx title="Highlight"
function HighlighText(highlight) { 
    if (highlight) {
        //highlight next line
        return 'This text is highltighted';
    }
    return 'Nothing highlighted';
}

function HighlighMoreText(highlight) { 
    if (highlight) {
        //highlight start
        return 'This range is highltighted';
    }
    //highlight end
    return 'Nothing highlighted';
}

```