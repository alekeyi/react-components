// TODO


const App = (props) => (
  <div>
    <GroceryList />
  </div>
);

const GroceryList = () => {
  const items = ['food', 'drugs', 'rocknroll'];
  const list = items.map(item => {
    return(
      <GroceryListItem item = {item} />
    )
  })

  return (
    <div>
      <ul>
        {list}
      </ul>
    </div>
  )
}

class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);   
  }

  render(props) {
      // console.log(item);
      return (

          <ul>
            {this.props.item}
          </ul>
      )
  }
}

ReactDOM.render(<App />, document.getElementById("app"));