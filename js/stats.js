function getUsername() {
  user_ls = document.getElementById("user-ls");
  result = document.getElementById("result");
  var method = "user.gettoptracks";
  var period = document.getElementById("period").value;
  var limit = document.getElementById("limit").value;
  var html = "";

  var username = user_ls.value;
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
      html = "";
      result.innerHTML = "";
      $.each(json.toptracks.track, function (i, item) {
        html +=
          "<li><p><a href=" +
          item.url +
          " target='_blank'>" +
          item.name +
          "</a> - " +
          "Play count : " +
          item.playcount +
          "</p></li>";
      });
      $("#result").append(html);
    }
  );
}
