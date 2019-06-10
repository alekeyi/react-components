// TODO


var App = () => (
  <div>
    <h2>My Grocery List</h2>
    <GroceryList />
  </div>
);

class GroceryList extends React.Component {
  constructor(props) {
    super(props);
    this.list = ['Food1', 'Drugs'];
    this.listItems = this.list.map((item, index) => 
      <div key={index}>
      <li>{item}</li>
      </div>
    );
  }

  render(props) {
      console.log(this.list);
      // let item = (this.list) => {
      //   for(let i of this.list) {
      //     return this.list[i];
      //   }
      // }
      return (
        <div id='list'>
          <ul>
            {this.listItems}
          </ul>
        </div>);
  }
}

ReactDOM.render(<App />, document.getElementById("app"));