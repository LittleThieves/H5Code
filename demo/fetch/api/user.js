import fetch from '../index' // 导入封装请求库
import {
  API_GetMyCard,
  API_GETOPENTOKEN,
  API_LOGIN,
  API_GetAuth,
  API_GetCheckCode,
  API_BindMobile,
  API_GetScene,
  API_GetMemberInfo,
  API_GetIndexBoothList,
  API_PaymentRequest,
  API_GetCardState,
  API_Icrealcardadjust,
  API_UnAuthorization,
  API_Getconsumecode,
  API_Checkconsumecode,
  API_Icqrcodeverify,
  API_MemberUnicregist,
  API_GetICRecord,
  API_GetTicticket,
  API_MemberIcselfregist,
  API_MemberBindcard,
  API_NewsDetail,
  API_GetUnInvoiceDetailList,
  API_GetBootList,
  API_PreviewInvoice,
  API_GetNewById,
  API_GetMyInvoice,
  API_GetInvoiceDetail,
  API_CreateInvoice,
  API_ShopQrcodequery,
  API_GetSytemDateTimeTicks
} from '../../constants/api'


/**
 * 获取卡信息
 * @param {Object} params
 */
export const GetMyCard = params => {
  console.log("params", params)
  return fetch({
    ...params,
    url: API_GetMyCard,
    method: 'POST',
    header: {}
  })
}


/**
 * 请求 openToken
 * @param {Object} params
 */
export const openToken = params => {
  return fetch({
    ...params,
    url: API_GETOPENTOKEN,
    method: 'POST',
    header: {}
  })
}


/**
 * 获取 sessionId
 * @param {Object} params
 */
export const GetSessionId = params => {
  return fetch({
    ...params,
    url: API_LOGIN,
    method: 'POST',
    header: {}
  })
}


/**
 * 授权用户信息
 * @param {Object} params
 */
export const GetAuth = params => {
  return fetch({
    ...params,
    url: API_GetAuth,
    method: 'POST',
    header: {}
  })
}

/**
 * 绑定手机号
 * @param {Object} params
 */
export const HandleBindMobile = params => {
  return fetch({
    ...params,
    url: API_BindMobile,
    method: 'POST',
    header: {}
  })
}


/**
 * 获取验证码
 * @param {Object} params
 */
export const GetCheckCode = params => {
  return fetch({
    ...params,
    url: API_GetCheckCode,
    method: 'POST',
    header: {}
  })
}


/**
 * Gets the scene.
 * @param {Object} params
 */
export const GetScene = params => {
  return fetch({
    ...params,
    url: API_GetScene,
    method: 'POST',
    header: {}
  })
}


/**
 * 获取用户信息
 * @param {Object} params
 */
export const GetMemberInfo = params => {
  return fetch({
    ...params,
    url: API_GetMemberInfo,
    method: 'POST',
    header: {}
  })
}


/**
 * 获取主页轮播信息
 * @param {Object} params
 */
export const GetIndexBoothList = params => {
  return fetch({
    ...params,
    url: API_GetIndexBoothList,
    method: 'POST',
    header: {}
  })
}


/**
 * 会员卡充值
 * @param {Object} params
 */
export const PaymentRequest = params => {
  return fetch({
    ...params,
    url: API_PaymentRequest,
    method: 'POST',
    header: {
      "actionName": 'casa.v1.wxapp.paymentRequest',
    }
  })
}


/**
 * 礼品卡充值
 * @param {Object} params
 */
export const Icqrcodeverify = params => {
  return fetch({
    ...params,
    url: API_Icqrcodeverify,
    method: 'POST',
    header: {
      "actionName": 'casa.v1.wxapp.icqrcodeverify',
    }
  })
}



/**
 * 是否有实体会员卡
 * @param {Object} params
 */
export const GetCardState = params => {
  return fetch({
    ...params,
    url: API_GetCardState,
    method: 'POST',
    header: {
      "actionName": 'casa.v2.wxapp.getCardState',
    }
  })
}


/**
 * 会员卡开关
 * @param {Object} params
 */
export const Icrealcardadjust = params => {
  return fetch({
    ...params,
    url: API_Icrealcardadjust,
    method: 'POST',
    header: {
      "actionName": 'casa.v2.wxapp.icrealcardadjust',
    }
  })
}

/**
 * 使用其他账号登录
 * @param {Object} params
 */
export const UnAuthorization = params => {
  return fetch({
    ...params,
    url: API_UnAuthorization,
    method: 'POST',
    header: {
      "actionName": 'casa.v2.wxapp.UnAuthorization',
    }
  })
}

/**
 * 获取consumecode
 * @param {Object} params
 */
