import React from 'react';

const Blogs = () => {
    return (
        <div className='mx-4 my-2'>
            <div tabindex="0" className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    How will you improve the performance of a React Application?
                </div>
                <div className="collapse-content">
                    <p>For developers that care about keeping a user's experience enjoyable and engaged, optimizing application speed is critical.</p>



                    <p>According to Akamai research, a one-second delay in load time can result in a 7% drop in conversions, making it critical for developers to create apps that function well.</p>



                    <p>By default, React applications have an extremely quick user interface. Developers may, however, run into performance concerns as a program grows.</p>
                    <p>We'll go over five important strategies to improve the performance of a React application in this post, including pre-optimization techniques. These are some of them:</p>
                    <br />
                    <p>1.When it's necessary, keep component state local.</p>
                    <p>2.To avoid unwanted re-renders, memorize React components.</p>
                    <p>3.React code splitting with dynamic import ().</p>
                    <p>4.In React, this is known as windowing or list virtualization.</p>
                    <p>5.In React, lazy image loading is possi</p>
                </div>
            </div>
            <div tabindex="0" class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box my-2">
                <div class="collapse-title text-xl font-medium">
                    What are the different ways to manage a state in a React application?
                </div>
                <div class="collapse-content">
                    <p>It's critical to be clear about what forms of state matter when discussing state in our apps.

                        In your React projects, there are four sorts of state that you must effectively manage:</p>
                    <p>1. Local state</p>
                    <p>2. Global state</p>
                    <p>3. Server state</p>
                    <p>4. URL state</p>
                    <br />
                    <p>Let's take a closer look at each of these:</p>
                    <br />
                    <p>Local (UI) state – Local state is data we manage in one or another component.

                        Local state is most often managed in React using the useState hook.

                        For example, local state would be needed to show or hide a modal component or to track values for a form component, such as form submission, when the form is disabled and the values of a form’s inputs.</p>
                    <br />
                    <p>Global (UI) state – Global state is data we manage across multiple components.

                        Global state is necessary when we want to get and update data anywhere in our app, or in multiple components at least.

                        A common example of global state is authenticated user state. If a user is logged into our app, it is necessary to get and change their data throughout our application.

                        Sometimes state we think should be local might become global.</p>
                    <br />
                    <p>Server state – Data that comes from an external server that must be integrated with our UI state.

                        Server state is a simple concept, but can be hard to manage alongside all of our local and global UI state.

                        There are several pieces of state that must be managed every time you fetch or update data from an external server, including loading and error state.

                        Fortunately there are tools such as SWR and React Query that make managing server state much easier.</p>
                    <br />
                    <p>URL state – Data that exists on our URLs, including the pathname and query parameters.

                        URL state is often missing as a category of state, but it is an important one.
                        In many cases, a lot of major parts of our application rely upon accessing URL state. Try to imagine building a blog without being able to fetch a post based off of its slug or id that is located in the URL!

                        There are undoubtedly more pieces of state that we could identify, but these are the major categories worth focusing on for most applications you build.</p>
                </div>
            </div>
            <div tabindex="0" class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box my-2">
                <div class="collapse-title text-xl font-medium">
                    How does prototypical inheritance work?
                </div>
                <div class="collapse-content">
                    <p>JavaScript is an Object Oriented programming language based on prototypes. JavaScript now supports "prototypal inheritance," which means that objects and methods can be shared, extended, and copied thanks to the ES6 improvements.

                        Structure (data fields), behavior (functions / methods), and state can all be inherited easily when objects are shared (data values).

                        JavaScript is the most popular prototype-capable language, and its features are quite distinctive. Prototypical inheritance in JavaScript is a powerful feature that can save hours of code when utilized correctly.

                        To get you up to speed on the ES6 features, we'd like to introduce you to prototypal inheritance in JavaScript today.</p>
                </div>
            </div>
            <div tabindex="0" class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box my-2">
                <div class="collapse-title text-xl font-medium">
                    Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts
                </div>
                <div class="collapse-content">
                    <p>Because of the following reasons, it is never a good idea to change the state directly:

                        If you alter it directly, executing setState() thereafter may just overwrite your changes.
                        This.state is not changed instantly when you directly update the state. Instead, it generates a pending state transition, which will only yield the current value if accessed after using this function.
                        You'll lose control of the state in all of your components.</p>
                </div>
            </div>
            <div tabindex="0" class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box my-2">
                <div class="collapse-title text-xl font-medium">
                    What is a unit test? Why should write unit tests?
                </div>
                <div class="collapse-content">
                    <p> <span className='text-bold text-2xl'>Unit Test-</span></p>

                    <p>Unit testing is a software development technique in which the smallest testable pieces of a program, referred to as units, are examined separately and independently for proper operation. Software developers and, on occasion, QA employees use this testing methodology during the development process. Unit testing's major goal is to separate written code in order to test and verify if it works as intended.</p>
                    <p>Unit testing is a crucial phase in the development process because, if done correctly, it can assist uncover early faults in code that would otherwise be difficult to find in later stages of testing.

                        Test-driven development (TDD) is a pragmatic methodology that takes a thorough approach to producing a product through continuous testing and revision. Unit testing is a component of TDD. This testing approach is also the first level of software testing, and it comes before other types of testing like integration testing. Unit tests are used to ensure that a unit does not rely on any external code or functions. Testing can be done by hand, but it's more common to automate it.</p>
                    <br />
                    <p> <span className='text-bold text-2xl'>How unit tests work
                        -</span></p>
                    <p>A unit test usually has three stages: planning, cases and scripting, and the actual unit test. The unit test is prepared and reviewed in the first stage. The following stage is to create test cases and scripts, after which the code is tested.

                        Developers must initially construct failed unit tests as part of test-driven development. They then develop code and rework the program till it passes the test. TDD usually results in a code base that is explicit and predictable.</p>
                </div>
            </div>
            <div tabindex="0" class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box my-2">
                <div class="collapse-title text-xl font-medium">
                    You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?
                </div>
                <div class="collapse-content">
                    <p>tabindex="0" attribute is necessary to make the div focusable</p>
                </div>
            </div>

        </div>
    );
};

export default Blogs;