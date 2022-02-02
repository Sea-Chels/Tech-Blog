async function commentFormHandler(event) {
  event.preventDefault();

  const comment = document
    .getElementById('comment-input').value.trim();

    console.log(comment)

  const post_id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];

  if (comment) {
    const response = await fetch("/api/comments", {
      method: "POST",
      body: JSON.stringify({
        post_id,
        comment,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      console.log(comment)
      document.location.reload();
    } else {
      alert(response.statusText);
      document.querySelector("#add-comment")
    }
  }
}

document
  .getElementById("add-comment")
  .addEventListener("submit", commentFormHandler);
