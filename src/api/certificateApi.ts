import request from '@/utils/request';
const baseUrl = '/api/honor'

// 表格数据返回
export interface recordCertificateDataType {
    id: string;
    certificateName: string; // 证书名称
    certificateNumber: string; // 证书编号
    winner: string; // 颁布对象
    certificatePhoto: string; // 证书图片
    isPublish: string; // 是否发布

    createUser: string; // 创建者
    createTime: string; // 创建时间
    alterUser: string; // 修改者
    alterTime: string; // 修改时间
    publishUser: string; // 发布者
    publishTime: string; // 发布时间
}

// 上下线api所需参数
export interface publishDataType {
    id: string; // 证书id
    username: string; // api使用者
    isPublish: number; // 发布 0/1
}

// 删除api所需参数
export interface deletedDataType {
    id: string; // 证书id
    username: string; // api使用者
    note: string; // 发布 0/1
}

export interface apiType {
    code: number;
    data: any;
    msg: string;
}

/** 获取全部证书数据api */
export const getCertificateDataApi = (key: string) => {
    return request.get(baseUrl + '/webGet?key=' + key )
}

/** 获取全部证书数据api */
export const publishCertificateDataApi = (publishData: publishDataType) => {
    return request.post(baseUrl + '/publish', publishData)
}

/** 删除证书数据api */
export const deletedCertificateDataApi = (deletedData: deletedDataType) => {
    return request.post(baseUrl + '/delete', deletedData)
}
