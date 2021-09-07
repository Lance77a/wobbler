import React, {Component} from 'react';
import Navbar from './Navbar';
import RecipeInput from './RecipeInput';
import RecipeList from './RecipeList';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [
        {
            id: 0, title: "Old Fashioned",
      ingredients: ["2.5oz Rye", "Angoustra Bitters", "1 Sugar Cube", "Orange Twist"],
      instructions: "Muddle the sugar cube and bitters with one bar spoon of water at the bottom of a chilled rocks glass. (If using simple syrup, combine bitters and one bar spoon of syrup.) Add rye or bourbon. Stir. Add one large ice cube, or three or four smaller cubes. Stir until chilled and properly diluted, about 30 seconds. Slip orange twist on the side of the cube.",
      img: "old_fashioned.png"
        },
        { id: 1, title: "Mojito",
        ingredients: ["1.5 z White Rum", "1oz Fresh Lime Juice", "2 Teaspoons of Sugar", "5 Mint Leaves", "Soda Water"],
        instructions: "Mint sprigs muddled with sugar and lime juice. Rum added and topped with soda water. Garnished with sprig of mint leaves. Served with a straw.",
        img: "mojito.png"
          },
        { id: 2, title: "French 75",
        ingredients: ["1oz Gin", "0.5oz Fresh Lemon Juice", "2 Dashes of Simple Syrup", "2oz Brut Champagne"],
        instructions: "Combine gin, syrup, and lemon juice in a cocktail shaker filled with ice. Shake vigorously and strain into an iced champagne glass. Top up with Champagne. Stir gently",
        img: "french_75.png"
        }
      ],
      nextRecipeId: 3,
      showForm: false
    }

    this.handleSave = this.handleSave.bind(this);
    this.onDelete = this.onDelete.bind(this);
  }

  handleSave(recipe){
    this.setState((prevState, props) => {
      const newRecipe = {...recipe, id: this.state.nextRecipeId};
      return {
        nextRecipeId: prevState.nextRecipeId + 1,
        recipes: [...this.state.recipes, newRecipe],
        showForm: false
      }
    });
  }

  onDelete(id){
    const recipes = this.state.recipes.filter(r => r.id !== id);
    this.setState({recipes});
  }

  render() {
    const {showForm} = this.state;
    return (
    <div className="App">
      <Navbar onNewRecipe={() => this.setState({showForm: true})} />
        { showForm ? 
            <RecipeInput
                onSave={this.handleSave}
                onClose={() => this.setState({showForm: false})}
            /> : null }
        <RecipeList onDelete={this.onDelete} recipes={this.state.recipes} />
      </div>
    );
  }
}

export default App;
