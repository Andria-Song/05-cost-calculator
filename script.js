  // Default base price for any pizza (medium)
  const basePrice = 10;
  // Price for each topping
  const toppingPrice = 2;
  // Extra fee for delivery
  const deliveryFee = 5;

  // Calculates the total based on base price, toppings, and delivery
  function calculateTotalCost (base, toppingCount, isDelivery) {
    let total = base + (toppingCount * toppingPrice);

    // Add the delivery fee if selected
    if (isDelivery) {
      total = total + deliveryFee;
    }

    return total;
  }

  // Get the form and total display elements
  const form = document.getElementById("pizza-order-form");
  const totalElement = document.getElementById("total");
  const deliveryCheckbox = document.getElementById("delivery");
  const sizeSelect = document.getElementById("size");

  // Listen for the form submit to calculate the total
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    // Find all checked toppings
    const checkedToppings = document.querySelectorAll("input[name='topping']:checked");
    const toppingCount = checkedToppings.length;
    const isDelivery = deliveryCheckbox.checked;
    const selectedSizePrice = Number(sizeSelect.value) || basePrice;

    // Calculate and show the total
    const total = calculateTotalCost(selectedSizePrice, toppingCount, isDelivery);
    totalElement.textContent = `Total: $${total}`;
  });

  