import React from 'react';
import { MdAddShoppingCart } from 'react-icons/md';

import { ProductList } from './styles';

export default function Home() {
  return (
    <ProductList>
      <li>
        <img
          src="https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis2.jpg"
          alt="Tênis"
        />
        <strong>Tênis muito bonito</strong>
        <span>$70</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff " /> 3
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>

      <li>
        <img
          src="https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis2.jpg"
          alt="Tênis"
        />
        <strong>Tênis muito bonito</strong>
        <span>$70</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff " /> 3
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis2.jpg"
          alt="Tênis"
        />
        <strong>Tênis muito bonito</strong>
        <span>$70</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff " /> 3
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis2.jpg"
          alt="Tênis"
        />
        <strong>Tênis muito bonito</strong>
        <span>$70</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff " /> 3
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis2.jpg"
          alt="Tênis"
        />
        <strong>Tênis muito bonito</strong>
        <span>$70</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff " /> 3
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis2.jpg"
          alt="Tênis"
        />
        <strong>Tênis muito bonito</strong>
        <span>$70</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff " /> 3
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
    </ProductList>
  );
}
