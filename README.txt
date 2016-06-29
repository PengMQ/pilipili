1: understand Rrdux
  1: Components are given callback functions as props, which they call when a UI event happens
  2: Those callbacks create and dispatch actions based on the event
  3: Reducers process the actions, computing the new state
  4: The new state of the whole application goes into a single store.
  5: Components receive the new state as props and re-render themselves where needed.

  PS:
   1: The reducers are pure functions, which simply do oldState + action = newState. Each reducer computes a
       separate piece of state, which is then all composed together to form the whole application.
       This makes all your business logic and state transitions really easy to test.
   2: The API is smaller, simpler, and better-documented. I've found it much quicker and easier to learn all of
      the concepts, and therefore much easier to understand the flow of actions and information in my own projects.
   3: If you use it the recommended way, only a very small number of components will depend upon Redux; all the other
      components just receive state and callbacks as props. This keeps the components very simple, and reduces framework lock-in.

   There are a few other libraries that complement Redux extremely well, which I also recommend you use:

   Immutable.js - Immutable data structures for JavaScript! Store your state in these, in order to make sure it isn't
                  mutated where it shouldn't be, and to enforce reducer purity.
   redux-thunk - This is used for when your actions need to have a side effect other than updating the application state.
                 For example, calling a REST API, or setting routes, or even dispatching other actions.
   reselect - Use this for composable, lazily-evaluated, views into your state. For example, for a particular
              component you might want to: inject only the relevant part of the global state tree, rather than the whole thing
              inject extra derived data, like totals or validation state, without putting it all in the store