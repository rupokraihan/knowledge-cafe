import React from "react";
import "./Answer.css";

const Answer = () => {
  return (
    <div className="answer-container">
      {/* answer to question-1 */}
      <h2 className="">1.Difference between props and state</h2>
      <p>
        ans:In React, props and state are both used to manage data and control
        the behavior of components,but they have some differences.I explain the
        differences below: <br></br>
        props: Props are passed down to a component from its parent
        component.They are read-only and cannot be modified by the component
        that receives them. The component can only use the data passed in via
        props to render its output. <br></br>
        For example, a Button component might receive a label prop to specify
        the text to be displayed on the button.
      </p>
      <p>
        State, on the other hand, is internal to a component and can be modified
        by the component itself. It is mutable and is used to represent the
        internal state of a component. <br></br>
        For example, a Counter component might have a count state that is
        incremented when the user clicks on a button. <br></br>
        In summary, props are used to pass data from a parent component to its
        children, while state is used to manage data that is internal to a
        component and needs to be updated over time.
      </p>

      {/* answer to question no-2  */}
      <h2 className="mt-5">2.How does useState work in react?</h2>
      <p>
        Ans: useState is a React Hook that allows functional components to have
        state.It is used to declare a state variable and returns an array with
        two values:
        <ol>
          <li>The first value is the current state value.</li>
          <li>
            The second value is a function that can be used to update the state
            value.
          </li>
        </ol>
        <p>
          example, useState is used to declare a state variable called count,
          which is initialized to 0. The setCount function returned by useState
          is then used to update the count variable whenever the button is
          clicked. When the setCount function is called, React will re-render
          the component with the new state value, causing any relevant parts of
          the UI to update accordingly.
        </p>
      </p>

      {/* answer to question no-3  */}
      <h2 className="mt-5">3.What else can useEffect do except load data?</h2>
      <p>
        Ans:useEffect is a built-in React hook that allows you to perform side
        effects in functional components. While loading data is a common use
        case for useEffect, there are several other things that it can be used
        for, including:
        <ol>
          <li>
            useEffect to update the title of the page based on the current state
            or props of the component.
          </li>
          <li>useEffect to add event listeners to the window or document.</li>
          <li>
            useEffect to trigger animations when a component mounts or updates.
          </li>
        </ol>
        In summary, useEffect is a versatile hook that can be used for many
        different purposes beyond just fetching data. It allows you to manage
        side effects and keep your component's logic organized and declarative.
      </p>

      {/* answer to question no-4  */}
      <h2 className="mt-5">4.How does react work?</h2>
      <p>
        Ans:React is a popular JavaScript library for building user interfaces.
        It works by allowing developers to create reusable UI components and
        manage the state of those components in a declarative and efficient way.
        <br></br>
        Here's a brief overview of how React works:
        <ul>
          <li>
            When a React component is rendered, it generates a Virtual DOM tree,
            which is compared to the previous Virtual DOM tree to identify the
            changes that need to be made to the actual DOM. React then updates
            only the parts of the actual DOM that have changed, resulting in
            faster and more efficient updates.
          </li>
          <li>
            React uses a unidirectional data flow to manage the state of
            components. Data flows from parent components down to child
            components via props, and child components can signal state changes
            to their parents via callbacks.
          </li>
          <li>
            React also provides a number of lifecycle methods that can be used
            to perform actions at specific points in the component's lifecycle,
            such as when it is first mounted or updated.
          </li>
          <li>
            React can be used to build single-page applications, where all the
            necessary code for the app is loaded on initial page load.
          </li>
        </ul>
        Overall, React provides developers with a powerful set of tools for
        building dynamic and interactive user interfaces. Its declarative,
        component-based approach makes it easy to build and maintain complex
        UIs, and its efficient rendering system ensures that applications
        perform well even with large amounts of data.
      </p>
    </div>
  );
};

export default Answer;
