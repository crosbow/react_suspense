import { Suspense, useState } from "react";
import { ErrorBoundary } from "react-error-boundary";
import Comments from "./Comments";
import SelectPost from "./SelectPost";

function App() {
  const [selectedPostId, setSelectedPostId] = useState(null);

  return (
    <>
      <ErrorBoundary fallback={<h2>Error occur in post selector page</h2>}>
        <Suspense fallback={<h2>Loading Post select...</h2>}>
          <SelectPost onChange={(postId) => setSelectedPostId(postId)} />
        </Suspense>
      </ErrorBoundary>

      {selectedPostId && (
        <ErrorBoundary fallback={<h2>Error occur which rendering comments</h2>}>
          <Suspense fallback={<h2>Loading comments...</h2>}>
            <Comments postId={selectedPostId} />
          </Suspense>
        </ErrorBoundary>
      )}
    </>
  );
}

export default App;
