import { useEffect } from "react";

function useDocumentTitle(count){ 
  useEffect(() => {
    document.title = `document ${count}`;
  }, [count]);
}

export default useDocumentTitle;