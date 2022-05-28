import React from 'react';

const Blog = () => {
    return (
        <div className="container my-5">
      <div>
        <h3 className="text-error text-center text-2xl">
          Q1:{" "}
          <span className="text-neutral">
          How will you improve the performance of a React Application?
          </span>
        </h3>
        <h4 className="text-success text-xl">
          Answer:{" "}
          <span className="text-neutral">
            There are several way to improve react application performance. By using multiple chunk file. It'll reduce the render time and catch the modified things easily. By using immutable data sructure. Data immutability, which comes from the functional programming world, can be applied to the design of front-end apps. Lazy loading is a great technique for optimizing and speeding up the render time of the app. Using powerful libraries. Dependency optimizer would be a great solution. By this when a component is render it would depend on the dependency. 
          </span>
        </h4>
      </div>
      <div className="mt-5">
        <h3 className="text-error text-center text-2xl">
          Q2:{" "}
          <span className="text-neutral">
          What are the different ways to manage a state in a React application?
          </span>
        </h3>
        <h4 className="text-success text-xl">
          Answer:{" "}
          <span className="text-neutral">
            Using setState() would be a great solution. The built-in setState() method updates a variable's value in the classes local store. This local store allows the updated variable values to be accessed by any function that may require these values. Now a days Redux makes handling state so easy. with redux data  can be upshift so easily. Just hasslefree and easy to use. 
          </span>
        </h4>
      </div>
      <div className="mt-5">
        <h3 className="text-error text-center text-2xl">
          Q3:{" "}
          <span className="text-neutral">
          How does prototypical inheritance work?
          </span>
        </h3>
        <h4 className="text-success text-xl">
          Answer:{" "}
          <span className="text-neutral">
          Prototypical inheritance refers to the ability to access object properties from another object. We use a JavaScript prototype to add new properties and methods to an existing object constructor. We can then essentially tell our JS code to inherit properties from a prototype. Prototypical inheritance allows us to reuse the properties or methods from one JavaScript object to another through a reference pointer function. Prototypical inheritance clearly has a lot of benefits for JavaScript programmings, but, like all tools, it does have boundaries. 
          </span>
        </h4>
      </div>
      <div className="mt-5">
        <h3 className="text-error text-center text-2xl">
          Q4:{" "}
          <span className="text-neutral">
          What is a unit test? Why should write unit tests?
          </span>
        </h3>
        <h4 className="text-success text-xl">
          Answer:{" "}
          <span className="text-neutral">
          Unit testing is a type of software testing where individual units or software components are tested. Its purpose is to validate that each unit of code performs as expected. Generally, smaller tests are better as they give a more granular view of your code's performance. Also, when you test very small units, your tests can run fast, like a thousand tests in a second fast. Unit tests save time and money. Well-written unit tests act as documentation for your code. Any developer can quickly look at your tests and know the purpose of your functions. Unit tests make code reuse easier. If you want to reuse existing code in a new project, you can simply migrate both the code and tests to your new project.
          </span>
        </h4>
      </div>
      <div className="mt-5">
        <h3 className="text-error text-center text-2xl">
          Q5:{" "}
          <span className="text-neutral">
          Why you do not set products = [...] instead, you use the setProducts
          </span>
        </h3>
        <h4 className="text-success text-xl">
          Answer:{" "}
          <span className="text-neutral">
          The idea behind that is that in order to track changes in state and than re-render the component according to the changes, you have to use setState, because after setState, the render function is triggered. Another important reason is using setState returns a new state and does not mutate the original state, which can be passed to a pure component. Since pure component only does shallow rendering of objects if the new state is not returned the component will not re render.
          </span>
        </h4>
      </div>
    </div>
    );
};

export default Blog;