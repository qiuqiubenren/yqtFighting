import { getRequest, postRequest, putRequest, postBodyRequest, getNoAuthRequest, postNoAuthRequest } from '@/libs/axios';

// 分页获取数据
export const getDoctorList = (params) => {
    return getRequest('/doctor/getByPage', params)
}
// 添加
export const addDoctor = (params) => {
    return postRequest('/doctor/insertOrUpdate', params)
}
// 编辑
export const editDoctor = (params) => {
    return postRequest('/doctor/insertOrUpdate', params)
}
// 删除
export const deleteDoctor = (params) => {
    return postRequest('/doctor/delByIds', params)
}
// 查询所有医院
export const getAllHospitalSubjectList = (params) => {
    return getRequest('/hospitalSubject/getAll', params)
}
// 放号
export const addNumber = (params) => {
    return postRequest('/doctorScheduling/addNumber', params)
}
// 查询陪诊员号源
export const getDoctorSchedulingList = (params) => {
    return getRequest('/doctorScheduling/getByPage', params)
}
// 查询我的陪诊
export const getMyOrderList = (params) => {
    return postRequest('/hospitalOrder/getMyOrderList', params)
}
// 陪诊付款
export const payMoney = (params) => {
    return postRequest('/hospitalOrder/payMoney', params)
}
// 取消陪诊
export const noneOrder = (params) => {
    return postRequest('/hospitalOrder/noneOrder', params)
}