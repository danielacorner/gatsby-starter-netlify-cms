import React from 'react';
import PropTypes from 'prop-types';

const Pricing = ({ data }) => (
  <div className="columns">
    {data.map(price => (
      <div key={price.plan} className="column">
        <section className="section">
          <h4 className="has-text-centered has-text-weight-semibold">
            {price.plan}
          </h4>
          <h2 className="is-size-1 has-text-weight-bold has-text-primary has-text-centered">
            ${price.price}
          </h2>
          <p className="has-text-weight-semibold">{price.description}</p>
          <ul>
            {price.items.map(item => (
              <li key={item} className="is-size-5">
                {item}
              </li>
            ))}
          </ul>
        </section>
        <a
          className="snipcart-add-item"
          data-item-id={price.id}
          data-item-price={price.price}
          data-item-image={price.image}
          data-item-name={price.title}
          data-item-description={price.description}
          data-item-url={'http://hl-storefront.netlify.com' + price.path}
          href={`http://hl-storefront.netlify.com${price.path}`}
        >
          Buy
        </a>
      </div>
    ))}
  </div>
);

Pricing.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      plan: PropTypes.string,
      price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      description: PropTypes.string,
      items: PropTypes.array
    })
  )
};

export default Pricing;
