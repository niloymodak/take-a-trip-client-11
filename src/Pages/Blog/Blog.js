import React from 'react';
import { Helmet } from 'react-helmet';

const Blog = () => {
    return (
        <div className='mx-10'>
            <Helmet>
                <title>Take A Trip - Blog</title>
            </Helmet>
            <h4 className='text-2xl font-bold'>Question:Difference between SQL and NoSQL?</h4>
            <h6 className='text-1xl font-semibold'>
                Answer: <br />
                The five critical differences between SQL vs NoSQL are:
                <br />
                1. SQL databases are relational, NoSQL databases are non-relational. <br />
                2. SQL databases use structured query language and have a predefined schema. NoSQL databases have dynamic schemas for unstructured data. <br />
                3. SQL databases are vertically scalable, while NoSQL databases are horizontally scalable. <br />
                3. SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores. <br />
                4. SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON. <br />
            </h6>
            <h4 className='text-2xl font-bold'>Question:What is JWT, and how does it work?</h4>
            <h6 className='text-1xl font-semibold'>
                Answer: <br />
                JSON Web Token (JWT) is an open standard (RFC 7519) for securely transmitting information between parties as JSON object. It is compact, readable and digitally signed using a private key/ or a public key pair by the Identity Provider(IdP). So the integrity and authenticity of the token can be verified by other parties involved. <br />
                Works: <br />
                Basically the identity provider(IdP) generates a JWT certifying user identity and Resource server decodes and verifies the authenticity of the token using secret salt / public key. <br />
                1. User sign-in using username and password or google/facebook. <br />
                2. Authentication server verifies the credentials and issues a jwt signed using either a secret salt or a private key. <br />
                3. User's Client uses the JWT to access protected resources by passing the JWT in HTTP Authorization header. <br />
                4. Resource server then verifies the authenticity of the token using the secret salt/ public key. <br />
            </h6>
            <h4 className='text-2xl font-bold'>Question:What is the difference between javascript and NodeJS?</h4>
            <h6 className='text-1xl font-semibold'>Answer:</h6>
            <div className='grid grid-cols-2 gap-4'>
                <h6 className='text-1xl font-semibold'>
                    *Javascript* <br />
                    1. Javascript is a programming language that is used for writing scripts on the website.  <br />
                    2. Javascript can only be run in the browsers. <br />
                    3. It is basically used on the client-side. <br />
                    4. Javascript is capable enough to add HTML and play with the DOM. <br />
                    5. Javascript can run in any browser engine as like JS core in safari and Spidermonkey in Firefox. <br />
                </h6>
                <h6 className='text-1xl font-semibold'>
                    *NodeJS* <br />
                    1. NodeJS is a Javascript runtime environment.<br />
                    2. We can run Javascript outside the browser with the help of NodeJS.<br />
                    3. It is mostly used on the server-side.<br />
                    4. Nodejs does not have capability to add HTML tags.<br />
                    5. V8 is the Javascript engine inside of node.js that parses and runs Javascript. <br />
                </h6>
            </div>
            <h4 className='text-2xl font-bold'>Question:How does NodeJS handle multiple requests at the same time?</h4>
            <h6 className='text-1xl font-semibold'>
                Answer: <br />
                NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. EventLoop is the listener for the EventQueue.
                If NodeJS can process the request without I/O blocking then the event loop would itself process the request and sends the response back to the client by itself. But, it is possible to process multiple requests parallelly using the NodeJS cluster module or worker_threads module.
            </h6>

        </div>
    );
};

export default Blog;