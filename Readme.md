# Redux- Side Effects - Method-2 (Handling Redux Side Effects in using Thunks)

This project demonstrates/shows an example of how to handle **Redux-side-effects** with **redux custom action creators** via the use of **Thunks.**

> _REMEMBER:_ Redux-reducers must be pure, i.e. You can't run side effects generating tasks such as making **HTTP Requests** and **saving/fetching staff to your local storage** inside redux reducers. To run side-effects generating tasks in redux, you can do that in regular react components(of course using **useEffects()** hook) or use **redux custom action creators** via the use of **Thunks** -- something we are doing in this project.

## Running the project

CD into the project directory and run the following command:

```
npm install
```

To use the backend, (and if you have time) you can create your own simple API endpoints and replace the HTTP Requests links on this project with your own. Alternatively, you can quickly get a Firebase real-time-database test-link and use that instead.
