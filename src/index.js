import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './r-conditional-rendering/App';
// import App from './App';

class productCategoryRow extends Component {
  render() {
    const {category} = this.props;
    return (
      <tr>
        <th colSpan="2">{category}</th>
      </tr>
    )
  }
}

class ProductRow extends Component {
  render() {
    const {product} = this.props;
    const name = product.stocked ? 
      product.name :
      <span style={{ color: "red" }}>{product.name}</span>

      return (
        <tr>
          <td>{name}</td>
          <td>{product.price}</td>
        </tr>
      )
  }
}

class ProductTable extends Component {
  render(){
    const rows = [];
    let lastCategory = null;

    this.props.products.forEach(product => {
      if (product.category !== lastCategory) {
        rows.push(
          <productCategoryRow
            category={product.category}
            key={product.category}
          />
        );
      }
      rows.push(
        <ProductRow
          product={product}
          key={product.name}
        />
      );
      lastCategory = product.category;
    });

    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}

ReactDOM.render(
  <SignUpDialog />,
  document.getElementById('root')
);
