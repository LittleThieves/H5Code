export const baseUrl = 'https://api.casamiel.cn'
export const baseUrlGetData = 'https://api.casamiel.cn/NB/GetData'


// home
export const API_HOME = `${baseUrl}/xhr/index/index.json`
export const API_HOME_SEARCH_COUNT = `${baseUrl}/xhr/search/displayBar.json`
export const API_HOME_PIN = `${baseUrl}/pin/min/item/recommend.json`
export const API_GetAllStoresByStoreName = `${baseUrl}/api/v1/WaiMai/Store/GetAllStoresByStoreName`
export const API_GetStoreGetDetail = `${baseUrl}/api/v2/Store/GetDetail`
export const API_GetSytemDateTimeTicks = `${baseUrl}/api/SystemVersion/GetSytemDateTimeTicks`
export const API_GetScene = `${baseUrl}/api/v2/WxApp/GetScene`




// user
export const API_USER = `${baseUrl}`
export const API_USER_LOGIN = `${baseUrl}`
export const API_CHECK_LOGIN = `${baseUrl}`
export const API_LOGIN = `${baseUrl}/api/v2/WxApp/Login`
export const API_GETOPENTOKEN = `${baseUrl}/api/Open/GetNewOpenToken`
export const API_GetMyCard = `${baseUrl}/api/v2/Card/GetMyCard`
export const API_GetCheckCode = `${baseUrl}/api/v1/WxApp/GetCheckCode`
export const API_BindMobile = `${baseUrl}/api/v2/WxApp/BindMobile`
export const API_GetAuth = `${baseUrl}/api/v1/WxApp/auth`
export const API_GetMyCoupon = `${baseUrl}/api/v2/Order/GetMyCoupon`
export const API_GetTicticket = `${baseUrl}/api/v2/WxApp/GetTicticket`
export const API_GetMemberInfo = `${baseUrl}/api//v1/WxApp/GetMemberInfo`
export const API_GetCardState = `${baseUrlGetData}`
export const API_Icrealcardadjust = `${baseUrlGetData}`
export const API_UnAuthorization = `${baseUrlGetData}`
export const API_Getconsumecode = `${baseUrlGetData}`
export const API_Checkconsumecode = `${baseUrlGetData}`
export const API_MemberUnicregist = `${baseUrlGetData}`
export const API_GetICRecord = `${baseUrlGetData}`
export const API_MemberIcselfregist = `${baseUrlGetData}`
export const API_MemberBindcard = `${baseUrlGetData}`
export const API_ShopQrcodequery = `${baseUrlGetData}`




// invoice
export const API_GetUnInvoiceDetailList = `${baseUrlGetData}`
export const API_GetBootList = `${baseUrl}/api/v2/Mall/GetBootList`
export const API_PreviewInvoice = `${baseUrlGetData}`
export const API_GetNewById = `${baseUrl}/api/v2/Mall/GetNewById`
export const API_GetMyInvoice = `${baseUrlGetData}`
export const API_GetInvoiceDetail = `${baseUrlGetData}`
export const API_CreateInvoice = `${baseUrlGetData}`




// PaymentRequest
export const API_PaymentRequest = `${baseUrlGetData}`
export const API_Icqrcodeverify = `${baseUrlGetData}`



// order
export const API_MyOrders = `${baseUrl}/api/v1/WaiMai/Order/MyOrders`
export const API_CreateOrder = `${baseUrl}/api/v1/WaiMai/Order/CreateOrder`
export const API_MyOrdersGetDetail = `${baseUrl}/api/v1/WaiMai/Order/GetDetail`
export const API_PaymentOrder = `${baseUrl}/api/v1/WaiMai/Order/Payment`
export const API_CancelOrder = `${baseUrl}/api/v1/WaiMai/Order/CancelOrder`
export const API_CalculateFreightFee = `${baseUrl}/api/v1/WaiMai/Order/CalculateFreightFee`
export const API_GetFreightRule = `${baseUrl}/api/v1/WaiMai/Order/GetFreightRule`


// shop
export const API_GetIndexBoothList = `${baseUrl}/api/v3/Booth/GetList`
export const API_NewsDetail = `${baseUrl}/api/v3/News/GetDetail`
export const API_GetTagsList = `${baseUrl}/api/v1/WaiMai/Product/GetTagsList`
export const API_GetProductList = `${baseUrl}/api/v1/WaiMai/Product/GetProductList`
export const API_GetDetail = `${baseUrl}/api/v1/WaiMai/Product/GetDetail`
export const API_GetMyShoppingCart = `${baseUrl}/api/v1/WaiMai/ShoppingCart/GetMyShoppingCart`
export const API_AddMyShoppingCart = `${baseUrl}/api/v1/WaiMai/ShoppingCart/Add`
export const API_ClearShoppingCart = `${baseUrl}/api/v1/WaiMai/ShoppingCart/Clean`
export const API_QuantityShoppingCart = `${baseUrl}/api/v1/WaiMai/ShoppingCart/ChangeQuantity`
export const API_RemoveNoStockItem = `${baseUrl}/api/v1/WaiMai/ShoppingCart/RemoveNoStockItem`


// address
export const API_GetMyAddressList = `${baseUrl}/api/v1/WaiMai/ShippingAddress/GetMyAddressList`
export const API_MyAddressListDelete = `${baseUrl}/api/v1/WaiMai/ShippingAddress/Delete`
export const API_MyAddressListSave = `${baseUrl}/api/v1/WaiMai/ShippingAddress/Save`


