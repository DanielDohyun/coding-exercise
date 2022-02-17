//directing to the specific section of the page using #
useEffect(() => {
  if (window.location.hash === "") {
    window.scrollTo(0, 0);
  } else {
    setTimeout(() => {
      const id = window.location.hash.replace("#", "");
      const element = document.getElementById(id);
      console.log(id);
      console.log(element);
      if (element) {
        element.scrollIntoView();
      }
    }, 1000);
  }
}, [window.location.hash]);
