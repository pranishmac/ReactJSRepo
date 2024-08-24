const heading = React.createElement(
  "div",
  { id: "heading" },
  React.createElement("div", { id: "content" }, [
    React.createElement("h1", {}, "Hello from H1"),
    React.createElement("h2", {}, "Hello from H2"),
  ])
);

/**Above code boils down to this
 * <div id="root">
 *      <div id="heading">
 *          <div id="content">
 *              <h1>Hello from H1</h1>
 *              <h2>Hello from H2</h2>
 *          </div>
 *      </div>
 * </div>
 */

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
