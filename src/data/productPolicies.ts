export interface ProductPolicyConfig {
  shipping: {
    customerPays: boolean;
    freeDelivery: boolean;
    displayText: string;
  };
  payment: {
    codAvailable: boolean;
    displayText: string;
  };
  returns: {
    customerMistakeReturn: boolean;
    wrongProductByCompany: boolean;
    verifiedDefect: boolean;
    deliveryDamage: boolean;
    verificationRequired: boolean;
    displayText: string;
  };
}

export const productPolicies: ProductPolicyConfig = {
  shipping: {
    customerPays: true,
    freeDelivery: false,
    displayText:
      "Shipping charges are additional and payable by the customer. Free delivery is not available."
  },

  payment: {
    codAvailable: false,
    displayText:
      "Cash on Delivery (COD) is not available."
  },

  returns: {
    customerMistakeReturn: false,
    wrongProductByCompany: true,
    verifiedDefect: true,
    deliveryDamage: true,
    verificationRequired: true,
    displayText:
      "Returns or replacements are considered for verified fulfilment errors, product defects, or delivery damage. Returns are not accepted for customer ordering mistakes, incorrect product/specification selection, change of mind, or products no longer required. All requests are subject to verification."
  }
};
