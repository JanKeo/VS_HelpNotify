window.addEventListener("message", (event) => {
    var item = event.data;
    if (item.action === "timed") {
      $("#notify").empty();
      const content = $(
        `
        <div class="notification">
          <p id="message">
            ` + item.message + `
          </p>
        </div>
        `
      )
  
      $("#notify").prepend(content);
  
      setTimeout(() => {
        content.remove();
      }, item.time)
    } else if (item.action === "open") {
      $("#notify").empty();
      const content = $(
        `
        <div class="notification">
          <p id="message">
            ` + item.message + `
          </p>
        </div>
        `
      )
  
      $("#notify").prepend(content);
    }else if (item.action === "close") {
        $("#notify").empty();
    }
  });