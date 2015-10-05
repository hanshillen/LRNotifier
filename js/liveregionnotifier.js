$(function() {
    var iChannel = 0;
    var $lrContainer;

    function clear($channel) {
        // Remove message
        $channel.remove();
    }

    function setupNotifier() {
        // Set up a live region for feedback
        $lrContainer = $("#TPG_lRNotifier");
        if (!$lrContainer.length) {
            $lrContainer = $("<div></div>").attr('id', 'TPG_lRNotifier')
                .attr('aria-live', 'polite')
                .attr("aria-relevant", "additions")
                .attr("role", "status")
                .addClass("sr-only")
                .appendTo(document.body);
        }
    }

    function notify(strFeedback, selector) {
        setTimeout(function() {
            if (selector) {
                // show text permanently in existing (visible) container
                $(selector).text(strFeedback);
                return;
            }
            var $channel = $("<div></div>").attr("id", 'channel' + iChannel).text(strFeedback).appendTo($lrContainer)
                //$lrContainer.text(strFeedback);
            lrNotifier.iChannel++;
            if (lrNotifier.iChannel > 1000) {
                lrNotifier.iChannel = 0;
            }
            setTimeout(function() {
                clear($channel);
            }, 10000);

        }, 0);

    }

    window.lrNotifier = {
        setupNotifier: setupNotifier,
        notify: notify
    };
});
