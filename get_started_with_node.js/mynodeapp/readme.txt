Limitations of using Ractive in node
There is no two-way binding in node as there is no DOM.

Data manipulation can be done in node. Use methods like ractive.set() to modify data, and ractive.toHTML() to output the current template state as HTML.