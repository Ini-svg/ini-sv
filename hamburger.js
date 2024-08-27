
const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const currentState = button.getAttribute("data-state");

    if (!currentState || currentState === "closed") {
      button.setAttribute("data-state", "opened");
      button.setAttribute("aria-expanded", "true");
      document.addEventListener("click", (f)=>{
        if( !mainsideNav.contains(f.target) && !menubtn.contains(f.target) && !searchba.contains(f.target)){
          sideNav.style.right="-300%";
          sideNavbg.style.right="-300%"
          opening= false
            button.setAttribute("data-state", "closed");
            button.setAttribute("aria-expanded", "false");}}
        )
    } else {
      button.setAttribute("data-state", "closed");
      button.setAttribute("aria-expanded", "false");
      document.addEventListener("click", (f)=>{
        if( !mainsideNav.contains(f.target) && !menubtn.contains(f.target) && !searchba.contains(f.target)){
          sideNav.style.right="-300%";
          sideNavbg.style.right="-300%"
          opening= false
            button.setAttribute("data-state", "closed");
            button.setAttribute("aria-expanded", "false");}}
        )
    }
  });
});

