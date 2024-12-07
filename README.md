# React Router Dom v6 Query Parameter Bug

This repository demonstrates a bug in React Router Dom v6 related to handling query parameters.  The application renders correctly initially, but fails to re-render when query parameters change. This issue is particularly noticeable when using parameters within nested routes. 

## Bug Description
The component correctly displays the initial page content according to the query parameters. However, when the query parameter changes via a link or manual URL update, the component fails to re-render, leading to stale data. 

## Solution
The solution employs the `useSearchParams` hook to directly manage query parameters and triggers re-renders based on parameter changes. This method removes the dependency on URL changes for updating state. 