fetch("./products.json")
  .then((response) => response.json())
  .then((data) => {
    const productsById = data.products.reduce((indexedById, product) => {
      indexedById[product.id] = product;
      return indexedById;
    }, {});
    const productsByCategory = data.products.reduce(
      (indexedByCategory, product) => {
        if (!Array.isArray(indexedByCategory[product.category])) {
          indexedByCategory[product.category] = [];
        }
        indexedByCategory[product.category].push(product);
        return indexedByCategory;
      },
      {}
    );
    const categoriesList = Object.keys(productsByCategory);

    const categoriesContainer = document.querySelector("#categories");
    const productsContainer = document.querySelector("#products");
    const productItemContainer = document.querySelector("#product-item");

    categoriesContainer.addEventListener("click", handleCategoryClick);
    productsContainer.addEventListener("click", handleProductClick);
    productItemContainer.addEventListener("click", handleBuyProductClick);

    renderCategories();
    renderProducts();
    renderProductItem();

    function renderCategories() {
      categoriesContainer.innerHTML = "";

      categoriesList.forEach((category) => {
        const link = document.createElement("button");

        link.setAttribute("id", category);
        link.setAttribute("class", "btn btn-outline-info py-3 my-2");
        link.textContent = category;

        categoriesContainer.appendChild(link);
      });
    }

    function renderProducts() {
      const selectedCategory = categoriesContainer.querySelector(".active");
      const selectedProduct = productsContainer.querySelector(".active");
      productsContainer.innerHTML = "";

      if (selectedCategory && productsByCategory[selectedCategory.id]) {
        productsByCategory[selectedCategory.id].forEach((product) => {
          const productCard = document.createElement("div");
          productCard.setAttribute(
            "class",
            "card col-6 m-2 bg-secondary text-light"
          );
          productCard.style.width = "47%";

          productCard.innerHTML = `
            <div class="card-body">
              <h5 class="card-title">${product.title}</h5>
              <p class="card-text">${product.price} UAH</p>
              <button id="${product.id}" class="btn btn-outline-info">See more</button>
            </div>
          `;

          if (product.id === selectedProduct?.id) {
            productCard.classList.add("active");
          }

          productsContainer.appendChild(productCard);
        });
      }
    }

    function renderProductItem() {
      const selectedProduct = productsContainer.querySelector(".active");
      if (selectedProduct && productsById[selectedProduct.id]) {
        const product = productsById[selectedProduct.id];

        productItemContainer.innerHTML = `
          <div class="card bg-secondary text-light" style="width: 100%">
            <img src="${product.thumbnail}" class="card-img-top" alt="${product.title}">
            <div class="card-body">
              <h5 class="card-title">${product.title}</h5>
              <p class="card-text"></p>
              <p class="card-text">${product.description}</p>
            </div>
            <ul class="list-group  text-light">
              <li class="list-group-item">${product.brand}</li>
              <li class="list-group-item">${product.rating}⭐</li>
              <li class="list-group-item"><strong>${product.price} UAH</strong></li>
              <li class="list-group-item">Have a <strong>${product.discountPercentage}%</strong> discount only today!</li>
            </ul>
            <div class="card-body">
              <button id="${product.id}" class="btn btn-info">Buy now</button>
            </div>
          </div>
        `;
      }
    }

    function handleCategoryClick(event) {
      const selectedCategory = categoriesContainer.querySelector(".active");

      if (event.target.hasAttribute("id")) {
        const candidateCategory = event.target.getAttribute("id");

        if (candidateCategory === selectedCategory?.id) {
          return;
        }

        selectedCategory?.classList.remove("active");

        document.querySelector(`#${candidateCategory}`).classList.add("active");

        renderProducts();
        renderProductItem();
      }
    }

    dkfdkf;

    function handleProductClick(event) {
      const selectedProduct = productsContainer.querySelector(".active");

      if (event.target.hasAttribute("id")) {
        const candidateProduct = event.target.getAttribute("id");

        if (candidateProduct === selectedProduct?.id) {
          return;
        }

        selectedProduct?.classList.remove("active");

        document
          .querySelector(`[id="${candidateProduct}"]`)
          .classList.add("active");

        renderProductItem();
      }
    }

    function handleBuyProductClick(event) {
      if (event.target.hasAttribute("id")) {
        const productId = event.target.getAttribute("id");
        const product = productsById[productId];

        alert(`You bought ${product.title} from the ${product.brand} brand.
        Thank you for your purchase 👐`);
      }
    }
  })
  .catch((error) => console.log("Error fetching data", error));
