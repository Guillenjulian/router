function handleRoute(route) {
    const containerEl = document.querySelector(".container");
    console.log(route);
    const router = [
        {
            path: /\/sit1/,
            handler: ()=>containerEl.textContent = "Sit 1"
        },
        {
            path: /\/sit2/,
            handler: ()=>containerEl.textContent = "Sit-2"
        },
        {
            path: /\/search\/./,
            handler: ()=>containerEl.textContent = "search"
        }
    ];
    for (let r of router)if (r.path.test(route)) {
        r.handler;
        console.log("este es el handler", r, containerEl);
    }
}
function goTo(path) {
    /*
    //sit 1
    //sit 2
    */ history.pushState({}, "", path);
    handleRoute(path);
}
(function() {
    const button1SitEl = document.querySelector(".sit-1");
    const button2SitEl = document.querySelector(".sit-2");
    const button3SitEl = document.querySelector(".sit-3");
    button1SitEl.addEventListener("click", ()=>goTo("/sit1"));
    button2SitEl.addEventListener("click", ()=>goTo("/sit2"));
    button3SitEl.addEventListener("click", ()=>goTo("/searche/termos"));
    window.addEventListener("load", ()=>{
        handleRoute(location.pathname);
    });
})();

//# sourceMappingURL=index.377278e2.js.map
