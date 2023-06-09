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

        document.querySelector("#orderForm").style.display = "block";
        document.querySelector("#mainBody").style.display = "none";
        document.querySelector("#purchaseConfirmation").style.display = "none";

        renderForm(productId);
        renderPurchaseConfirmation();
      }
    }

    //Form

    const mainBody = document.querySelector("#mainBody");
    const orderForm = document.forms.orderFormElement;
    const quantityProducts = document.querySelector("#productsQuantity");

    orderForm.addEventListener("input", handleInputInOrder);
    quantityProducts.addEventListener("input", handlePriceChanging);
    orderForm.addEventListener("submit", handleSubmitOrder);

    const isRequired = (value) => (value === "" ? false : true);
    const isBetween = (length, min, max) =>
      length < min || length > max ? false : true;
    const isNumber = (value) => {
      return /^\d+(\.\d+)?$/.test(value);
    };

    const showRequirement = (input, message) => {
      const formField = input.parentElement;

      const requirementText = formField.querySelector("#requirementMessage");

      input.classList.remove("is-valid");
      input.classList.add("is-invalid");

      requirementText.textContent = message;
      requirementText.style.color = "red";
    };

    const showSuccess = (input) => {
      const formField = input.parentElement;
      const requirementText = formField.querySelector("#requirementMessage");

      input.classList.remove("is-invalid");
      input.classList.add("is-valid");

      requirementText.textContent = "";
    };

    const checkNameInput = () => {
      let isValid = false;
      const min = 10;
      const max = 30;
      const buyerName = document.querySelector("#buyerName").value.trim();

      if (!isRequired(buyerName)) {
        showRequirement(buyerName, "This field is required");
      } else if (!isBetween(buyerName.length, min, max)) {
        showRequirement(buyerName, "Your text must be at least 10 symbols");
      } else {
        isValid = true;
        showSuccess(buyerName);
      }

      return isValid;
    };

    const checkPostInput = () => {
      let isValid = false;
      const postInput = document.querySelector("#postOffice").value.trim();

      if (!isRequired(postInput)) {
        showRequirement(postInput, "This field is required");
      } else if (!isNumber(postInput)) {
        showRequirement(postInput, "This field allows only numbers");
      } else {
        isValid = true;
        showSuccess(postInput);
      }
      return isValid;
    };

    function renderForm(productId) {
      const product = productsById[productId];
      const formTitle = document.querySelector("#formTitle");
      const formPrice = document.querySelector("#productPrice");

      formTitle.innerHTML = `<h2>Registration of your order</h2>
          ${product.title} from ${product.brand}
          `;
      formPrice.innerText = `${product.price} UAH`;
    }

    function renderPurchaseConfirmation() {
      const quantityProducts = document.querySelector("#productsQuantity");
      const buyerName = document.querySelector("#buyerName");
      const city = document.querySelector("#city");
      const postInput = document.querySelector("#postOffice");
      const priceElement = document.querySelector("#productPrice");
      const orderDetailsContainer = document.querySelector(
        "#purchaseConfirmation"
      );
      const selectedProduct = productsContainer.querySelector(".active");
      if (selectedProduct && productsById[selectedProduct.id]) {
        const product = productsById[selectedProduct.id];

        orderDetailsContainer.innerHTML = `
        <div class="card" style="width: 18rem;">
          <img src="${product.thumbnail}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${product.title}</h5>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Buyer name: ${buyerName.value.trim()}</li>
            <li class="list-group-item">Delivery city: ${city.value.trim()}</li>
            <li class="list-group-item">Price: ${priceElement.textContent}</li>
            <li class="list-group-item">Post office: №${postInput.value.trim()}</li>
            <li class="list-group-item">Quantity of products ordered: ${quantityProducts.value.trim()}</li>
          </ul>
          <div class="card-body">
            <button id="confirmOrderButton" class="btn btn-info" type="button">Confirmed</button>
          </div>
        </div>
      `;
      }

      const confirmOrderBtn = document.querySelector("#confirmOrderButton");
      confirmOrderBtn.addEventListener("click", () => {
        product.orderPrice = product.price * quantityProducts.value;
        product.city = city.value;
        product.postOffice = postInput.value;
        product.quantity = quantityProducts.value;
        listOfOrders.push(product);
        mainBody.lastElementChild.remove();
        localStorage.setItem("listOfOrders", JSON.stringify(listOfOrders));
        let newListOfOrderes = localStorage.getItem("listOfOrders");
        renderCategories();
      });
    }

    function handleInputInOrder(event) {
      switch (event.target.id) {
        case "buyerName":
          checkNameInput();
          break;
        case "postOffice":
          checkPostInput();
          break;
      }
    }

    function handlePriceChanging(event) {
      event.preventDefault();

      const quantityProducts = document.querySelector("#productsQuantity");
      const priceElement = document.querySelector("#productPrice");
      const selectedCategory = categoriesContainer.querySelector(".active");

      const quantity = parseInt(quantityProducts.value.trim());
      const decrementAmount = 10;

      if (selectedCategory && productsByCategory[selectedCategory.id]) {
        productsByCategory[selectedCategory.id].forEach((product) => {
          if (!isNaN(quantity) && quantity >= 1) {
            const totalPrice =
              product.price * quantity -
              Math.floor(quantity / decrementAmount) * decrementAmount;
            priceElement.textContent = `${totalPrice} UAH`;
          } else {
            priceElement.textContent = `${product.price} UAH`;
          }
        });
      }
    }

    function handleSubmitOrder(event) {
      event.preventDefault();

      const isNameValid = checkNameInput();
      const isPostValid = checkPostInput();

      if (!isNameValid || !isPostValid) {
        return {
          isNameValid,
          isPostValid,
        };
      } else if (isNameValid && isPostValid) {
        document.querySelector("#orderForm").style.display = "none";
        document.querySelector("#purchaseConfirmation").style.display = "block";

        renderPurchaseConfirmation();
      }
    }

    //LocalStorage

    // Check if "listOfOrders" exists in localStorage
    let listOfOrders = null;
    const ordersList = localStorage.getItem("listOfOrders");
    if (ordersList) {
      listOfOrders = JSON.parse(listOfOrders);
    } else {
      listOfOrders = [];
    }

    const getRealDate = () => {
      const date = new Date();

      let day = date.getDate();
      day = day < 10 ? "0" + day : day;

      let mon = date.getMonth();
      let month = mon + 1;
      month = month < 10 ? "0" + month : month;

      const year = date.getFullYear();
      const hour = date.getHours();
      let minutes = date.getMinutes();
      minutes = minutes < 10 ? "0" + minutes : minutes;

      return `${day}/${month}/${year} ${hour}:${min}`;
    };

    const myOrdersButton = document.querySelector("#myOrdersButton");
    const closeOrderInfoBtn = document.querySelector("#closeOrderBtn");
    const deleteOrderBtn = document.querySelector("#deleteOrderBtn");
    const moreInfoBtn = orderItem.querySelector(`#moreInfoBtn`);

    moreInfoBtn[index].addEventListener("click", (event) => {
      handleMoreInfoClick(event, index);
    });

    myOrdersButton.addEventListener("click", handleMyOrdersClick);
    closeOrderInfoBtn.addEventListener("click", handleCloseOrderClick);
    deleteOrderBtn.addEventListener("click", handleDeleteOrderClick);

    function renderOrdersContainer() {
      cartButton.innerHTML = "";
      mainContainer.innerHTML = "";

      const returnToMainPage = document.createElement("div");

      returnToMainPage.className =
        "d-flex justify-content-center align-items-center";
      returnToMainPage.innerHTML = `
    <a class="btn btn-primary goHome" role="button" aria-disabled="true">Return to shopping</a>
  `;

      returnToMainPage.addEventListener("click", () => {
        window.location.reload();
      });

      mainBody.appendChild(returnToMainPage);

      const ordersParent = document.createElement("ul");
      ordersParent.className = "list-group";

      mainBody.append(ordersParent);

      listOfOrders.forEach((product, ordersParent) => {
        renderOrderCartItem(product, index);

        const moreInfoBtns = document.querySelector("#moreInfoBtn");
        moreInfoBtns[index].addEventListener("click", (event) => {
          handleMoreInfoClick(event, index);
        });
      });
    }

    function renderOrderCartItem(product, parentList) {
      const orderItem = document.createElement("li");
      ordersList.className = "list-group-item orderCard";

      orderItem.innerHTML = `
            Your order: Ціна - ${product.priceOfOrder}
            <p>Price: ${product.priceOfOrder}</p>
            <p>Order date: ${getRealDate()}</p>
            <button id="moreInfoBtn${index}" class="btn btn-outline-secondary moreinfo">More info</button>
          `;

      parentList.appendChild(orderItem);
    }

    function renderOrderByIndex(index) {
      const cartContainer = document.createElement("div");

      cartContainer.className =
        "d-flex justify-content-center align-items-center flex-column order-card";

      cartContainer.innerHTML = `
        <div class="card" style="width: 18rem;">
        <img src="${listOfOrders[index].thumbnail}}" class="card-img-top" alt="${listOfOrders[index].title}">
        <div class="card-body">
          <h5 class="card-title">${listOfOrders[index].title}</h5>
          <p class="card-text">${listOfOrders[index].priceElement.textContent}</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">City: ${listOfOrders[index].city}</li>
          <li class="list-group-item">PostInput: ${listOfOrders[index].postInput} A second item</li>
          <li class="list-group-item">Quantity: ${listOfOrders[index].quantityProducts}</li>
        </ul>
        <div class="card-body">
        <button id-"deleteOrderBtn" class="btn btn-danger">Delete order</button>
        <button id="closeOrderBtn" class="btn btn-info">Comeback to orders</button>
        </div>
      </div>
      `;

      mainBody.append(cartContainer);
    }

    function handleMyOrdersClick() {
      renderOrdersContainer();
    }

    function handleMoreInfoClick(event, index) {
      const moreInfoBtn = event.target;
      moreInfoBtn.closest(".list-group").remove();

      renderOrderByIndex(index);
      localStorage.setItem("deleteByIndex", JSON.stringify(index));
    }

    function handleCloseOrderClick(event, parentList) {
      const closeOrderBtn = event.target;
      cartLiParent.innerHTML = "";

      listOfOrders.forEach((product) => {
        renderOrderCartItem(product, parentList);
      });

      closeOrderBtn.closest(".order-card").remove();
      mainBody.append(parentList);
    }

    function handleDeleteOrderClick(event, index, parentList) {
      listOfOrders.splice(index, 1);
      localStorage.setItem("listOfOrders", JSON.stringify(listOfOrders));
      parentList.innerHTML = "";

      listOfOrders.forEach((product) => {
        renderCartLiInfo(product, parentList);
      });

      event.target.closest(".order-card").remove();
      mainBody.append(parentList);
    }
  })
  .catch((error) => console.log("Error fetching data", error));
