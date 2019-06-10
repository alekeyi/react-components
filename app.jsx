// TODO


const App = (props) => (
  <div>
    <GroceryList />
  </div>
);

const GroceryList = () => {
  const items = ['food', 'drugs', 'rocknroll'];
  const list = items.map((item, index) => {
    return(
      <GroceryListItem item = {item} key={index} />
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
    this.state = {
      done: false,
      hover: false
    };
  }
  toggleHover() {
    this.setState({
      hover: !this.state.hover
    });
    console.log('hovered')
  }
  onListItemClick() {
    this.setState({
      done: !this.state.done
    });
    console.log("Click")
  }

  render(props) {
      // console.log(item);
      let style = {
        textDecoration: this.state.done ? 'line-through' : 'none',
        fontWeight: this.state.hover ? 'bold' : 'normal'
      }
      return (
          <ul style={style} onClick={this.onListItemClick.bind(this)} onMouseEnter= {this.toggleHover.bind(this)} onMouseLeave= {this.toggleHover.bind(this)}>
            {this.props.item}
          </ul>
      );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));