import React from "react";
import Header from "./Header";
import MenuAdmin from "./MenuAdmin";
import Order from "./Order";
import sampleBurgers from "../sample-burgers";
import Burger from "./Burger";

class App extends React.Component {
  state = {
    burgers: {},
    order: {},
  };

  addBurger = (burger) => {
    // 1. Делаем копию обхекта state
    const burgers = { ...this.state.burgers };
    // 2. Добавить новый бургер в переменную burgers
    burgers[`burger${Date.now()}`] = burger;
    // 3. Записать новый объект burgers в state
    this.setState({ burgers });
  };

  loadSampleBurgers = () => {
    console.log("Ready to load");
    this.setState({ burgers: sampleBurgers });
  };

  addToOrder = (key) => {
    // 1. Делаем копию обхекта state
    const order = { ...this.state.order };
    // 2. Добавить ключ к заказу со значением 1
    order[key] = order[key] + 1 || 1;
    // 3. Записать новый объект order в state
    this.setState({ order });
  };

  render() {
    return (
      <div className="burger-paradise">
        <div className="menu">
          <Header title="Very hot burgers" />
          <ul className="burgers">
            {Object.keys(this.state.burgers).map((key) => {
              return (
                <Burger
                  key={key}
                  index={key}
                  addToOrder={this.addToOrder}
                  details={this.state.burgers[key]}
                />
              );
            })}
          </ul>
        </div>
        <Order burgers={this.state.burgers} order={this.state.order} />
        <MenuAdmin
          addBurger={this.addBurger}
          loadSampleBurgers={this.loadSampleBurgers}
        />
      </div>
    );
  }
}

export default App;
