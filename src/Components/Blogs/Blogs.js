import React from 'react';
import './Blogs.css';
const Blogs = () => {
    return (
        <div className='blogs-container'>
            <h1>Question & Answer</h1>
            <div className='blogs'>
                <h2>Q1: What is the purpose of Context Api?</h2>
                <p>Ans: The Context API is a React structure that allows us to share unique details. And helps us to solve prop-drilling problems at various levels of an app. The React Context API allows a React app to create global variables that can be shared. This is an alternative to "prop drilling," which entails passing props from grandparent to child to parent, and so on. React.createContext() returns a consumer and a provider. Provider is a component that supplies the state to its children, as the name implies. It will contain the "store" and serve as the parent for all components that require it. A component that consumes and uses the state is referred to as a consumer.</p>
                <h2>Q2: What is Semantic tag?</h2>
                <p>Ans: HTML was established to describe documents on the early internet as a markup language. As the internet expanded in popularity and more people used it, its requirements evolved. HTML Elements such as header, nav, section, article, aside, and footer behave similarly to div elements. Both the browser and the developer can understand the meaning of a semantic element. Non-semantic elements include div and span, which provide no information about the content. Form, table, and article are examples of semantic components. which Clearly describes its content.</p>
            </div>
        </div>
    );
};

export default Blogs;