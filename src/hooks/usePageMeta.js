import { useEffect } from "react";

const usePageMeta = (title, description) => {
  useEffect(() => {
    if (title) {
      document.title = title;
    }

    if (description) {
      let meta = document.querySelector("meta[name='description']");
      if (meta) {
        meta.setAttribute("content", description);
      }
    }
  }, [title, description]);
};

export default usePageMeta;
