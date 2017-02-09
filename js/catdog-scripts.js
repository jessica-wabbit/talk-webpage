$(function() {
  $("button#hungry").click(function() {
    $("ul#cat").prepend("<li>MEEEEOOOWWWW</li>");
    $("ul#dog").prepend("<li>WOOF</li>");

    $("ul#cat").children("li").first().click(function() {
      $(this).remove();
    });
    $("ul#dog").children("li").first().click(function() {
      $(this).remove();
    });

  });

  $("button#thirsty").click(function() {
    $("ul#cat").prepend("<li>MEEEEEOOWWWWWWWWWWW!!!!</li>");
    $("ul#dog").prepend("<li>RUFF?</li>");
    $("ul#cat").children("li").first().click(function() {
      $(this).remove();
    });
    $("ul#dog").children("li").first().click(function() {
      $(this).remove();
    });

  });

  $("button#sassy").click(function() {
    $("ul#cat").prepend("<li>HISSSSSSSS!!!!</li>");
    $("ul#dog").prepend("<li>YIP! AR! ARR!</li>");
    $("ul#cat").children("li").first().click(function() {
      $(this).remove();
    });
    $("ul#dog").children("li").first().click(function() {
      $(this).remove();
    });
  });
});
