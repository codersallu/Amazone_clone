import React from "react";
import "./Home.css";
import Product from "./Product";

const Home = () => {
  return (
    <div className="home">
      <img
        className="home__image"
        src="http://store-images.s-microsoft.com/image/apps.16285.14618985536919905.552c0017-6644-49a8-8467-8f7b34ce0428.30ad6b05-16d9-4d5e-a242-43107708a16a"
        alt=""
      />
      <div className="home__row">
        <Product
          id="121314"
          title="The Lean Startup: How Contact innovation"
          price={11.96}
          rating={4}
          image="https://cdn1.desidime.com/topics/photos/1479874/original/61xkkNY5jGL._SL1500_.jpg?1663614697"
        />

        <Product
          id="121314"
          title="The Lean Startup: How Contact innovation"
          price={15}
          rating={4}
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHmr5q_8cjUcVW8HOTiLLh_K4_C0_ynIBbaA&usqp=CAU"
        />

        <Product
          id="121314"
          title="The Lean Startup: How Contact innovation"
          price={45}
          rating={4}
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsVUx9QvlEi_jfvD3q0AAY6m1X2KE0XS997w&usqp=CAU"
        />

        <Product
          id="121314"
          title="The Lean Startup: How Contact innovation"
          price={11.96}
          rating={4}
          image="https://cdn1.desidime.com/topics/photos/1479874/original/61xkkNY5jGL._SL1500_.jpg?1663614697"
        />
      </div>
      <div className="home__row">
        <Product
          id="121314"
          title="The Lean Startup: How Contact innovation"
          price={11.96}
          rating={4}
          image="https://cdn1.desidime.com/topics/photos/1479874/original/61xkkNY5jGL._SL1500_.jpg?1663614697"
        />

        <Product
          id="121314"
          title="The Lean Startup: How Contact innovation"
          price={15}
          rating={4}
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHmr5q_8cjUcVW8HOTiLLh_K4_C0_ynIBbaA&usqp=CAU"
        />

        <Product
          id="121314"
          title="The Lean Startup: How Contact innovation"
          price={45}
          rating={4}
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsVUx9QvlEi_jfvD3q0AAY6m1X2KE0XS997w&usqp=CAU"
        />
      </div>
      <div className="home__row">
        <Product
          id="121314"
          title="The Lean Startup: How Contact innovation"
          price={11.96}
          rating={4}
          image="https://cdn1.desidime.com/topics/photos/1479874/original/61xkkNY5jGL._SL1500_.jpg?1663614697"
        />

        <Product
          id="121314"
          title="The Lean Startup: How Contact innovation"
          price={45}
          rating={4}
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsVUx9QvlEi_jfvD3q0AAY6m1X2KE0XS997w&usqp=CAU"
        />
      </div>
    </div>
  );
};

export default Home;