export const Getconsumecode = params => {
  return fetch({
    ...params,
    url: API_Getconsumecode,
    method: 'POST',
    header: {
      "actionName": 'casa.v1.wxapp.getconsumecode',
    }
  })
}


/**
 * 检测最新consumecode
 * @param {Object} params
 */
export const Checkconsumecode = params => {
  return fetch({
    ...params,
    url: API_Checkconsumecode,
    method: 'POST',
    header: {
      "actionName": 'casa.v1.wxapp.checkconsumecode',
    }
  })
}

/**
 * 解绑手机号
 * @param {Object} params
 */
export const MemberUnicregist = params => {
  return fetch({
    ...params,
    url: API_MemberUnicregist,
    method: 'POST',
    header: {
      "actionName": 'casa.v1.wxapp.memberUnicregist',
    }
  })
}


/**
 * 消费记录
 * @param {Object} params
 */
export const GetICRecord = params => {
  return fetch({
    ...params,
    url: API_GetICRecord,
    method: 'POST',
    header: {
      "actionName": 'casa.v2.wxapp.getICRecord',
    }
  })
}


/**
 * 优惠券
 * @param {Object} params
 */
export const GetTicticket = params => {
  return fetch({
    ...params,
    url: API_GetTicticket,
    method: 'POST',
    header: {
      "actionName": 'casa.v2.wxapp.getICRecord',
    }
  })
}

/**
 * 一键申请新卡
 * @param {Object} params
 */
export const MemberIcselfregist = params => {
  return fetch({
    ...params,
    url: API_MemberIcselfregist,
    method: 'POST',
    header: {
      "actionName": 'casa.v1.wxapp.memberIcselfregist',
    }
  })
}

/**
 * 绑定会员卡
 * @param {Object} params
 */
export const MemberBindcard = params => {
  return fetch({
    ...params,
    url: API_MemberBindcard,
    method: 'POST',
    header: {
      "actionName": 'casa.v1.wxapp.memberBindcard',
    }
  })
}


/**
 * 图文详情
 * @param {Object} params
 */
export const NewsDetail = params => {
  return fetch({
    ...params,
    url: API_NewsDetail,
    method: 'POST',
    header: {}
  })
}


/**
 * 待开票
 * @param {Object} params
 */
export const GetUnInvoiceDetailList = params => {
  return fetch({
    ...params,
    url: API_GetUnInvoiceDetailList,
    method: 'POST',
    header: {
      "actionName": 'casa.v2.Invoice.GetUnInvoiceDetailList',
    }
  })
}


/**
 * 获取展位数据
 * @param {Object} params
 */
export const GetBootList = params => {
  return fetch({
    ...params,
    url: API_GetBootList,
    method: 'POST',
    header: {}
  })
}

/**
 * Previews the invoice.
 * @param {Object} params
 */
export const PreviewInvoice = params => {
  return fetch({
    ...params,
    url: API_PreviewInvoice,
    method: 'POST',
    header: {
      "actionName": 'casa.v2.Invoice.PreviewInvoice',
    }
  })
}

/**
 * Gets the new by identifier.
 * @param {Object} params
 */
export const GetNewById = params => {
  return fetch({
    ...params,
    url: API_GetNewById,
    method: 'POST',
    header: {}
  })
}


/**
 * Gets my invoice.
 * @param {Object} params
 */
export const GetMyInvoice = params => {
  return fetch({
    ...params,
    url: API_GetMyInvoice,
    method: 'POST',
    header: {
      "actionName": 'casa.v2.Invoice.GetMyInvoice',
    }
  })
}


/**
 * Gets my invoice.
 * @param {Object} params
 */
export const GetInvoiceDetail = params => {
  return fetch({
    ...params,
    url: API_GetInvoiceDetail,
    method: 'POST',
    header: {
      "actionName": 'casa.v2.Invoice.GetInvoiceDetail',
    }
  })
}


/**
 * Gets my invoice.
 * @param {Object} params
 */
export const CreateInvoice = params => {
  return fetch({
    ...params,
    url: API_CreateInvoice,
    method: 'POST',
    header: {
      "actionName": 'casa.v2.Invoice.CreateInvoice',
    }
  })
}

/**
 * 扫门店二维码
 * @param {Object} params
 */
export const ShopQrcodequery = params => {
  return fetch({
    ...params,
    url: API_ShopQrcodequery,
    method: 'POST',
    header: {
      "actionName": 'casa.v2.store.shopQrcodequery',
    }
  })
}


/**
 * 获取服务器时间
 * @param {Object} params
 */
export const GetSytemDateTimeTicks = params => {
  return fetch({
    ...params,
    url: API_GetSytemDateTimeTicks,
    method: 'POST',
    header: { }
  })
}
