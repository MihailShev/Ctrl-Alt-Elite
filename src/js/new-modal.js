(() => {
  const refs = {
    openModalBtn: document.querySelectorAll('[data-modal-open]'),
    closeModalBtn: document.querySelector('.close-btn'),
    modal: document.querySelector('.main-baslet-wrapper'),
    formContainer: document.querySelector('.wrapper-form-container-new-modal'),
    buyBtn: document.querySelector('.buy-btn'),
    products: document.querySelectorAll('.product'),
    totalPrice: document.querySelector('.all-price'),
  };

  refs.openModalBtn.forEach(button => {
    button.addEventListener('click', toggleModal);
  });

  refs.closeModalBtn.addEventListener('click', toggleModal);

  refs.buyBtn.addEventListener('click', function () {
    refs.formContainer.classList.toggle('hidden');
  });

  function toggleModal() {
    refs.modal.classList.toggle('is-open');
  }

  refs.products.forEach(product => {
    const minusBtn = product.querySelector('.prise-btn:nth-child(1)');
    const plusBtn = product.querySelector('.prise-btn:nth-child(3)');
    const massaSpan = product.querySelector('.massa');
    const pricePerKg = parseFloat(
      product.querySelector('.prise-prod').textContent
    );

    minusBtn.addEventListener('click', () => {
      let weight = parseFloat(massaSpan.textContent);
      if (weight > 0) {
        weight = Math.max(0, weight - 0.1);
        massaSpan.textContent = weight.toFixed(1);
        updateTotal();
      }
    });

    plusBtn.addEventListener('click', () => {
      let weight = parseFloat(massaSpan.textContent);
      weight = weight + 0.1;
      massaSpan.textContent = weight.toFixed(1);
      updateTotal();
    });
  });

  function updateTotal() {
    let total = 0;
    refs.products.forEach(product => {
      const weight = parseFloat(product.querySelector('.massa').textContent);
      const pricePerKg = parseFloat(
        product.querySelector('.prise-prod').textContent
      );
      total += weight * pricePerKg;
    });
    refs.totalPrice.textContent = total.toFixed(2);
  }
})();
