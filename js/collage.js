function getUsername() {
  let user_ls = document.getElementById("user-ls");
  let result = document.getElementById("result");
  let method = "user.gettopalbums";
  let period = document.getElementById("period").value;
  let limit = document.getElementById("limit").value;

  let username = user_ls.value;
  $(document).ready(function () {
    $.getJSON(
      "https://ws.audioscrobbler.com/2.0/?method=" +
        method +
        "&user=" +
        username +
        "&period=" +
        period +
        "&api_key=" +
        "953187488a724f2bf2eba12d1d5d8029" +
        "&limit=" +
        limit +
        "&format=json",
      function (json) {
        let html = "";
        result.innerHTML = "";
        $.each(json.topalbums.album, function (i, item) {
          html += "<img class='img' src='" + item.image[2]["#text"] + "' />";
        });
        $("#result").append(html);
      }
    );
  });
}
