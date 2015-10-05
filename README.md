# Live Region Notifier Script

This is a simple script that provides an easy to use, centralized method for generating a live region change without having about which exact markup to use. This can be useful if you want a screen reader to quickly announce basic feedback as a result of a user action. This type of feedback can be useful for screen reader user to determine whether a specific action was successful or not.
Example use cases: 
* Expanding or collapsing a region
* Changing sorting direction in a sortable table
* Switching to a different paged view
* Refreshing a page section
* Performing a search or filter action
* any other kind of dynamic update triggered by a basic user action such as clicking a link or button

The type of actions listed above could benefit from a basic status update once performed, e.g. "The list is filtered to 20 results", "Section collapsed", "The latest news section has been refresh", etc.

## How to Use

There are two methods:

* `setupNotifier()`: creates the live region container and adds it to the body element. This is just a `<div>` element with the `sr-only` class and an aria-live attribute. All live region text will later be added to this element.
* `notify(strFeedback, selector)`: Adds the text specified as by `strFeedback` to the live region, causing screen reader's to announce it. If the text should be added to a different element instead (e.g. a visible element that already exists on the page), then that element can be specified as a jQuery selector or DOM reference through the `selector` parameter. The message will be removed from the live region after 10 seconds.

For an example, see the [basic demo](http://hanshillen.github.io/LRNotifier/demo/index.html).



