import * as React from "react";
import { createBrowserRouter, json } from "react-router-dom";

import Root, { rootLoader } from "./routes/root";
import Foo, { fooLoader } from "./routes/foo";
const FooDetail = React.lazy(() => import('./routes/fooDetail'))

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    loader: rootLoader,
    children: [
      {
        path: "/foo",
        element: <Foo />,
        loader: fooLoader,
      },
      {
        path: "/foo/:fooId",
        element: <React.Suspense fallback={<>loding...</>}>
          <FooDetail />
        </React.Suspense>,
        // async lazy() {
        //   let { FooDetail } = await import('./routes/fooDetail')
        //   return { Component: FooDetail }
        // },
        loader: ({ params }) => {
          return json({ name: 'xisu', age: 12, id: params.fooId });
        }
      }
    ],
  },
]);

export default router