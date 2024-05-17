export default {
    CTP_PAYMENT_INTERACTION_CUSTOM_TYPE_KEY: 'paydock-integration-interaction-payment-type',
    CTP_PAYMENT_CUSTOM_TYPE_KEY: 'paydock-integration-web-components-payment-type',
    CTP_INTERACTION_TYPE_MAKE_PAYMENT: 'makePayment',
    CTP_INTERACTION_TYPE_GET_VAULT_TOKEN: 'getVaultToken',
    CTP_CUSTOM_FIELD_GET_VAULT_TOKEN_RESPONSE: 'getVaultTokenResponse',
    CTP_CUSTOM_FIELD_MAKE_PRE_CHARGE_RESPONSE: 'makePreChargeResponse',
    CTP_CUSTOM_FIELD_GET_STANDALONE_3DS_TOKEN_RESPONSE: 'getStandalone3dsTokenResponse',
    CTP_CUSTOM_FIELD_PAYDOCK_PAYMENT_STATUS: 'PaydockPaymentStatus',
    CTP_CUSTOM_FIELD_REFUNDED_AMOUNT: 'RefundedAmount',
    CTP_CUSTOM_FIELD_PAYDOCK_TRANSACTION_ID: 'PaydockTransactionId',
    CTP_CUSTOM_FIELD_PAYDOCK_PAYMENT_TYPE: 'PaydockPaymentType',
    CTP_INTERACTION_TYPE_GET_PAYMENT_METHODS: 'getPaymentMethods',
    CTP_CUSTOM_FIELD_GET_PAYMENT_METHODS_REQUEST: 'getPaymentMethodsRequest',
    CTP_CUSTOM_FIELD_GET_PAYMENT_METHODS_RESPONSE: 'getPaymentMethodsResponse',
    CTP_CUSTOM_FIELD_COMMERCE_TOOLS_USER: 'CommerceToolsUserId',
    CTP_CUSTOM_GET_UPDATE_STATUS: 'updatePaymentStatus',
    CTP_CUSTOM_FIELD_ADDITIONAL_INFORMATION: 'AdditionalInformation',
    CTP_APP_INFO: {
        libraryName: "commercetools-paydock",
        libraryVersion: "1.0.0",
        contactUrl: "https://paydock.com/",
        contactEmail: "accounts@paydock.com",
    },
    CTP_INTERACTION_PAYMENT_EXTENSION_REQUEST: 'PaymentExtensionRequest',
    CTP_INTERACTION_PAYMENT_EXTENSION_RESPONSE: 'PaymentExtensionResponse',
    STATUS_TYPES: {
        AUTHORIZE: "paydock-authorize",
        PAID: "paydock-paid",
        CANCELLED: "paydock-cancelled",
        REFUNDED: "paydock-refunded",
        P_REFUND: "paydock-p-refund",
        FAILED: "paydock-failed",
        REQUESTED: "paydock-requested",
        RECIVED: "paydock-recived",
        PENDING: "paydock-pending"
    }
}
