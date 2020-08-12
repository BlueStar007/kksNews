import axios from 'axios'

export async function GetChannel() {
    let res = await axios({
        method: 'get',
        url: 'http://ali-news.showapi.com/channelList',
        headers: {
            Authorization: 'APPCODE be7cd12bdd0d4e04ad42835ea0c57475'
        },

    })
    return res;
}

export async function GetNews(channelId, num) {
    let res = await axios({
        method: 'get',
        url: 'http://ali-news.showapi.com/newsList',
        headers: {
            Authorization: 'APPCODE be7cd12bdd0d4e04ad42835ea0c57475'
        },
        params: {
            channelId: channelId,
            page: num,
            needContent: '1',
            needAllList: '1',
            maxResult: '10',

        }
    })

    return res;
}
export async function Login(user) {
    let res = await axios.post("/api/user/login", user);
    return res;

}
///api/user/whoami   get   authorization: bearer tokenxxxx




//注销 删除token

//注册  /api/user/reg    post   loginId loginPwd   nickname

export async function reg(user){
    let res =await axios.post('/api/user/reg',user)
    return res;
}