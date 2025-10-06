import { Suspense, useState } from "react";
import Comments from "./Comments";
import SelectPost from "./SelectPost";

function App() {
  const [selectedPostId, setSelectedPostId] = useState(null);

  return (
    <>
      <Suspense fallback={<h2>Loading Post select...</h2>}>
        <SelectPost onChange={(postId) => setSelectedPostId(postId)} />
      </Suspense>

      {selectedPostId && (
        <Suspense fallback={<h2>Loading comments...</h2>}>
          {" "}
          <Comments postId={selectedPostId} />
        </Suspense>
      )}
    </>
  );
}

export default App;
