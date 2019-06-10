// TODO


var App = () => (
  <div>
    <h2>My Grocery List</h2>
    <GroceryList />
  </div>
);

class GroceryList extends React.Component {
  constructor(props) {
    super();
    this.list = ['Food1', 'Drugs'];
  }

  render() {
    return (
      <div id="list">
        {this.list}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));