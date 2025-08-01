import { Cart as CartPage } from "../component"

import { useState } from "react"
function Cart() {
    const [showCartModal, setShowCartModal] = useState(false);
  return (
    <div>
      <CartPage 
        isOpen={showCartModal}
        onClose={() => setShowCartModal(false)}/>
    </div>
  )
}

export default Cart
