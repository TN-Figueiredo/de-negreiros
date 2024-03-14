import React, { useEffect, useState } from 'react';
import PatchEvent, { set, unset } from "@sanity/form-builder/PatchEvent"
import { Select, Card, Spinner, Text } from '@sanity/ui';

const url = 'https://fakestoreapi.com/products';
const cardProps = { shadow: 1, padding: 3, radius: 2 };

export default function ProductSelector(props) {
  const { onChange, value } = props
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // This function will run each time the select menu is used
  const handleChange = React.useCallback(
    (event) => {
      const value = event.currentTarget.value;
      // If the selected option has a value,
      // it will be written to the document
      // otherwise the field will be cleared
      onChange(PatchEvent.from(value ? set(value) : unset()));
    },
    [onChange]
  )

  useEffect(() => {
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setProducts(data);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <Card tone="default" {...cardProps}>
        <Spinner />
      </Card>
    );
  }

  if (error) {
    return (
      <Card tone="critical" {...cardProps}>
        <Text>{error.message}</Text>
      </Card>
    );
  }

  return (
    <Select onChange={handleChange}>
      <option value={value}>
        --Select a product
      </option>
      {products.map(product => (
        <option key={product.id} value={product.id}>
          {product.title} (${product.price})
        </option>
      ))}
    </Select>
  );
}
