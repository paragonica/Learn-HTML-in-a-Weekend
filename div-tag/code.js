// Assign click listener on pane open/close icons.
function initializeUI() {
    // Icon to open pane was clicked.
    // Display pane, hide open icon, show close icon.
    $(".accordion-open").click(function() {
        $(".accordion-body").show();
        $(".accordion-open").hide();
        $(".accordion-close").show();
    });
    // Icon to close pane was clicked.
    // Hide pane, hide close icon, show open icon.
    $(".accordion-close").click(function() {
        $(".accordion-body").hide();
        $(".accordion-close").hide();
        $(".accordion-open").show();
    });
}