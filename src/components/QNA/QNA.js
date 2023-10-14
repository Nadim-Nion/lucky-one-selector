import React from 'react';
import './QNA.css';
const QNA = () => {
    return (
        <div className='qna'>
            <h4>Q.1 How does React Work?</h4>
            <p>
                React is a JavaScript library for building user interfaces. It works by creating a virtual representation of the user interface called the Virtual DOM. When data in a React component changes, React compares the new Virtual DOM with the previous one, identifying the differences (diffing). It then efficiently updates the real DOM to reflect these changes, minimizing the need for manual DOM manipulation. This approach improves performance by reducing unnecessary re-rendering and enhancing user experience in web applications. React also encourages a component-based architecture, making it easier to manage and maintain complex UIs.
            </p>

            <h4>Q.2 Differences between Props and State in React?</h4>
            <p>
                <b> Props (Properties):</b>

                (1) Props are immutable data passed from a parent component to a child component. <br />

                (2) They are read-only, meaning the child component cannot modify its props.

                <br /> <br />

                <b>State:</b>

                (1) State is mutable data managed within a component. <br />

                (2) It is used for storing component-specific data that can change over time.
            </p>
        </div>
    );
};

export default QNA;